FROM node:8-stretch

WORKDIR /opt/trambar

# install ffmpeg
RUN apt-get -y update && apt-get -y install ffmpeg

COPY package.json backend/
COPY package-lock.json backend/
RUN cd backend && npm install strip-ansi -g && npm install -g npm@6.4 && npm ci

# install nodemon
RUN npm -g install nodemon

WORKDIR /opt/trambar/backend/src
