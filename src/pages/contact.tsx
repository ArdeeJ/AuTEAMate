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

const ContactTitle = styled.div`
  font-size: 75px;
  color: #9e3131;
  font-family: "Black Han Sans", sans-serif;
  margin: auto;
  -webkit-text-stroke: 2px white;
`;

const TextWrapper = styled.div`
  max-width: 800px; /* Set a maximum width */
  margin: 0 auto; /* Center-align the text */
  padding: 0 20px; /* Add some padding for better spacing */
`;

const FormContainer = styled.div`
  max-width: 800px; /* Set a maximum width */
  margin: 0 auto; /* Center-align the form */
  padding-right: 0 20px; /* Add some padding for better spacing */
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormField = styled.input`
  width: 500px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #9e3131;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #800000;
  }
`;

function Contact() {
  return (
    <Container>
      <Navbar />
      <ContactTitle>CONTACT</ContactTitle>
      <TextWrapper>
        <p style={{ fontSize: "20px", lineHeight: "1.5" }}>
          Feel free to reach out if you have any suggestions or questions!
        </p>
      </TextWrapper>
      <br />
      <FormContainer>
        <ContactForm>
          <FormField type="text" placeholder="Your Name" />
          <FormField type="email" placeholder="Your Email" />
          <FormField type="text" placeholder="Subject" />
          <FormField as="textarea" placeholder="Message" rows={6} />
          <SubmitButton type="submit">Submit</SubmitButton>
        </ContactForm>
      </FormContainer>
    </Container>
  );
}

export default Contact;
