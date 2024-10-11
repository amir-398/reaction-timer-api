FROM node:lts-alpine

WORKDIR /home/amir/app/timer_service

COPY ./api/packages/timer_service/package*.json ./

RUN npm install

COPY ./api/packages/timer_service ./

EXPOSE $TIMER_SERVICE_PORT

CMD ["npm", "run", "dev"]