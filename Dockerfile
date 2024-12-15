FROM node:18

WORKDIR /app

COPY package.json package-lock.json ./

# Install app dependencies
RUN npm install

#Copy all files to the container
COPY . .

# Expose the port the app runs on (3000 for your app)
EXPOSE 3000

# Step 7: Command to run the application when the container starts
CMD ["node", "server.js"]
