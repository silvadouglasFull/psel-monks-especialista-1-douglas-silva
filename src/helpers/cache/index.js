/**
 * Manages caching of data in the browser's localStorage.
 *
 * @param {string} nameCache - The key name for the cache entry in localStorage.
 * @param {*} value - The value to be stored in the cache. If falsy, the cache entry will be removed.
 * @returns {void} - Does not return a value.
 */
const storageCache = (nameCache, value) => {
    if (!value) {
        return window.localStorage.removeItem(nameCache)
    }
    return window.localStorage.setItem(nameCache, JSON.stringify(value))
}
/**
 * Retrieves and parses a JSON object from the browser's localStorage.
 *
 * @param {string} nameCache - The key name of the cache item to retrieve from localStorage.
 * @returns {Object|null} The parsed JSON object if the key exists, or null if the key does not exist or the value is not valid JSON.
 */
const recoverCache = (nameCache) => {
    return JSON.parse(window.localStorage.getItem(nameCache))
}
export {
    storageCache,
    recoverCache
}