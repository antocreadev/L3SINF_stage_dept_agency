# Utilisez une image de base contenant Node.js
FROM node:18-alpine

# Définissez le répertoire de travail dans l'image
WORKDIR /app

# Copiez les fichiers de votre projet dans l'image
COPY package.json .
COPY package-lock.json .

# Installez les dépendances du projet
RUN npm install --production

# Copiez le reste des fichiers du projet dans l'image
COPY . .

# Exécutez la construction de votre application Next.js
RUN npm run build

# Exposez le port sur lequel votre application Next.js s'exécute (par défaut : 3000)
EXPOSE 3000

# Commande par défaut à exécuter lorsque le conteneur démarre
CMD ["npm", "run", "start"]
