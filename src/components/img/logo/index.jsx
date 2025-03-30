import React from "react";
import { logo } from "@/config/flavor";
import styled from "styled-components";

/**
 * Styled component for displaying a logo image.
 */
const LogoContainer = styled.img``;

/**
 * Functional component that renders a logo icon.
 * The logo source is imported from the configuration file.
 *
 * @returns {JSX.Element} The logo image component.
 */
const LogoIcon = () => <LogoContainer src={logo} />;

export default LogoIcon;
