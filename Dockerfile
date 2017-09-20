FROM node:6-alpine

WORKDIR /usr/src/app/
COPY package.json .

RUN npm install

EXPOSE 3000
