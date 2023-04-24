FROM node

WORKDIR /src

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["node", "src/app.js"]