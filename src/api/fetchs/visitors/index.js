import headerOptions from "@/api"

const uri = '/visitors'

const methods = {
    get: 'GET',
    post: 'POST',
    update: 'UPDATE',
    delete: 'DELETE'
}

const visitors = {
    /**
     * Fetches the visitors data from the API.
     * 
     * Sends a GET request to the /visitors endpoint with the provided page query parameter.
     * If no page is provided, it defaults to page 1.
     * If the response is not successful, it returns null.
     * 
     * @async
     * @function get
     * @param {Object} params - The parameters for the request.
     * @param {number} [params.page=1] - The page number to fetch (defaults to 1).
     * @returns {Promise<Object|null>} The response object containing visitors data with an `ok` status,
     * or `null` if the response is not successful.
     * 
     * @example
     * const data = await visitors.get({ page: 2 });
     * if (data) {
     *     console.log(data.data); // List of visitors for page 2
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
    },

    /**
     * Creates a new visitor record by sending a POST request to the API.
     * 
     * Sends a POST request to the /visitors endpoint with the provided visitor details.
     * If the response is not successful, it returns null.
     * 
     * @async
     * @function post
     * @param {Object} visitor - The visitor data to create.
     * @param {string} visitor.name - The first name of the visitor.
     * @param {string} visitor.last_name - The last name of the visitor.
     * @param {string} visitor.contact - The contact information of the visitor.
     * @param {number} visitor.age - The age of the visitor.
     * @returns {Promise<Object|null>} The response object containing the created visitor data with an `ok` status,
     * or `null` if the response is not successful.
     * 
     * @example
     * const newVisitor = await visitors.post({ name: 'John', last_name: 'Doe', contact: '123-456-7890', age: 30 });
     * if (newVisitor) {
     *     console.log(newVisitor.data); // Newly created visitor data
     * }
     */
    post: async ({
        name,
        last_name,
        contact,
        age
    }) => {
        const body = {
            name,
            last_name,
            contact,
            age,
        };
        const { url, options } = headerOptions(`${uri}`, methods.post, body)
        const response = await fetch(url, options)
        if (!response.ok) {
            return null
        }
        const json = await response.json()
        return {
            ...json,
            ok: response.ok
        }
    }
}

export default visitors
