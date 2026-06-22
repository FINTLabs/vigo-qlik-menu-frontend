FROM node:24-alpine AS build
WORKDIR /src

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /src/dist/ /usr/share/nginx/html

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
