# Stage 1: Build the application
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy app source code
COPY . .

# Build the app
RUN npm run build

# Stage 2: Serve the application
FROM node:20-alpine

# Set working directory
WORKDIR /usr/src/app

# Install serve to serve the build
RUN npm install -g serve

# Copy only the build output from the builder stage
COPY --from=builder /usr/src/app/build /usr/src/app/build

# Expose the port the app runs on
EXPOSE 3000

# Serve the app
CMD ["serve", "-s", "build"]