FROM node:20-alpine

COPY package*.json .

RUN npm ci

COPY . .

RUN npm run build


EXPOSE 4173

CMD [ "npm", "run", "preview" ]