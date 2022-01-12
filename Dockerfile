FROM node:12-alpine as builder

# TODO if node_modules need additional lib, apk add here

WORKDIR /app

COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
RUN yarn build

FROM node:12-alpine

WORKDIR /app
COPY --from=builder /app .

CMD ["yarn", "start:prod"]