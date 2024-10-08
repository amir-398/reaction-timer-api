FROM node:lts-alpine

WORKDIR /home/amir/app/src/

COPY ./api/src/package*.json ./

RUN npm install

COPY ./api/src/ .

EXPOSE 3000

CMD ["npm", "run", "dev"]