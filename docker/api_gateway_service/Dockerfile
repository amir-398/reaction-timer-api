FROM node:lts-alpine
WORKDIR /home/amir/app/api_gateway_service

# COPY ./api/packages/api_gateway_service/package*.json ./
# RUN npm install

COPY ./api/packages/api_gateway_service ./

EXPOSE $API_GATEWAY_SERVICE_PORT

# CMD ["npm", "run", "dev"]
CMD npm install && npm run dev