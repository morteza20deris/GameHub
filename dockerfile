FROM node:current-alpine3.20
# RUN addgroup app && adduser -S -G app app
# USER app
WORKDIR /app
COPY package*.json .
RUN npm i
RUN npm audit fix
EXPOSE 3000
COPY . .
CMD npm run dev