/**
 * Defines the breakpoints for responsive design in the application.
 * These breakpoints are used to apply specific styles at different screen sizes.
 */

/**
 * The mobile breakpoint is set to 480px.
 * This is used for styling on small screen devices like mobile phones.
 * @constant {string}
 */
const breakpoints = {
    mobile: "480px",

    /**
     * The tablet breakpoint is set to 768px.
     * This is used for styling on medium screen devices like tablets.
     * @constant {string}
     */
    tablet: "768px",

    /**
     * The desktop breakpoint is set to 1024px.
     * This is used for styling on larger screen devices like desktops and laptops.
     * @constant {string}
     */
    desktop: "1024px",
};

/**
 * Exports the breakpoints object to be used across the application for responsive styling.
 */
export { breakpoints };
