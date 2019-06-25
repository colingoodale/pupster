import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const About = () => (
  <div>
    <Hero backgroundImage="https://i.imgur.com/qkdpN.jpg">
      <h1>Pupster</h1>
      <h2>They're the Good Boys and Girls</h2>
    </Hero>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1>Welcome To Pupster!</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <p>
            Welcome to a fun little application that is a test for creating an API and using React.js to connect to the Dog.ceo API. This app uses React Router, and Axios.
          </p>
          <p>
            On the discover page you will find a dog friend making service.
          </p>
          <p>
            In search, you can search through the Dog.ceo API to find pictures of your favorite dog breed.
          </p>
        </Col>
      </Row>
    </Container>
  </div>
);

export default About;
