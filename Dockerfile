FROM node:10-alpine as build
COPY . /src
WORKDIR /src
RUN yarn && yarn build
RUN pwd
RUN ["ls", "-lag"]

FROM nginx:stable-alpine
COPY --from=build /src/build/ /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
