import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Logo from "../../public/logo.svg";
const Nav = styled.div`
  border: 1px solid orange;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 60vw;
  border: 2px solid green;
  margin: 2%;
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
`;

const MenuLink = styled.p`
  text-decoration: none;
  color: inherit;
  font-family: "Ubuntu", sans-serif;
  font-size: 1.25rem;
`;

const ToggleButton = styled.button`
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background: inherit;
  margin-left: 4%;
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
      <Link href="/">
        <Image src={Logo} alt="Logo" height={100} width={100} />
      </Link>

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
        {/* Email */}

        {/* theme switch */}
        <ToggleButton
          aria-label="Toggle Dark Mode"
          type="button"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {mounted && theme === "dark" ? (
            <Image
              src="/images/moon.png"
              alt="Dark mode icon"
              height={24}
              width={24}
            />
          ) : (
            <Image
              src="/images/sun.png"
              alt="Light mode icon"
              height={24}
              width={24}
            />
          )}
        </ToggleButton>
      </Menu>
    </Nav>
  );
};
export default Navbar;
