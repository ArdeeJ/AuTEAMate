import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 130px;

  
  display: flex;
  background-color: #1a1a1a;
`;

function Navbar() {
  return (
    <Container>
      <h1>Hello</h1>
    </Container>
  );
}

export default Navbar;
