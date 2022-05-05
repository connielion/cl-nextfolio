import styled from "styled-components";
import Link from "next/link";
import widths from "../../styling/min-widths";
import pages from "../../util/navLinks";
import { useRouter } from "next/router";

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 10%;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  border: 2px solid green;
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 50vw;
  margin: 0 auto;
  border: 1px solid red;
`;

const MenuLink = styled.div`
  border: 1px dashed green;
  padding: 2px 4px;
  text-decoration: none;
  color: inherit;
  font-family: "Ubuntu", sans-serif;
  font-size: 1.5rem;
  margin-left: 4px;
  margin-right: 4px;
  @media ${widths.desktop} {
    font-size: 1.25rem;
  }
`;
const ActiveLink = styled.div`
  padding: 2px 4px;
  text-decoration: underline;
  color: inherit;
  font-family: "Ubuntu", sans-serif;
  font-size: 1.5rem;
  margin-left: 4px;
  margin-right: 4px;
  @media ${widths.desktop} {
    font-size: 1.25rem;
  }
`;

const Navbar = () => {
  const router = useRouter(); // for conditional rendering of nav links
  return (
    <Nav>
      <Menu>
        {/* pages */}
        <LinksWrapper>
          {pages?.map((item, i) => {
            return router.asPath === item.path ? (
              <ActiveLink key={i}>
                {" "}
                <Link href={item.path}>{item.text}</Link>
              </ActiveLink>
            ) : (
              <MenuLink key={i}>
                <Link href={item.path}>{item.text}</Link>
              </MenuLink>
            );
          })}
          <MenuLink>
            <a href="https://github.com/connielion" rel="noopener noreferrer">
              Github
            </a>
          </MenuLink>
        </LinksWrapper>

        {/* theme switch */}
        {/* <Button
          aria-label="Toggle Dark Mode"
          type="button"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {mounted && theme === "dark" ? (
            <SunIcon size={24} />
          ) : (
            <MoonIcon size={24} />
          )}
        </Button> */}
      </Menu>
    </Nav>
  );
};
export default Navbar;
