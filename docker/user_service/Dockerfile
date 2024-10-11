FROM node:lts-alpine

WORKDIR /home/amir/app/user_service

COPY ./api/packages/user_service/package*.json ./

RUN npm install

COPY ./api/packages/user_service ./

EXPOSE $USER_SERVICE_PORT

CMD ["npm", "run", "dev"]