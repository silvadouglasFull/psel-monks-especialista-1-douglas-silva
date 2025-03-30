import headerOptions from "@/api"

const uri = '/numbers'

const methods = {
    get: 'GET',
    post: 'POST',
    update: 'UPDATE',
    delete: 'DELETE'
}

const numbers = {
    /**
     * Fetches the numbers data from the API.
     * 
     * Sends a GET request to the /numbers endpoint and retrieves a JSON object with
     * two numeric properties: number1 and number2. If the response is not successful, 
     * it returns null.
     * 
     * @async
     * @function get
     * @returns {Promise<Object|null>} The response object containing data with `number1` and `number2` 
     * along with an `ok` status, or `null` if the response is not successful.
     * 
     * @example
     * const data = await numbers.get();
     * if (data) {
     *     console.log(data.data.number1, data.data.number2);
     * }
     */
    get: async () => {
        const { url, options } = headerOptions(`${uri}`, methods.get)
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

export default numbers
