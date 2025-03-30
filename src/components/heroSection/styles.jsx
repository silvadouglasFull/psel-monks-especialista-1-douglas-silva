import { colors } from "@/assets/monks/colors";
import { breakpoints } from "@/constants/breackPoints";
import styled from "styled-components";
/**
 * TitleContainer is a styled div used to hold title content. It is designed to be responsive with flexible padding,
 * and it adapts to different screen sizes.
 *
 * - On smaller screens, it has a padding of `1.875rem` and a maximum width of `60%`.
 * - On desktop and larger screens, the padding increases to `4.5rem` on the left and right for a more spacious layout.
 * - The container is set to display as a column and will align the content to the start of both axes.
 *
 * @component
 * @example
 * <TitleContainer>Your Title Here</TitleContainer>
 *
 * @returns {JSX.Element} A div component styled to hold title content with responsive padding.
 */
const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  flex: 1;
  max-width: 60%;
  padding: 1.875rem;
  color: ${colors.blank};
  @media (min-width: ${breakpoints.desktop}) {
    padding-left: 4.5rem;
    padding-right: 4.5rem;
  }
`;
export { TitleContainer };
