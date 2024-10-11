FROM node:lts-alpine

WORKDIR /home/amir/app/auth_service

COPY ./api/packages/auth_service/package*.json ./

RUN npm install

COPY ./api/packages/auth_service ./

EXPOSE $AUTH_SERVICE_PORT

CMD ["npm", "run", "dev"]