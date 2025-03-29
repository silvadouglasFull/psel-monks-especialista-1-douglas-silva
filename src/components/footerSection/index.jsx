import React from "react";
import { Footer as FooterContainer, SocialNetWork } from "./footer";
import { Instagram } from "@/components/img/socialNetWork/instagram";
import { Whatsapp } from "@/components/img/socialNetWork/whatsapp";
import { X } from "@/components/img/socialNetWork/x";
import { Facebook } from "@/components/img/socialNetWork/facebook";
import Card from "@/components/card";
import { colors } from "@/assets/colors";
import { GridContainer, GridItem } from "../grid";
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
        <GridContainer>
          {Array.from({ length: 4 }).map((_, i) => (
            <GridItem key={i + 4} md={1}>
              <Card.Text>Lorem ipsum dolor sit amet</Card.Text>
            </GridItem>
          ))}
        </GridContainer>
      </Card>
    </FooterContainer>
  );
};
export { Footer };
