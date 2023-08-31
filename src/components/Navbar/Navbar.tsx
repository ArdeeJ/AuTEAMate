import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  position: fixed;
  top: 1in;
  width: 100vw;
  height: 130px;

  background-color: #1a1a1a;
`;

const Logo = styled.div`
  font-size: 95px;
  color: #9e3131;
  font-family: "Black Han Sans", sans-serif;
  margin: auto;
  text-shadow: 0px 15px 10px #000000;
  -webkit-text-stroke: 2px black;
`;
const About = styled.div`
  font-size: 40px;
  color: #9e3131;
  font-family: "Black Han Sans", sans-serif;
  margin: auto;
  text-shadow: 0px 10px 10px #000000;
  -webkit-text-stroke: 1px black;
`;
const Contact = styled.div`
  font-size: 40px;
  color: #9e3131;
  font-family: "Black Han Sans", sans-serif;
  margin: auto;
  text-shadow: 0px 10px 10px #000000;
  -webkit-text-stroke: 1px black;
`;

const NavLinks = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const NavLink = styled(Link)`
  margin: 0 130px;
  text-decoration: none;
`;

function Navbar() {
  return (
    <Container>
      <NavLinks>
        <NavLink to="/about">
          <About>ABOUT</About>
        </NavLink>
        <NavLink to="/">
          <Logo>AUTEAMATE</Logo>
        </NavLink>
        <NavLink to="/contact">
          <Contact>CONTACT</Contact>
        </NavLink>
      </NavLinks>
    </Container>
  );
}

export default Navbar;
