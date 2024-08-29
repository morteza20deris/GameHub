FROM node:current-alpine3.20
RUN addgroup app && adduser -S -G app app
USER app
WORKDIR /app
COPY package*.json .
RUN yarn install
EXPOSE 5173
COPY . .
CMD yarn run dev