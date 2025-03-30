/**
 * Vite configuration for a React project.
 * This configuration includes the use of the React plugin and sets up path aliases for cleaner imports.
 *
 * - `plugins`: An array of plugins used by Vite. Here, the React plugin is included to handle React-related transformations.
 * - `resolve.alias`: Configures path aliases to simplify module imports. The `@` alias points to the `src` directory.
 *
 * Example usage:
 * - You can import files from the `src` folder using `@/`, for example:
 *   ```js
 *   import Button from '@/components/Button';
 *   ```
 *
 * @type {import('vite').UserConfig}
 * @property {Array<import('vite').PluginOption>} plugins - An array of plugins to use with Vite, including React support.
 * @property {Object} resolve - Configuration for resolving modules.
 * @property {Object} resolve.alias - Path alias configuration for simplified imports.
 * @property {string} resolve.alias['@'] - Sets the alias `@` to resolve to the `./src` directory, allowing imports to be relative to `src`.
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(path.dirname(new URL(import.meta.url).pathname), './src'), // Use '@' to reference 'src' folder
    },
  }
})
