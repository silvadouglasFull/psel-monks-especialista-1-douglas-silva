import img from "@/assets/imgs/android.png";
import { ImageContainer } from "@/components/appSection/styles";
import { APP_ANDROID_STORE_LINK } from "@/config/flavor";
import openLink from "@/helpers/links";
/**
 * Android component renders an image of the Android app icon.
 *
 * When the image is clicked, it redirects the user to the Android app store link defined in `APP_ANDROID_STORE_LINK`.
 * This is typically used to prompt users to download the app from the Android store.
 *
 * @component
 * @example
 * <Android />
 *
 * @returns {JSX.Element} A clickable image of the Android app icon.
 */
const Android = () => {
  const handleClick = () => {
    openLink(APP_ANDROID_STORE_LINK);
  };
  return <ImageContainer src={img} onClick={handleClick} />;
};
export default Android;
