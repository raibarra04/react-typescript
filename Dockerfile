FROM node:20-alpine

ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PWD=password

RUN mkdir -p /home/node-app

COPY . /home/node-app

CMD ["node", "/home/node-app/src/server.js"]