# This Dockerfile sets up a lightweight Node.js environment using the Node.js 18 Alpine image.
# 
# 1. FROM node:18-alpine
#    - Specifies the base image as Node.js 18 on Alpine Linux, which is a minimal and efficient image.
#
# 2. WORKDIR /app
#    - Sets the working directory inside the container to "/app".
#
# 3. COPY package.json .
#    - Copies the "package.json" file from the host to the container's working directory.
#
# 4. RUN npm install
#    - Installs the dependencies listed in "package.json" using npm.
#
# 5. COPY . .
#    - Copies all files from the host's current directory to the container's working directory.
#
# 6. EXPOSE 8080
#    - Informs Docker that the container will listen on port 8080 at runtime.
#
# 7. CMD [ "npm", "run", "dev" ]
#    - Specifies the default command to run when the container starts, which in this case is "npm run dev".
FROM node:18-alpine

WORKDIR /app

COPY package.json .

RUN npm install

RUN npm i -g serve

COPY . .

RUN npm run build

EXPOSE 3001

CMD [ "serve", "-s", "dist" ]