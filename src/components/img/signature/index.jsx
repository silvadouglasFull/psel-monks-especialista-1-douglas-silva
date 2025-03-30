import styled from "styled-components";
import { signature } from "@/config/flavor";

/**
 * Styled component for displaying a signature image.
 * The signature is positioned at the bottom and centered within the container.
 */
const SignatureContainer = styled.img`
  position: relative;
  bottom: 0; /* Aligns at the bottom */
  left: 30%; /* Moves the div towards the center of the container */
  transform: translateX(-50%); /* Corrects exact centering */
  color: white;
  padding: 1.25rem;
  text-align: center;
`;

/**
 * Functional component that renders a signature image.
 * The image source is imported from the configuration file.
 *
 * @returns {JSX.Element} The signature image component.
 */
const Signature = () => <SignatureContainer src={signature} />;

export { Signature };
