import React, { useEffect } from "react";
import HeroBackground from "@/components/hero";
import TopNav from "@/components/nav";
import HeroSection from "@/components/heroSection";
import { Footer } from "@/components/footerSection";
import Home from "@/views/public";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { FLAVOR } from "@/config/flavor";
/**
 * PublicRouter component sets up the routing and layout for the public-facing pages.
 * It includes the hero section, navigation, and footer that are always visible on the public pages.
 * It also defines the routes for the application, including the home page.
 *
 * @component
 * @returns {JSX.Element} The rendered public-facing router with navigation and footer.
 */
const PublicRouter = () => {
  useEffect(() => {
    /**
     * Updates the document's title to the value of the global `FLAVOR` variable.
     */
    const changeTitlePage = () => {
      document.title = FLAVOR;
    };
    changeTitlePage()
  }, []);
  return (
    <Router>
      <HeroBackground>
        <TopNav />
        <HeroSection />
      </HeroBackground>
      <Routes>
        <Route index path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default PublicRouter;
