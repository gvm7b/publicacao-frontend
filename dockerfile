FROM node:18 AS build
WORKDIR /app

COPY . .
RUN npm install
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist/front-end /usr/shared/nginx/html
EXPOSE 8081