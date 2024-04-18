FROM node

WORKDIR /usr/src/app

COPY . .

RUN npm install mysql dotenv express express-validator

ENTRYPOINT ["node", "index.js"]