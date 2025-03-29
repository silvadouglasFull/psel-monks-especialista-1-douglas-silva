import React from "react";
import { colors } from "@/assets/colors";
import { ManComputer } from "@/components/img/manComputer";
import { GridContainer, GridItem } from "@/components/grid";
import Card from "@/components/card";
import Form from "../forms";
import { FormSecurity } from "./formSecurity";
import { Button } from "@/components/button";
import { Divider } from "@/components/divider";

const FormSection = () => {
  return (
    <>
      <GridContainer
        style={{
          backgroundColor: colors.dark,
        }}
      >
        <GridItem md={1} rows={2}>
          <ManComputer />
        </GridItem>
        <GridItem md={3} rows={2}>
          <Card
            style={{
              backgroundColor: colors.fadedGrey,
              borderRadius: "1.5rem",
            }}
          >
            <Card.Body>
              <Card.Title>Lorem ipsum dolor sit amet consectetur</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing
                faucibus sit scelerisque
              </Card.Text>
              <Card.Text>*Lorem ipsum dolor sit amet consectetur</Card.Text>
              <Form>
                <Form.TextInput placeholder="Categoria*" />
                <Form.TextInput placeholder="Categoria" />
                <Form.TextInput placeholder="Categoria*" />
                <Form.TextInput placeholder="Categoria" />
                <Card.Title>Verificação de segurança</Card.Title>
                <FormSecurity />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    style={{
                      color: colors.dark,
                    }}
                    variant={colors.lightPink}
                  >
                    Lorem ipsum
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </GridItem>
        <GridItem md={4}>
          <Divider />
        </GridItem>
      </GridContainer>
    </>
  );
};
export { FormSection };
