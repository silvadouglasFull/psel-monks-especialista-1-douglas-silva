# This Dockerfile sets up a lightweight Node.js development environment using Node.js 18 on Alpine Linux.
#
# Base Image:
# - Uses the official Node.js 18 image based on Alpine Linux for a minimal and efficient setup.
#
# Working Directory:
# - Sets the working directory inside the container to `/app`.
#
# Dependencies Installation:
# - Copies the `package.json` file to the container.
# - Installs the project dependencies using `npm install`.
#
# Application Code:
# - Copies all the application files from the host to the container.
#
# Port Exposure:
# - Exposes port 3001 to allow external access to the application.
#
# Default Command:
# - Starts the application in development mode using `npm run dev`.
FROM node:18-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3001

CMD [ "npm", "run", "dev" ]