import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 1in;
  width: 100vw;
  height: 130px;

  display: flex;
  background-color: #1a1a1a;
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: 95px;
  color: #9e3131;
  font-family: "Black Han Sans", sans-serif;
  margin: auto;
  text-shadow: 0px 15px 10px #000000;
  -webkit-text-stroke: 3px black;
`;
const About = styled.div`
  font-size: 40px;
  color: #9e3131;
  font-family: "Black Han Sans", sans-serif;
  margin: auto;
  text-shadow: 0px 10px 10px #000000;
  -webkit-text-stroke: 2px black;
`;
const Contact = styled.div`
  font-size: 40px;
  color: #9e3131;
  font-family: "Black Han Sans", sans-serif;
  margin: auto;
  text-shadow: 0px 10px 10px #000000;
  -webkit-text-stroke: 2px black;
`;

function Navbar() {
  return (
    <Container>
      <About>ABOUT</About>
      <Logo>AUTEAMATE</Logo>
      <Contact>CONTACT</Contact>
    </Container>
  );
}

export default Navbar;
