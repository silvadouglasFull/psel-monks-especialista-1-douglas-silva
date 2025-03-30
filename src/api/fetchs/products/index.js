import headerOptions from "@/api"

const uri = '/products'

const methods = {
    get: 'GET',
    post: 'POST',
    update: 'UPDATE',
    delete: 'DELETE'
}

const products = {
    /**
     * Fetches the products data from the API.
     * 
     * Sends a GET request to the /products endpoint with the provided page query parameter.
     * The function fetches a paginated list of products. If no page is provided, it defaults to page 1.
     * If the response is not successful, it returns null.
     * 
     * @async
     * @function get
     * @param {Object} params - The parameters for the request.
     * @param {number} [params.page=1] - The page number to fetch (defaults to 1).
     * @returns {Promise<Object|null>} The response object containing products data with an `ok` status,
     * or `null` if the response is not successful.
     * 
     * @example
     * const data = await products.get({ page: 2 });
     * if (data) {
     *     console.log(data.data); // List of products for page 2
     * }
     */
    get: async ({ page }) => {
        const { url, options } = headerOptions(`${uri}?page=${page || 1}`, methods.get)
        const response = await fetch(url, options)
        const json = await response.json()
        if (!response.ok) {
            return null
        }
        return {
            ...json,
            ok: response.ok
        }
    }
}

export default products
