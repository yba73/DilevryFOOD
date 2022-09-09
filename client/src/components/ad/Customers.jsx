import React from "react";
import "../../styles/dashboard.css";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../Helmet/Helmet";
import CommonSection from "../UI/common-section/CommonSection";
import NavDash from "./NavDash";
<link
  href="https://fonts.googleapis.com/css?family=Open Sans Condensed:300"
  rel="stylesheet"
></link>;
const Customers = () => {
  return (
    <div className="classNamebody ">
      <Helmet title="Customers">
        <CommonSection title="Customers" />
        <NavDash />
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <div className="containerlDash ">
                <div className="">
                  <div className="headerdash">
                    <div className="navdash">
                      <div className="user">
                        <img src="notifications.png" alt="" />
                        <div className="img-case">
                          <img src="user.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <div className="contentDash-2">
                      <div className="new-students">
                        <div className="titleDash">
                          <h2>Customers</h2>
                          <a href="#" className="btnView">
                            View All
                          </a>
                        </div>
                        <table>
                          <tbody>
                            <tr>
                              <th>Photo</th>
                              <th>Name</th>
                              <th>Username</th>
                              <th>Email</th>
                              <th>Delte</th>
                            </tr>

                            <tr>
                              <td>
                                <img
                                  className="userImage"
                                  src="https://res.cloudinary.com/yba73/image/upload/v1662674820/Responsive%20Admin%20Panel/yassine_xxmlz2.jpg"
                                  alt="user"
                                />
                              </td>
                              <td>John Steve Doe</td>
                              <td>John Steve Doe</td>
                              <td>John Steve Doe</td>
                              <button className="btnDelete">Delete</button>
                              <td>
                                <img src="info.png" alt="" />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Helmet>
    </div>
  );
};

export default Customers;
