#Stage 1: Build the application
FROM node:20-alpine AS build

#Equivalent to cd app in terminal and if not present, it will create a new directory
WORKDIR /app 

#Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./ 

#Install the dependencies
RUN npm install 

#Copy the rest of the application files to the working directory
COPY . . 

#Build the application
RUN npm run build 

#Stage 2: Create a production build
FROM nginx:alpine AS production

#Copy the production build to the nginx html directory
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80 

#Start the nginx server
CMD ["nginx", "-g", "daemon off;"] 