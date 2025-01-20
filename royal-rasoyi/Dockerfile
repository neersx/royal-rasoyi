# Stage 1: Build the application
FROM node:22.13 as builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the Angular SSR application
RUN npm run build:ssr

# Stage 2: Run the application
FROM node:22.13 as runner

# Set working directory
WORKDIR /app

# Copy the built application from the builder stage
COPY --from=builder /app/dist/royal-rasoyi /app/dist/royal-rasoyi

# Install only production dependencies
COPY package*.json ./
RUN npm install --only=production

# Expose port 4000
EXPOSE 4000

# Start the application using the SSR server
CMD ["node", "dist/royal-rasoyi/server/main.js"]
