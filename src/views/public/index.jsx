import ProductSection from "@/components/productSection";
import AppSection from "@/components/appSection";
import CardSection from "@/components/cardSection";
import TagSection from "@/components/tagSection";
import { FormSection } from "@/components/formSection";
import React from "react";

/**
 * Home component serves as the main page that displays multiple sections.
 * It combines and renders all the essential sections for the landing page.
 * 
 * @component
 * @returns {JSX.Element} The combined sections that make up the homepage.
 */
const Home = () => {
  return (
    <>
      {/* Product section to display featured products */}
      <ProductSection />

      {/* App section for displaying app-related content */}
      <AppSection />

      {/* Tag section to showcase various tags */}
      <TagSection />

      {/* Card section for displaying various cards */}
      <CardSection />

      {/* Form section for displaying a form */}
      <FormSection />
    </>
  );
};

export default Home;
