/**
 * Configuration file for the application, defining API settings, assets, and app-specific constants.
 * These values are used throughout the application for API calls, asset imports, and platform-specific links.
 */

/**
 * The base URL for the API. It can be overridden by the environment variable `VITE_REACT_APP_API_URL`.
 * If not set, defaults to `http://default-api-url.com`.
 * @constant {string}
 */
const API_URL = import.meta.env.VITE_REACT_APP_API_URL || 'http://default-api-url.com';

/**
 * The API key for authentication. It can be overridden by the environment variable `VITE_REACT_APP_API_KEY`.
 * If not set, defaults to `default-api-key`.
 * @constant {string}
 */
const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY || 'default-api-key';

/**
 * The API version being used. It can be overridden by the environment variable `VITE_REACT_APP_API_VERSION`.
 * If not set, defaults to version `0`.
 * @constant {number}
 */
const API_VERSION = import.meta.env.VITE_REACT_APP_API_VERSION || 0;

/**
 * The name of the client for which the application is being built.
 * @constant {string}
 */
const FLAVOR = 'Monks';

/**
 * The logo image for the application (Monks).
 * @constant {string}
 */
import logo from "@/assets/monks/logo.svg";

/**
 * The navigation top image used in the header of the application (Monks).
 * @constant {string}
 */
import navTopImage from "@/assets/monks/navTopImage.svg";

/**
 * The signature image used at the footer or as part of branding in the application (Monks).
 * @constant {string}
 */
import signature from "@/assets/monks/signature.svg";

/**
 * The image used in the form section of the application (Monks).
 * @constant {string}
 */
import formImage from "@/assets/monks/formImage.svg";

/**
 * The link to the Apple Store for the application download.
 * @constant {string}
 */
const APP_APPLE_STORE_LINK = 'https://www.apple.com/br/store?cid=aos-br-kwgo-brand';

/**
 * The link to the Android Store for the application download.
 * @constant {string}
 */
const APP_ANDROID_STORE_LINK = 'https://play.google.com/store/apps?hl=pt_BR';

/**
 * Exports all constants and assets used in the application.
 */
export {
    API_URL,
    API_KEY,
    API_VERSION,
    FLAVOR,
    logo,
    navTopImage,
    signature,
    formImage,
    APP_APPLE_STORE_LINK,
    APP_ANDROID_STORE_LINK,
};
