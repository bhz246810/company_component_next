const path = require('path');
// const yargs = require('yargs');
const execa = require('execa');
const fs = require('fs');

function exec(cmd, args, opts = {}) {
  console.log(`$ ${cmd} ${args.join(' ')}`);
  const promise = execa(cmd, args, opts);
  promise.stdout.pipe(process.stdout);
  promise.stderr.pipe(process.stderr);
  return promise;
}

async function getLernaVersion() {
  const lernaJson = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../lerna.json')));
  return lernaJson.version;
}

async function getLatestTaggedCommit() {
  const { stdout } = await exec('git', ['rev-list', '--tags', '--max-count', 1]);
  if (!stdout) {
    return Promise.reject('Unable to find any tagged commit.');
  }
  return stdout;
}

async function getLatestVersion() {
  const commit = await getLatestTaggedCommit();
  const { stdout } = await exec('git', ['describe', '--tags', commit]);
  return stdout;
}

async function getCurrentBranch() {
  const { stdout } = await exec('git', ['branch']);
  const match = stdout.match(/\* ([\S]+)/);
  if (match === null) {
    return Promise.reject('Unable to detect current git branch.');
  }
  return match[1];
}

async function lernaVersion(version) {
  return exec('lerna', ['version', version, '--yes', '--no-push', '--force-publish']);
}

async function lernaChanged() {
  const { stdout } = (await exec('lerna', ['changed']).catch(() => {})) || { stdout: '' };
  const { gitStdout } = (await exec('git', ['status', '-s']).catch(() => {})) || { stdout: '' };
  if (gitStdout) {
    return Promise.reject('please use pnpm add-commit first');
  }
  const match = stdout.match(/\No changed packages found/);
  if (!stdout || match) {
    return Promise.reject('No changed packages found');
  }
}

async function gitPush() {
  return exec('git', ['push', '--follow-tags']);
}

async function signTag() {
  const currVersion = await getLernaVersion();
  const testVersion = await getLatestVersion();
  const currBranch = await getCurrentBranch();
  if (['master', 'test'].includes(currBranch)) {
    console.log('\x1B[31m请在 feature 分支进行操作\x1B[0m');
    return Promise.reject(`请在 feature 分支进行操作`);
  }
  if (!testVersion.includes('alpha')) {
    console.log(
      `\x1B[31m请${
        currVersion === testVersion ? '' : '合并 master，并'
      }使用 pnpm lv:patch(minor):change-alpha\x1B[0m`,
    );
    return Promise.reject(
      `❗️请${
        currVersion === testVersion ? '' : '合并 master，并'
      }使用 pnpm lv:patch(minor):change-alpha`,
    );
  }
  await lernaVersion(
    testVersion.split('-alpha.')[0] + '-alpha.' + (~~testVersion.match(/[^alpha.]+$/)[0] + 1),
  );
}

function cli() {
  process.on('exit', function () {
    console.log('----exit');
  });
  process.stdin.setEncoding('utf8');
  process.stdout.write('确认push嘛(y/n)？');
  process.stdout.write('......');
  process.stdin.on('data', async (input) => {
    input = input.toString().trim();
    if (['Y', 'y', 'YES', 'yes'].indexOf(input) > -1) {
      await gitPush();
    }
    if (['N', 'n', 'No', 'no', ''].indexOf(input) > -1) {
      console.log('\n已取消提交');
    }
    process.exit(0);
  });
}
(async () => {
  await lernaChanged();
  await signTag();
  await cli();
})();
