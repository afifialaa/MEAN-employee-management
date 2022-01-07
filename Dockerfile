FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

ENV NODE_ENV development

EXPOSE 8080
CMD ["node", "server.js"]
