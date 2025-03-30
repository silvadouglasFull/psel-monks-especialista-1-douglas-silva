import * as flavorConfig from "@/config/flavor";
import { recoverCache } from "@/helpers/cache";
/**
 * Retrieves the base URL for the API.
 *
 * @returns {string} The base URL defined in the flavor configuration.
 */
const getBaseUrl = () => {
    return `${flavorConfig.API_URL}`
}
/**
 * Retrieves the API version from the flavor configuration.
 *
 * @returns {string} The current API version as defined in the flavor configuration.
 */
const getVersion = () => {
    return `${flavorConfig.API_VERSION}`
}
/**
 * Retrieves the API key from the flavor configuration.
 *
 * @returns {string} The API key as a string.
 */
const getApiKey = () => {
    return `${flavorConfig.API_KEY}`
}
/**
 * Generates header options for making HTTP requests.
 * @param {string} uri - The URI endpoint for the request.
 * @param {string} method - The HTTP method (e.g., 'get', 'post', 'put', 'delete').
 * @param {Object} body - The request body (for methods like 'post' and 'put').
 * @returns {Object} An object containing URL and options for making the request.
 */
const headerOptions = (uri, method, body) => {
    const token = recoverCache('authenticated')
    const host = `${getBaseUrl()}/${getVersion()}`
    let headers = {
        'api-key': getApiKey(),
    }
    if (token) {
        headers = {
            ...headers,
            'Authorization': `Bearer ${token}`,
        }
    }
    if (method !== 'get') {
        headers = {
            ...headers,
            'Content-Type': 'application/json',
        }
    }
    if (method === 'get') {
        return {
            url: `${host}${uri}`,
            options: {
                method: method,
                headers,
            },
        }
    }
    return {
        url: `${host}${uri}`,
        options: {
            method: method,
            headers,
            body: JSON.stringify(body),
        },
    }
}
export default headerOptions