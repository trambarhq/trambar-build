FROM node:8

WORKDIR /opt/trambar

COPY package.json backend/
COPY package-lock.json backend/
RUN cd backend && npm install strip-ansi -g && npm install -g npm@6.4 && npm ci

# install nodemon
RUN npm -g install nodemon

# install ffmpeg
RUN echo "deb http://ftp.uk.debian.org/debian jessie-backports main" >> /etc/apt/sources.list.d/backports.list
RUN apt-get -y update && apt-get -y install ffmpeg

WORKDIR /opt/trambar/backend/src
