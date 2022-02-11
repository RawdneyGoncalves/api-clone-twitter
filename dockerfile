
from node:alpine

workdir /user/app

copy packpage*.json ./

run npm install
