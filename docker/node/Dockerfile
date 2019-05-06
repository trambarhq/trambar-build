FROM node:12-stretch

WORKDIR /opt/trambar

# install ffmpeg
RUN apt-get -y update && apt-get -y install ffmpeg

# install dependencies
COPY package.json backend/
COPY package-lock.json backend/
RUN cd backend && npm install -g npm && npm ci --only=production

# copy codebase
COPY common common/
COPY backend backend/

WORKDIR /opt/trambar/backend/src
