cat env.js | envsubst > /usr/share/nginx/html/denunce-via-web/env.js
exec nginx -g 'daemon off;'
