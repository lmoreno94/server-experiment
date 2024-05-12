FROM node:18-alpine3.16

RUN npm i -d ts-node-dev

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./

RUN npm install

CMD ["npm","run dev"]