import Card from "@/components/card";
import Button from "@/components/button";
import { colors } from "@/assets/monks/colors";
import { GridContainer, GridItem } from "@/components/grid";
import { CardSectionContainer } from "@/components/cardSection/styles";
import { useEffect, useState } from "react";
import products from "@/api/fetchs/products";
/**
 * CardSection component renders a section displaying products in card format with text content.
 *
 * The component fetches products from an API and displays them in a grid layout. Each product
 * is shown in a card with the product name, description, and a button. The button is currently
 * a placeholder with the text "Lorem ipsum". The component handles loading state and fetches
 * products in a paginated manner. A loading message is displayed while the data is being fetched.
 *
 * @component
 * @example
 * return (
 *   <CardSection />
 * )
 */
const CardSection = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    /**
     * Fetches highlighted products from the API in a paginated manner and updates the state with the fetched items.
     *
     * This function retrieves products in pages, starting from page 1, until it reaches the last page. It filters out
     * the products that are marked as "highlighted" (using the `is_hight_light` property) and accumulates them into an array.
     * Once all pages are fetched, the component state is updated with the filtered products. The loading state is set to
     * true while fetching data and false once the fetching process is complete.
     *
     * @async
     * @function fetchProducts
     * @returns {Promise<void>} This function doesn't return a value. It updates the component's state with highlighted products.
     *
     * @example
     * await fetchProducts();
     * // This will populate the state with highlighted products fetched from the API.
     */
    const fetchProducts = async () => {
      setLoading(true);
      let page = 1;
      let last_page = 0;
      const items = [];
      while (page !== last_page) {
        const response = await products.get({ page: page });
        if (response?.data?.length) {
          items.push(...response.data.filter((item) => item.is_hight_light));
          last_page = response.last_page;
          page += 1;
        }
      }
      setItems(items);
      setLoading(false);
    };
    fetchProducts();
  }, []);
  return (
    <GridContainer>
      {loading ? "loading..." : ""}
      {items.length
        ? items.map((item) => (
            <GridItem key={item.id} md={2} lg={2} lgRows={2}>
              <CardSectionContainer
                style={{
                  border: `.0625rem solid ${colors.lightPurple}`,
                  height: 180,
                }}
              >
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
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
              </CardSectionContainer>
            </GridItem>
          ))
        : null}
    </GridContainer>
  );
};
export default CardSection;
