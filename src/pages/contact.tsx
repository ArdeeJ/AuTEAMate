import styled from "styled-components";
import Navbar from "../components/Navbar/Navbar";

const Container = styled.div`
    display: flex;
`;

function Contact() {
    return (
        <Container>
            <Navbar />
            <h1>Contact</h1>
        </Container>
    );
}

export default Contact;