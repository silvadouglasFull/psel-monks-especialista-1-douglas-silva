import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { colors } from "@/assets/monks/colors";
/**
 * Hamburger component renders a FontAwesome hamburger icon.
 *
 * This icon can be used for triggering a mobile navigation menu or other interactive elements.
 * It is styled with the primary brand color for visibility and consistency.
 *
 * @component
 * @example
 * <Hamburger />
 *
 * @returns {JSX.Element} A FontAwesome hamburger icon with a specific fill color.
 */
const Hamburger = () => <FontAwesomeIcon icon={faBars} fill={colors.blank} />;
export { Hamburger };
