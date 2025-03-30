# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# About Project

# Layout Challenge - React Vite Project

This project is a layout challenge where you will need to run a React project using Vite, based on a design provided in Figma. In order for the application to work correctly, follow the steps below.

## Prerequisites

Before starting, make sure you have the following installed:

- Docker
- Docker Compose
- Node.js (optional but recommended for local development)

## Steps to Run the Project

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/silvadouglasFull/psel-monks-especialista-1-douglas-silva
git clone https://github.com/silvadouglasFull/api-psel-monks-especialista-1-douglas-silva
cd psel-monks-especialista-1-douglas-silva

```
- To Api see Readme.md from folder api-psel-monks-especialista-1-douglas-silva
### 2. Copy the Configuration File

The project depends on a configuration file to work correctly. Before running Docker Compose, copy the src/config/flavor/monks.js file to the src/config/flavor/index.js directory:

```bash
cp src/config/flavor/monks.js src/config/flavor/index.js
```

### 3. Fill in the Environment Variables

The project also requires you to fill in the environment variables in the .env file. Open the .env file and insert the appropriate values for the required variables. If you don't have the values, consult the developer responsible.

### 4. Build and Run the Project with Docker Compose

Now, you can build and start the Docker containers with the following command:

```bash
docker-compose up -d --build
```

This command will build the Docker image and start the container to run the application.

### 5. Access the Application

Once Docker Compose is running, open your browser and go to the URL:

```bash
http://localhost:3000
```

This should load the React application, and you will see the layout as per the Figma design.

### Common Issues

- if you encounter errors when starting the container, check if the variables in the .env file are correctly filled in.
- If the container does not start properly, check the logs with the following command:

```bash
docker-compose logs
```

### Contributions

If you find any issues or want to improve the project, feel free to submit pull requests. We appreciate your collaboration!

```bash

This `README.md` explains the steps required to set up and run the project correctly, including how to handle configuration files and environment variables, as well as how to use Docker Compose to run the application.
```
