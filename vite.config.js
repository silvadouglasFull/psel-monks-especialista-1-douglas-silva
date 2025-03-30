
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

/**
 * Vite configuration file.
 *
 * @type {import('vite').UserConfig}
 * @property {Array} plugins - Array of Vite plugins. In this case, it includes the React plugin.
 * @property {Object} preview - Configuration for the preview server.
 * @property {number} preview.port - Port number for the preview server (default: 3001).
 * @property {boolean} preview.strictPort - Ensures the preview server uses the specified port strictly.
 * @property {Object} server - Configuration for the development server.
 * @property {number} server.port - Port number for the development server (default: 3001).
 * @property {boolean} server.strictPort - Ensures the development server uses the specified port strictly.
 * @property {boolean} server.host - Allows the server to be accessible externally.
 * @property {string} server.origin - Specifies the origin URL for the server.
 * @property {Object} resolve - Configuration for module resolution.
 * @property {Object} resolve.alias - Aliases for module paths.
 * @property {string} resolve.alias'@' - Alias for the 'src' folder, allowing it to be referenced using '@'.
 */
export default defineConfig({
  plugins: [react()],
  preview: {
    port: 3001,
    strictPort: true,
  },
  server: {
    port: 3001,
    strictPort: true,
    host: true,
    origin: "http://0.0.0.0:3001",
  },
  resolve: {
    alias: {
      '@': path.resolve(path.dirname(new URL(import.meta.url).pathname), './src'), // Use '@' to reference 'src' folder
    },
  }
})
