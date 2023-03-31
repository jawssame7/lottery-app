import {defineConfig} from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [
        laravel([
            'resources/sass/app.scss',
            'resources/react/src/main.tsx',
        ]),
        react(),
    ],
});
