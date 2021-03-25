import React from "react";
import { Col, Container, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./About";
import Skills from "./Skills";
import GitOverView from "./GitOverView";
import Education from "./Education";
import Work from "./Work";

function Home(props) {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col sm={3}>
            <About theme={props.theme} />
            <Skills color="orange" />
          </Col>
          <Col sm={9}>
            <GitOverView theme={props.theme} />
            <Row>
              <Col>
                <Education theme={props.theme} />
              </Col>
              <Col>
                <Work theme={props.theme} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
