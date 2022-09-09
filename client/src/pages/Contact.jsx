import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import "../styles/contact.css";
const Contact = () => {
  return (
    <Helmet title="Contact">
      <CommonSection title="Contact" />

      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="m-auto text-center">
            <div>
              <div>
                <div className="containerlogin">
                  <form action="#" className="login active formContact ">
                    <h2 className="title">send Message</h2>
                    {/* Subject */}
                    <div className="form-group">
                      <label>Subjet</label>
                      <div className="input-group">
                        <input type="text" placeholder="Subjet..." />
                      </div>
                    </div>
                    {/* Message */}
                    <div className="form-group">
                      <label>Message</label>
                      <div className="input-group">
                        <div className="message-box">
                          <textarea
                            id="msg"
                            cols="30"
                            rows="10"
                            placeholder="Message"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <button type="submit" className="btn-submit">
                      Send
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Helmet>
  );
};

export default Contact;
