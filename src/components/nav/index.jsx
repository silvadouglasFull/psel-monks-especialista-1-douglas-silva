import React, { useState } from "react";
import { Logo } from "@/components/nav/logo";
import LogoIcon from "@/components/img/logo";
import { LinksContainer } from "@/components/nav/linksContainer";
import { Link } from "@/components/nav/link";
import { MenuIcon } from "@/components/nav/menuIcon";
import { Hamburger } from "@/components/icons/fontAwesome";
import { Navbar } from "@/components/nav/styles";

/**
 * `TopNav` is the top navigation bar component that displays the logo,
 * a menu with categories, and a hamburger icon to toggle the menu on smaller screens.
 */
const TopNav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false); // State to manage menu visibility
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen); // Toggles the menu state between open and closed
  };

  return (
    <Navbar>
      {/* Logo with a link to the home page */}
      <Logo to="/">
        <LogoIcon />
      </Logo>

      {/* Links container for navigation items, conditionally shown based on `isMenuOpen` */}
      <LinksContainer isMenuOpen={isMenuOpen} id="myLinks">
        {Array.from({ length: 3 }).map((_, i) => (
          <Link key={i * 3} href={`#${i + 1}`}>
            Categoria {i + 1}
          </Link>
        ))}
      </LinksContainer>

      {/* Hamburger icon to toggle the menu */}
      <MenuIcon onClick={toggleMenu}>
        <Hamburger />
      </MenuIcon>
    </Navbar>
  );
};

export default TopNav;
