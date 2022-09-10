import React from "react";

import "../../styles/dashboard.css";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../../components/Helmet/Helmet";
import CommonSection from "../../components/UI/common-section/CommonSection";
import NavDash from "./NavDash";

const Payments = () => {
  return (
    <Helmet title="Payments">
      <CommonSection title="Payments" />

      <NavDash />
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="m-auto text-center">
            <div className="containerlDash ">
              <div className="contentDash-2">
                <div className="recent-payments">
                  <div className="titleDash">
                    <h2>Recent Payments</h2>
                    <a href="#" className="btnView">
                      View All
                    </a>
                  </div>
                </div>
                <table>
                  <tbody>
                    <tr>
                      <th>Name</th>
                      <th>School</th>
                      <th>Amount</th>
                      <th>Option</th>
                    </tr>
                    <tr>
                      <td>John Doe</td>
                      <td>St. James College</td>
                      <td>$120</td>
                      <td>
                        <a href="#" className="btnView">
                          View
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Helmet>
  );
};

export default Payments;
