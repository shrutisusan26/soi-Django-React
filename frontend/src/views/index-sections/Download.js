import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

// core components

function Download() {
  return (
    <>
      <div
        className="section section-download"
        data-background-color="black"
        id="download-section"
      >
        <Container>
          <Row className="justify-content-md-center">
            <Col className="text-center" lg="8" md="12">
              <h3 className="title">How is Online Investing Done?</h3>
              <h5 className="description">
              Online investing is very simple to execute but the first step is to opt for a reliable online brokerage. Online brokers are also known as discount brokers since they are cheaper than the traditional brokers. It is important to do a thorough survey before choosing an online broker. The broker of your choice must have a license to trade in the given territory.
              </h5>
            </Col>
            <Col className="text-center" lg="8" md="12">
              <Button
                className="btn-round mr-1"
                color="info"
                href="https://github.com/shrutisusan26/soi-Django-React.git"
                role="button"
                size="lg"
              >
                Download Project
              </Button>
              <Button
                className="btn-round"
                color="primary"
                href="https://github.com/shrutisusan26/soi-Django-React.git"
                outline
                role="button"
                size="lg"
                target="_blank"
              >
                Github Repo
              </Button>
            </Col>
          </Row>
          <br></br>
          <br></br>
          <br></br>
          <Row className="text-center mt-5">
            <Col className="ml-auto mr-auto" md="8">
              <h2>What is Online Trading?</h2>
              <h5 className="description">
                We're going to launch{" "}
                <a
                  href="http://demos.creative-tim.com/now-ui-kit-pro-react/#/presentation?ref=nukr-index-page"
                  onClick={(e) => e.preventDefault()}
                >
                 
                </a>
                 Online trading can be done by simply opening a demat and trading account with any SEBI registered broker. Account opening can be done in a matter of 15 minutes. The documents required to open an account are PAN card, address proof, AADHAAR card, mobile number linked to AADHAAR, bank statement, cancelled cheque leaf and passport photograph.
              </h5>
            </Col>
            <Col md="12">
              <Button
                className="btn-neutral btn-round"
                color="default"
                href="http://demos.creative-tim.com/now-ui-kit-pro-react/#/presentation?ref=nukr-index-page"
                size="lg"
                disabled
              >
                <i className="now-ui-icons arrows-1_share-66 mr-1"></i>
                Be A Pro Investor
              </Button>
            </Col>
          </Row>
          <br></br>
          <br></br>
          <Row className="justify-content-md-center sharing-area text-center">
            <Col className="text-center" lg="8" md="12">
              <h3>Thank you for supporting us!</h3>
            </Col>
            <Col className="text-center" lg="8" md="12">
              <Button
                className="btn-neutral btn-icon btn-round"
                color="twitter"
                href="https://www.twitter.com/creativetim?ref=creativetim"
                id="tooltip86114138"
                size="lg"
                target="_blank"
              >
                <i className="fab fa-twitter"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip86114138">
                Follow us
              </UncontrolledTooltip>
              <Button
                className="btn-neutral btn-icon btn-round"
                color="facebook"
                href="https://www.facebook.com/creativetim?ref=creativetim"
                id="tooltip735272548"
                size="lg"
                target="_blank"
              >
                <i className="fab fa-facebook-square"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip735272548">
                Like us
              </UncontrolledTooltip>
              <Button
                className="btn-neutral btn-icon btn-round"
                color="linkedin"
                href="https://www.linkedin.com/company-beta/9430489/?ref=creativetim"
                id="tooltip647117716"
                size="lg"
                target="_blank"
              >
                <i className="fab fa-linkedin"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip647117716">
                Follow us
              </UncontrolledTooltip>
              <Button
                className="btn-neutral btn-icon btn-round"
                color="github"
                href="https://github.com/creativetimofficial/now-ui-kit-react?ref=creativetim"
                id="tooltip331904895"
                size="lg"
                target="_blank"
              >
                <i className="fab fa-github"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip331904895">
                Star on Github
              </UncontrolledTooltip>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Download;
