FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5173

RUN npm run dev

CMD ["npm", "run", "dev","--","--host"]

