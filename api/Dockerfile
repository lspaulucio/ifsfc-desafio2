FROM node:12.14.0-alpine3.11

RUN apk add --no-cache bash

WORKDIR /usr/src/app

COPY . .

RUN npm install 

CMD ["npm","run","start:dev"] 
