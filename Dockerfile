FROM node:18

RUN mkdir -p /home/app
WORKDIR /home/app

COPY . /home/app

RUN npm install
RUN npm install -g @angular/cli
EXPOSE 4200

CMD ["ng", "serve", "-o"]
