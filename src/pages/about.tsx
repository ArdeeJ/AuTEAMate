import styled from "styled-components";
import Navbar from "../components/Navbar/Navbar";

const Container = styled.div`
    display: flex;
`;

function About() {
    return (
        <Container>
            <Navbar />
            <h1>About</h1>
        </Container>
    );
}

export default About;
