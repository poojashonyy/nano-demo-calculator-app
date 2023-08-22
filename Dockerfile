FROM node:latest

WORKDIR /home/data

COPY . .

RUN npm install

EXPOSE 8081

ENTRYPOINT ["node", "server.js"]