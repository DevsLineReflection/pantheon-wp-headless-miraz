FROM node:14.17-alpine

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . ./

RUN npm run build


EXPOSE 9920

CMD ["node", "server.js"]