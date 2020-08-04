FROM node:10.16.0
COPY . /usr/src/app
WORKDIR /usr/src/app 
RUN npm install
EXPOSE 8082
CMD ["npm", "start"]