# Step 1: Build React App
FROM node:18 AS build

WORKDIR /app

# ติดตั้ง pnpm
RUN npm install -g pnpm

# Copy package.json และถ้าไม่มี pnpm-lock.yaml ก็ไม่ต้อง copy
COPY package.json ./

# ติดตั้ง dependencies ด้วย pnpm
RUN pnpm install

# Copy source code และ build ด้วย pnpm
COPY . .
RUN pnpm run build
