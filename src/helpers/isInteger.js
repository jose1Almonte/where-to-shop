
/**
 * Verify if the value is integer
 * @param {string} value - The value to verify
 * @returns {boolean} - 'true' if the value is integer, 'false' if not
 */
export function isInteger(value) {
    const parsedValue = parseInt(value, 10);
    if (!isNaN(parsedValue) && Number.isInteger(parsedValue)) {
        return true
    }
  return false
}