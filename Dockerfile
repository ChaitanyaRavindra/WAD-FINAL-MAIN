FROM node:alpine
WORKDIR /usr/src/app
COPY src/package.json ./
RUN npm install
COPY . .
CMD ["npm","start"]
