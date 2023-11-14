FROM node

WORKDIR /app

COPY package.json .
RUN npm i

COPY . .

## EXPOSE [Port you mentioned in the vite.config file]
EXPOSE 4200
CMD ["npm", "run", "dev","0.0.0.0.4200"]