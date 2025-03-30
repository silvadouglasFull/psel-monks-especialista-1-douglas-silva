# Use a imagem oficial do Node.js como base
FROM node:16 AS build

# Defina o diretório de trabalho
WORKDIR /app

# Copie o arquivo package.json e o package-lock.json (ou yarn.lock)
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie todos os arquivos da aplicação para dentro do container
COPY . .

# Crie a aplicação para produção
RUN npm run build

# Use a imagem Nginx para servir a aplicação
FROM nginx:alpine

# Copie os arquivos da build para o Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Exponha a porta 3000 para o Nginx
EXPOSE 3000

# Inicie o Nginx
CMD ["nginx", "-g", "daemon off;"]
