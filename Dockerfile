FROM node

WORKDIR /usr/src/app

COPY . .

RUN npm install mysql dotenv express express-validator

EXPOSE 9898

ENTRYPOINT ["node", "index.js"]