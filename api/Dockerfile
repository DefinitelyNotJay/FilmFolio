FROM node:18

COPY package*.json pnpm-lock.yaml ./
RUN npm install -g pnpm

RUN pnpm install

COPY . .

EXPOSE 5173

CMD ["node", "index.js"] # เปลี่ยน index.js เป็นชื่อไฟล์หลักของ Express app
