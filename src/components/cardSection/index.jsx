import Card from "@/components/card";
import { Button } from "@/components/button";
import { colors } from "@/assets/colors";
import { GridContainer, GridItem } from "@/components/grid";
import { CardMobile } from "./styles";
const CardSection = () => {
  return (
    <GridContainer>
      {Array.from({ length: 3 }).map((_, i) => (
        <GridItem key={i + 1} md={2}>
          <CardMobile
            style={{
              border: `.0625rem solid ${colors.lightPurple}`,
            }}
          >
            <Card.Body>
              <Card.Title>Lorem ipsum dolor sit amet</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing
                faucibus sit scelerisque quis commodo aenean viverra.
              </Card.Text>
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
            </Card.Body>
          </CardMobile>
        </GridItem>
      ))}
    </GridContainer>
  );
};
export { CardSection };
