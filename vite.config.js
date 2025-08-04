// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// // ✅ Set the correct base path (your repo name)
// export default defineConfig({
//   base: "/Nextflix/",
//   plugins: [react(), tailwindcss()],
// })


// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // <-- Add this line
})
