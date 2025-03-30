
/**
 * Checks if the given field is valid.
 * @param {Object} field - The field to be validated.
 * @returns {boolean} True if the field is valid, false otherwise.
 */
const isValid = (field) => {
    let newData = Object.keys(field).find((value) => field[value] === '')
    if (newData) {
        return false
    }
    return true
}
/**
 * Validates if the sum of two numbers equals the given result.
 *
 * @param {Object} params - The parameters for the function.
 * @param {number|string} params.number1 - The first number to be summed. Can be a number or a string representation of a number.
 * @param {number|string} params.number2 - The second number to be summed. Can be a number or a string representation of a number.
 * @param {number|string} params.result - The expected result of the sum. Can be a number or a string representation of a number.
 * @returns {boolean} Returns `true` if the sum of `number1` and `number2` equals `result`, otherwise `false`.
 */
const isValidSum = ({
    number1, number2,
    result
}) => {
    return ((Number(number1) + Number(number2)) === Number(result))
}
export {
    isValid,
    isValidSum
}