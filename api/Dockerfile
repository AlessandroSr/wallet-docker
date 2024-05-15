# syntax=docker/dockerfile:1
# usar a ultima versao do node
FROM node:latest  

WORKDIR /api

# vai copia
COPY . .

# vai apagar a node_modules
RUN rm -rf node_modules

# vai intalar as depedencias
RUN npm i

CMD ["npm", "start"]
EXPOSE 5002