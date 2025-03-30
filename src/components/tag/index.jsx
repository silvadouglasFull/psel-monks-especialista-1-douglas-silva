import { colors } from "@/assets/monks/colors";
import styled from "styled-components";
/**
 * `Tag` is a styled component that renders a clickable tag with custom styling.
 * It displays the tag's text in a specific format, with padding, border, and background colors.
 * It also has hover effects that change the background and text color.
 */
const Tag = styled.div`
  gap: 0.625rem;
  border-radius: 2rem;
  padding-top: 0.5rem;
  padding-right: 1.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1.5rem;
  color: ${colors.lightPurple};
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0%;
  border: 1px solid ${colors.lightPurple};
  text-align: center;
  margin: 0.1875rem;
  background-color: ${colors.riverShark};
  cursor: pointer;
  &:hover {
    background-color: ${colors.purple};
    color: ${colors.blank};
  }
`;
export { Tag };
