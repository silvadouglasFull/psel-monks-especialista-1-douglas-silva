import React from "react";
import { DividerContainer, StyledHr } from "@/components/divider/styles";

/**
 * A simple Divider component that renders a styled horizontal line
 * wrapped in a container with padding and background color.
 * The component uses the `DividerContainer` for layout and
 * the `StyledHr` for the actual divider line.
 *
 * @component
 * @example
 * <Divider />
 */
const Divider = () => {
  return (
    <DividerContainer>
      <StyledHr />
    </DividerContainer>
  );
};

export default Divider;
