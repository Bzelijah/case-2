FROM node:16-alpine

ADD . ./

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent

COPY . ./
EXPOSE 8081
RUN npm run build

CMD ["npm", "start"]