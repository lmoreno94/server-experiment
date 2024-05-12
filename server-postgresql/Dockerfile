FROM node:18-alpine3.16

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./

RUN npm install
RUN npm i -d ts-node-dev

EXPOSE 3000

CMD ["npm","run dev"]