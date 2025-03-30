import React from "react";
import { Footer as FooterContainer, SocialNetWork } from "./footer";
import { Instagram } from "@/components/img/socialNetWork/instagram";
import { Whatsapp } from "@/components/img/socialNetWork/whatsapp";
import { X } from "@/components/img/socialNetWork/x";
import { Facebook } from "@/components/img/socialNetWork/facebook";
import Card from "@/components/card";
import { colors } from "@/assets/monks/colors";
import FooterLinks from "@/components/footerSection/footerLinks";
/**
 * The `Footer` component renders the footer section of the website.
 * It includes social media icons and a card displaying some placeholder text along with footer links.
 * The social media icons are displayed in a flex row, and the card contains a title and the footer links.
 *
 * @component
 * @example
 * <Footer />
 * // This will render a footer section with social media icons and a card containing footer links.
 */
const Footer = () => {
  return (
    <FooterContainer>
      <SocialNetWork>
        <Instagram />
        <Whatsapp />
        <X />
        <Facebook />
      </SocialNetWork>
      <Card
        style={{
          color: colors.blank,
          backgroundColor: colors.dark,
        }}
      >
        <Card.Title>Lorem ipsum dolor sit amet</Card.Title>
        <FooterLinks />
      </Card>
    </FooterContainer>
  );
};
export { Footer };
