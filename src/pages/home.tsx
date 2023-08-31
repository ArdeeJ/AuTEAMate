import styled from "styled-components";
import Navbar from "../components/Navbar/Navbar";

const Container = styled.div`
  display: flex;
`;

const VL = styled.div`
  border: 3px solid #000000;
  height: 1200px;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 58%;
`;

function Home() {
  return (
    <Container>
      <VL />
      <Navbar />
    </Container>
  );
}

export default Home;
