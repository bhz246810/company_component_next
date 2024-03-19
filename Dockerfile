FROM nginx

COPY docs-dist/. /var/www/

COPY coverage/. /var/www/coverage/

COPY .docker/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

STOPSIGNAL SIGTERM

CMD ["nginx", "-g", "daemon off;"]
