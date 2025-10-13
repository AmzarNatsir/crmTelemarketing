# --- Base image ---
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy all source files
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Build NestJS app
RUN npm run build


# --- Production stage ---
FROM node:20-alpine AS runner
WORKDIR /app

# Copy only the built app and node_modules from builder
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
COPY package*.json ./

# Set environment variables (optional override later)
ENV NODE_ENV=production

# Expose the NestJS port
EXPOSE 3000

# Start the app
# CMD ["node", "dist/main.js"]

# Jalankan migrate sebelum start app
CMD npx prisma migrate deploy && node dist/main.js
