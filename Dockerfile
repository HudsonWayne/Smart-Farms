# Use Node.js base image
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your app
COPY . .

# Build the Next.js app
RUN npm run build

# Expose port 3000 and start the app
EXPOSE 3000
ENV PORT 3000
CMD ["npm", "start"]
