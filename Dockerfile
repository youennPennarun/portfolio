FROM    ubuntu

RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
RUN apt-get install -y nodejs
RUN npm install -g npm

RUN npm install -g gulp

ADD ./package.json /tmp/package.json
RUN cd /tmp && npm install

RUN mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/

WORKDIR /opt/app
ADD . /opt/app

RUN cd /opt/app && gulp build

EXPOSE  8080
CMD ["node", "/opt/app/server/app.js"]
