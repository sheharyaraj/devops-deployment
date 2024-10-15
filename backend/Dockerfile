FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies (including nodemon)
RUN npm install --save-dev nodemon

# Copy the rest of the application code
COPY . .

# Expose port 5000
EXPOSE 5001

# Command to run the app with nodemon
CMD ["npm", "run", "dev"]

