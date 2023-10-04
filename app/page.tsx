import { Button, Col, Container, Row } from 'react-bootstrap';
const Home = () => {
  return (
    <Container className="p-5">
      <Row>
        <Col>
          <h1>React Bootstrap NextJS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            aliquid quia optio odit nihil voluptatibus soluta labore earum
            nostrum doloremque. Sequi laboriosam dicta praesentium, sit
            aspernatur non molestiae voluptates beatae.
          </p>
          <Button>My Button</Button>
        </Col>
      </Row>
    </Container>
  );
};
export default Home;

