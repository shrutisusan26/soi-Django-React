import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Button, Container, Row } from "reactstrap";
import landing from '../../assets/img/landing.jpg';
import profile from '../../assets/img/profile.jpg';
// core components

function Examples() {
  return (
    <>
      <div className="section section-examples" data-background-color="black">
        <div className="space-50"></div>
        <Container className="text-center">
          <Row>
            <div className="col">
              <a href="examples/landing-page.html" target="_blank">
                <img
                  alt="..."
                  className="img-raised"
                  src={landing}
                ></img>
              </a>
              <Button
                className="btn-round"
                color="default"
                to="/landing-page"
                outline
                tag={Link}
              >
                View Landing Page
              </Button>
            </div>
            <div className="col">
              <a href="examples/profile-page.html" target="_blank">
                <img
                  alt="..."
                  className="img-raised"
                  src={profile}
                ></img>
              </a>
              <Button
                className="btn-round"
                color="default"
                to="/profile-page"
                outline
                tag={Link}
              >
                View Profile Page
              </Button>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Examples;
