/**
 * Opens a given URL in a new browser tab and focuses on it.
 *
 * @param {string} link - The URL to open. If no URL is provided, the function does nothing.
 */
const openLink = (link) => {
    if (!link) {
        return
    }
    window.open(link, '_blank').focus()
}
export default openLink