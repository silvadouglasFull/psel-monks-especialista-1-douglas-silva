import React from "react";
import { HeroBackground } from "@/components/hero";
import GlobalStyle from "@/components/globalStyle";
import TopNav from "@/components/nav";
import { AppSection } from "@/components/appSection";
import { ProductSection } from "@/components/productSection";
import { TagSection } from "@/components/tagSection";
import { CardSection } from "@/components/cardSection";
import { FormSection } from "./components/formSection";
import { Footer } from "./components/footerSection";
import { HeroSection } from "./components/heroSection";
function App() {
  return (
    <>
      <GlobalStyle />
      <HeroBackground>
        <TopNav />
        <HeroSection />
      </HeroBackground>
      <ProductSection />
      <AppSection />
      <TagSection />
      <CardSection />
      <FormSection />
      <Footer />
    </>
  );
}

export default App;
