import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@primer/octicons-react";
import breakPoints from "../../styling/min-widths";

const Nav = styled.div`
  border: 1px solid orange;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  top: 0px;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  border: 2px solid green;
  margin: 2%;
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 60vw;
  margin: 0 auto;
`;

const MenuLink = styled.p`
  text-decoration: none;
  color: inherit;
  font-family: "Ubuntu", sans-serif;

  margin-left: 4px;
  margin-right: 4px;
  @media ${breakPoints.ms} {
    font-size: 1.2rem;
  }
`;

const Button = styled.button`
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background: inherit;
`;

export const pages = [
  {
    text: "Home",
    path: "/",
  },
  {
    text: "About",
    path: "/about",
  },
  // add dynamic catch-all routes later
  {
    text: "Projects",
    path: "/projects",
  },
  {
    text: "Contact",
    path: "/contact",
  },
  {
    text: "Blog",
    path: "/blog",
  },
];

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Nav>
      {/* Logo */}

      <Image src="/logo.svg" alt="Logo" height={100} width={100} />

      {/* Nav links */}
      <Menu>
        {/* pages */}
        <LinksWrapper>
          {pages?.map((item, i) => (
            <MenuLink key={i}>
              <Link href={item.path}>{item.text}</Link>
            </MenuLink>
          ))}
        </LinksWrapper>

        {/* theme switch */}
        <Button
          aria-label="Toggle Dark Mode"
          type="button"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {mounted && theme === "dark" ? (
            <SunIcon size={24} />
          ) : (
            <MoonIcon size={24} />
          )}
        </Button>
      </Menu>
    </Nav>
  );
};
export default Navbar;
