import { Outlet, NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import "../../styles/dashboard.css";
import Customers from "./Customers";
import Helmet from "../../components/Helmet/Helmet";
import NavDash from "./NavDash";
import CommonSection from "../../components/UI/common-section/CommonSection";
import {
  deleteUser,
  getAllUserInfo,
} from "../../store/shopping-cart/userSlice";

const Dashboard = () => {
  const { AllUserInfo } = useSelector((state) => state.user);
  return (
    <div>
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
                            {/* <a href="#" className="btnView">
                            View All
                          </a> */}
                          </div>

                          <table>
                            <tbody>
                              <tr>
                                <th>Photo</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Delte</th>
                              </tr>
                              {AllUserInfo.map((el, index) => (
                                <Customers items={el} key={index} />
                              ))}
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
    </div>
  );
};

export default Dashboard;
