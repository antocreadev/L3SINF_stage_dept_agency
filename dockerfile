# Utilisez une image de base contenant Node.js
FROM node:18-alpine

# Définissez le répertoire de travail dans l'image
WORKDIR /app

# Copiez les fichiers de votre projet dans l'image
COPY package.json .
COPY package-lock.json .

# Vérifiez si les fichiers package.json et package-lock.json existent
RUN if [ ! -f package.json ]; then echo "Erreur: Le fichier package.json est manquant"; exit 1; fi
RUN if [ ! -f package-lock.json ]; then echo "Erreur: Le fichier package-lock.json est manquant"; exit 1; fi

# Installez les dépendances du projet
RUN npm install --production

# Vérifiez si le répertoire src existe et s'il contient des fichiers
RUN if [ ! -d src ]; then echo "Erreur: Le répertoire src est manquant"; exit 1; fi
RUN ls -R

# Copiez le reste des fichiers du projet dans l'image
COPY . .

# Exécutez la construction de votre application Next.js
RUN echo "Construction de l'application Next.js..."
RUN npm run build

# Exposez le port sur lequel votre application Next.js s'exécute (par défaut : 3000)
EXPOSE 3000

# Commande par défaut à exécuter lorsque le conteneur démarre
CMD ["npm", "run", "start"]
