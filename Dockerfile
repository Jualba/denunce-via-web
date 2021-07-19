

FROM nginx:1.19.6

WORKDIR /usr/src/app

COPY package.json package-lock.json src/env.js ./
COPY docker/nginx.conf /etc/nginx/nginx.conf

#Install dependencies
RUN ls -la && \
    apt-get update && \
    apt-get --assume-yes install vim && \
    apt-get --assume-yes install npm && \
    npm install --silent && \
	ls -la

COPY . .

RUN ls -la && \
	npm run build_prod && \
    cat /etc/nginx/nginx.conf && \
    mv dist/denunce-via-web /usr/share/nginx/html && \
    ls -la /usr/share/nginx/html && \
	rm -r node_modules

CMD ["bash","./docker/entrypoint.sh"]

#STARTARE IN LOCALE DOPO BUILD, sostiruire <NOMEAPP> con il nome dell applicazione
#docker build -t <NOMEAPP> .
#docker run -p 8090:80 -it <NOMEAPP>
