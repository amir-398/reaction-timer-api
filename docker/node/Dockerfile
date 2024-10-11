FROM node:20.17-slim AS builder

WORKDIR /home/amir/app/src/

COPY ./api/src/package*.json ./

RUN npm install --ignore-scripts

COPY ./api/src/ .

# RUN npm run build

ENV TZ=Europe/Paris

EXPOSE 3000

USER node

CMD ["npm", "run", "dev"]