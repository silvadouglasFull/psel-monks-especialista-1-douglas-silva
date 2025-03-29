import React from "react";
import { Android } from "@/components/img/android";
import { Apple } from "@/components/img/apple";
import { colors } from "@/assets/colors";
import Card from "@/components/card";
import { Container, ContainerOfCards } from "@/components/appSection/styles";
import { GridContainer, GridItem } from "../grid";
const AppSection = () => {
  return (
    <Container>
      <Card
        style={{
          backgroundColor: colors.purple,
          borderRadius: "1.5rem",
        }}
      >
        <ContainerOfCards>
          <Card.Body>
            <Card.Title
              style={{
                color: colors.blank,
              }}
            >
              Lorem ipsum dolor sit amet consectetur
            </Card.Title>
            <Card.Text
              style={{
                color: colors.blank,
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing
              faucibus sit scelerisque quis commodo aenean viverra
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Apple />
            <Android />
          </Card.Body>
        </ContainerOfCards>
      </Card>
    </Container>
  );
};
export { AppSection };
