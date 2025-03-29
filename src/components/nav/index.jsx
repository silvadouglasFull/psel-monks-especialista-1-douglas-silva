import React, { useState } from "react";
import { Logo } from "@/components/nav/logo";
import { LogoIcon } from "@/components/img/logo";
import { LinksContainer } from "@/components/nav/linksContainer";
import { Link } from "@/components/nav/link";
import { MenuIcon } from "@/components/nav/menuIcon";
import { Hamburger } from "@/components/icons/fontAwesome";
import { Navbar } from "@/components/nav/styles";
const TopNav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <Navbar>
      <Logo href="#home" className="active">
        <LogoIcon />
      </Logo>
      <LinksContainer isMenuOpen={isMenuOpen} id="myLinks">
        {Array.from({ length: 3 }).map((_, i) => (
          <Link key={i * 3} href={`#${i + 1}`}>
            Categoria {i + 1}
          </Link>
        ))}
      </LinksContainer>
      <MenuIcon onClick={toggleMenu}>
        <Hamburger />
      </MenuIcon>
    </Navbar>
  );
};

export default TopNav;
