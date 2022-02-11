
from node:alpine

workdir /user/app

copy packpage*.json ./

run npm install

copy .. 

expose 3000

CMD []
