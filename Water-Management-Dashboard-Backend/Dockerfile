FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
COPY . /usr
EXPOSE 3000
EXPOSE 3005
CMD ["npm","start"]
