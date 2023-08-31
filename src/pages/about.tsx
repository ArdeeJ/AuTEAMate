/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";
import Navbar from "../components/Navbar/Navbar";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 3in;
  width: 100vw;
  height: 130px;
`;

const TextWrapper = styled.div`
  max-width: 800px; /* Set a maximum width */
  margin: 0 auto; /* Center-align the text */
  padding: 0 20px; /* Add some padding for better spacing */
`;

const AboutTitle = styled.div`
  font-size: 75px;
  color: #9e3131;
  font-family: "Black Han Sans", sans-serif;
  margin: auto;
  -webkit-text-stroke: 2px white;
`;

function About() {
  return (
    <Container>
      <Navbar />
      <AboutTitle>ABOUT</AboutTitle>
      <TextWrapper>
        <p style={{ fontSize: "25px", lineHeight: "1.5" }}>
          AuTEAMate is a dynamic platform designed to revolutionize the way
          recreational-league sports teams are formed. Our mission is to
          simplify the process of creating balanced teams by harnessing the
          power of automation. With AuTEAMate, the days of manually composing
          teams based on players' positions and skill levels are behind us.
        </p>
      </TextWrapper>
    </Container>
  );
}

export default About;
