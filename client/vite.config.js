import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		proxy: {
			'/api': {
				target: 'http://3.81.23.137:3000', // URL ของ Backend
				changeOrigin: true, // เปลี่ยน Origin ของคำขอ
				rewrite: (path) => path.replace(/^\/api/, ''), // ปรับเส้นทางถ้าจำเป็น
			},
		},
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
});
