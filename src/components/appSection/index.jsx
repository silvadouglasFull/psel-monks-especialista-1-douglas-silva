import React from "react";
import Apple from "@/components/img/apple";
import Android from "@/components/img/android";
import { colors } from "@/assets/monks/colors";
import Card from "@/components/card";
import {
  Container,
  ContainerButtonAppStore,
  ContainerOfCards,
} from "@/components/appSection/styles";
/**
 * AppSection component renders a card with two buttons for the user to navigate to
 * the Apple App Store or Google Play Store to download the app.
 *
 * The card contains a title and description encouraging the user to download the app
 * from their preferred app store. The component displays the Apple and Android icons
 * as buttons that link to the respective app stores.
 *
 * @component
 * @example
 * return (
 *   <AppSection />
 * )
 */
const AppSection = () => {
  return (
    <Container>
      <Card
        style={{
          backgroundColor: colors.purple,
          borderRadius: "1.5rem",
          width: "100%",
        }}
      >
        <ContainerOfCards>
          <Card.Body>
            <Card.Title
              style={{
                color: colors.blank,
              }}
            >
              Estamos nas lojas de aplicativos
            </Card.Title>
            <Card.Text
              style={{
                color: colors.blank,
              }}
            >
              Você pode baixar nosso app na sua loja de aplicativos favoritas
            </Card.Text>
          </Card.Body>
          <ContainerButtonAppStore>
            <Apple />
            <Android />
          </ContainerButtonAppStore>
        </ContainerOfCards>
      </Card>
    </Container>
  );
};
export default AppSection;
