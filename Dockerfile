FROM node:14.17-alpine

WORKDIR /app

COPY package*.json ./

RUN yarn

COPY . ./

EXPOSE 9920

CMD ["node", "server.js"]