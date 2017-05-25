FROM node:6

WORKDIR /opt/trambar

COPY package.json backend/
RUN cd backend && npm install

# install nodemon
RUN npm -g install nodemon

WORKDIR /opt/trambar/backend/src
