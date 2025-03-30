import React from "react";
import { Container, Link } from "@/components/footerSection/footerLinks/styles";

/**
 * The `FooterLinks` component renders a list of links inside a styled container.
 * It generates a fixed number of links (3 in this case), each with placeholder text.
 * The component uses a styled container to manage the layout and spacing of the links.
 *
 * @component
 * @example
 * <FooterLinks />
 * // This will render 3 placeholder links inside a container.
 */
const FooterLinks = () => {
  return (
    <Container>
      {Array.from({ length: 3 }).map((_, i) => (
        <Link key={i * 3}>Lorem ipsum dolor sit amet</Link>
      ))}
    </Container>
  );
};

export default FooterLinks;
