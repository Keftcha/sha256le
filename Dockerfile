FROM caddy:2.4.6-alpine

WORKDIR /usr/share/caddy

COPY index.html .
COPY app.js .
