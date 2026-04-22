FROM node:25-alpine AS build
WORKDIR /src

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /src/build/ /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]