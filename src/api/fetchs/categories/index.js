import headerOptions from "@/api";

const uri = '/categories';
const methods = {
    get: 'GET',
    post: 'POST',
    update: 'UPDATE',
    delete: 'DELETE'
};

/**
 * Categories API functions
 * @module categories
 */
const categories = {
    /**
     * Fetches a list of categories with pagination support.
     * 
     * @param {Object} params - The parameters for the request.
     * @param {number} [params.page=1] - The page number for pagination (default is 1).
     * 
     * @returns {Promise<Object|null>} The response object containing the categories data, or `null` if the request fails.
     * 
     * @throws {Error} If the fetch request encounters an error.
     */
    get: async ({ page }) => {
        const { url, options } = headerOptions(`${uri}?page=${page || 1}`, methods.get);

        // Make the API request
        const response = await fetch(url, options);

        // Parse the response as JSON
        const json = await response.json();

        // If the response is not successful, return null
        if (!response.ok) {
            return null;
        }

        // Return the data with an 'ok' flag indicating the success of the response
        return {
            ...json,
            ok: response.ok
        };
    }
};

export default categories;
