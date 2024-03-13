const execa = require('execa');
const execSync = require('child_process').execSync;
function exec(cmd, args, opts = {}) {
  console.log(`$ ${cmd} ${args.join(' ')}`);
  const promise = execa(cmd, args, opts);
  promise.stdout.pipe(process.stdout);
  promise.stderr.pipe(process.stderr);
  return promise;
}
function cli(err) {
  process.on('release', function () {
    console.log('----release----');
  });
  process.stdin.setEncoding('utf8');
  process.stdout.write(`❗️确认不${err}\n❗️进行危险的release嘛(y/n)？`);
  process.stdout.write('......');
  process.stdin.on('data', async (input) => {
    input = input.toString().trim();
    if (['Y', 'y', 'YES', 'yes'].indexOf(input) > -1) {
      // release
    }
    if (['N', 'n', 'No', 'no', ''].indexOf(input) > -1) {
      process.exit(1);
    }
    process.exit(0);
  });
}

async function checkLocalCommit() {
  let { stdout } = await exec('git', ['status']);
  if (stdout.includes(`git push`)) {
    console.log(
      '\x1B[31m请前往"https://github.com/bhz246810/company_component_next"提交合并请求来发布您的本地提交\x1B[0m',
    );
    await cli(
      '前往"https://github.com/bhz246810/company_component_next"提交合并请求来发布您的本地提交',
    );
  } else if (stdout.includes(`git add`)) {
    console.log('\x1B[31m请使用 "pnpm add-commit"\x1B[0m');
    await cli('使用 "pnpm add-commit"');
  }
}
(async () => {
  await checkLocalCommit();
})();
