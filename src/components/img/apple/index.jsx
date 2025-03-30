import img from "@/assets/imgs/apple.png";
import { ImageContainer } from "@/components/appSection/styles";
import { APP_APPLE_STORE_LINK } from "@/config/flavor";
import openLink from "@/helpers/links";
/**
 * Apple component renders an image of the Apple app icon.
 *
 * When the image is clicked, it redirects the user to the Apple app store link defined in `APP_APPLE_STORE_LINK`.
 * This is typically used to prompt users to download the app from the Apple App Store.
 *
 * @component
 * @example
 * <Apple />
 *
 * @returns {JSX.Element} A clickable image of the Apple app icon.
 */
const Apple = () => {
  const handleClick = () => {
    openLink(APP_APPLE_STORE_LINK);
  };
  return <ImageContainer src={img} onClick={handleClick} />;
};
export default Apple;
