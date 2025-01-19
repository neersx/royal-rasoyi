# Step 1: Build Angular app
FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build:ssr

# Step 2: Serve Angular SSR app
FROM node:18
WORKDIR /app
COPY --from=builder /app/dist /app/dist
COPY server.ts ./
COPY package*.json ./
RUN npm install --production

EXPOSE 4000
CMD ["node", "server.js"]
