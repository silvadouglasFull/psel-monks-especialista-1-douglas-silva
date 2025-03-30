import { Tag } from "@/components/tag";
import Card from "@/components/card";
import { Container, TagsContainer } from "@/components/tagSection/styles";
import { useEffect, useState } from "react";
import categories from "@/api/fetchs/categories";
/**
 * TagSection component renders a section displaying a list of product categories.
 *
 * The component fetches category data from an API, and once the data is retrieved,
 * it displays the categories in a grid using the `Tag` component. A loading state is
 * shown while the data is being fetched. Each category is rendered as a tag within
 * a `TagsContainer`.
 *
 * The section includes a title "Categories" at the top, followed by the list of category
 * names that the user can view.
 *
 * @component
 * @example
 * return (
 *   <TagSection />
 * )
 */
const TagSection = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    /**
     * Fetches categories from the API and updates the state with the fetched items.
     *
     * This function retrieves category data by calling the API and setting the response
     * data into the component state. The loading state is set to true while fetching the
     * data and is set to false once the fetching process is complete.
     *
     * @async
     * @function fetchCategories
     * @returns {Promise<void>} This function doesn't return a value. It updates the component's state.
     *
     * @example
     * await fetchCategories();
     * // This will populate the state with fetched category data.
     */
    const fetchCategories = async () => {
      setLoading(true);
      const response = await categories.get({ page: 1 });
      if (response) {
        const { data } = response;
        setItems(data);
      }
      setLoading(false);
    };
    fetchCategories();
  }, []);
  return (
    <Container>
      <Card.Title
        style={{
          marginBottom: ".625rem",
        }}
      >
        Categories
      </Card.Title>
      {loading ? "loading..." : ""}
      <TagsContainer>
        {items.length
          ? items.map(({ name }, i) => <Tag key={i + 2}>{name}</Tag>)
          : null}
      </TagsContainer>
    </Container>
  );
};
export default TagSection;
