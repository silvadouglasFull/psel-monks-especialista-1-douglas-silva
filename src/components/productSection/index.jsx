import React, { useEffect, useState } from "react";
import { GridContainer, GridItem } from "@/components/grid";
import { Title } from "@/components/title";
import { SubTitle } from "@/components/title/subTitle";
import { ProductWithImg, ProductWithImgAndText } from "@/components/product";
import { HightLight } from "@/components/productSection/hightLight";
import products from "@/api/fetchs/products";
/**
 * ProductSection component renders a section displaying products with images and descriptions.
 *
 * It fetches product data from an API in a paginated manner and displays a subset of products
 * in a grid layout. The section also highlights one featured product if available.
 *
 * The component shows a title and a subtitle at the top, followed by a grid of products, including
 * images and text. The products are loaded asynchronously, and a loading message is shown while
 * the data is being fetched.
 *
 * @component
 * @example
 * return (
 *   <ProductSection />
 * )
 */
const ProductSection = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hightLightProcuts, setHightLightProcuts] = useState(null);
  useEffect(() => {
    /**
     * Fetches products from the API in a paginated manner and updates the state with the fetched items.
     *
     * This function retrieves products in pages, starting from page 1, until it reaches the last page.
     * It accumulates all products into an array and updates the component state with the fetched items
     * and the highlighted product (if any). The loading state is set to true while fetching data and
     * false once the fetching process is complete.
     *
     * @async
     * @function fetchProducts
     * @returns {Promise<void>} This function doesn't return a value. It updates the component's state.
     *
     * @example
     * await fetchProducts();
     * // This will populate the state with fetched products and highlighted product.
     */
    const fetchProducts = async () => {
      setLoading(true);
      let page = 1;
      let last_page = 0;
      const items = [];
      while (page !== last_page) {
        const response = await products.get({ page: page });
        if (response?.data?.length) {
          items.push(...response.data);
          last_page = response.last_page;
          page += 1;
        }
      }
      setHightLightProcuts(items.find((item) => item.is_hight_light));
      setItems(items);
      setLoading(false);
    };
    fetchProducts();
  }, []);
  return (
    <>
      <GridContainer>
        <GridItem xs={2} md={4} lg={6} rows={2} lgRows={2}>
          <Title>Belissímas fotos para você</Title>
          <SubTitle>
            A Ilha de Manhattan não é "natural": A famosa ilha foi modificada
            por humanos ao longo do tempo. Grande parte dela foi construída com
            terra trazida de outras áreas, formando os bairros e permitindo o
            crescimento da cidade.
          </SubTitle>
        </GridItem>
        {loading ? "...loading" : ""}
        {items.length
          ? items.slice(0, 4).map((item) => (
              <GridItem md={2} xs={1} key={item.id}>
                <ProductWithImgAndText {...item} />
              </GridItem>
            ))
          : null}
      </GridContainer>
      <GridContainer>
        {hightLightProcuts ? (
          <GridItem md={2} lg={3} lgRows={2}>
            <HightLight {...hightLightProcuts} />
          </GridItem>
        ) : null}
        <GridItem rows={2} md={2} lg={3} lgRows={2}>
          {items.length
            ? items.slice(4, 6).map((item) => (
                <ProductWithImg
                  key={item.id}
                  {...item}
                  style={{
                    backgroundColor: "transparent",
                    border: 0,
                  }}
                />
              ))
            : null}
        </GridItem>
      </GridContainer>
    </>
  );
};

export default ProductSection;
