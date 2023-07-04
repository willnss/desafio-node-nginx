FROM node:20-alpine

WORKDIR /usr/src/app

COPY ./package.json ./
RUN npm config rm https-proxy
RUN npm install
COPY ./index.js ./

CMD ["npm", "start"]