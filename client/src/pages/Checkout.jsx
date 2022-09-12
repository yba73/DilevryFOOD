import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/checkout.css";

const Checkout = () => {
  const [enterName, setEnterName] = useState("");
  const [enterEmail, setEnterEmail] = useState("");
  const [enterNumber, setEnterNumber] = useState("");
  const [enterCountry, setEnterCountry] = useState("");
  const [enterCity, setEnterCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const shippingInfo = [];
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = 30;

  const totalAmount = cartTotalAmount + Number(shippingCost);

  const submitHandler = (e) => {
    e.preventDefault();
    const userShippingAddress = {
      name: enterName,
      email: enterEmail,
      phone: enterNumber,
      country: enterCountry,
      city: enterCity,
      postalCode: postalCode,
    };

    shippingInfo.push(userShippingAddress);
    console.log(shippingInfo);
  };

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <div>
                <div>
                  <div className="containercheout">
                    <form action="#" className="login active formchekout">
                      <h6 className="mb-4">Shipping Address</h6>
                      {/* Name */}
                      <div className="input-group-chekout">
                        <div
                          style={{ marginTop: "20px" }}
                          className="input-groupProductsdash roup"
                        >
                          <input
                            style={{ marginTop: "20px" }}
                            type="text"
                            classNme="inputchekout"
                            placeholder="Entre your name"
                          />
                        </div>
                      </div>
                      {/* Email */}
                      <div className="input-group-chekout">
                        <div
                          style={{ marginTop: "20px" }}
                          className="input-group-chekout"
                        >
                          <input
                            style={{ marginTop: "20px" }}
                            classNme="inputchekout"
                            type="email"
                            placeholder="Entre your Email"
                          />
                        </div>
                      </div>
                      {/* Phone */}
                      <div className="input-group-chekout">
                        <div
                          style={{ marginTop: "20px" }}
                          className="input-group-chekout"
                        >
                          <input
                            style={{ marginTop: "20px" }}
                            classNme="inputchekout"
                            type="number"
                            placeholder="Entre your Phone"
                          />
                        </div>
                      </div>
                      {/* country */}
                      <div className="input-group-chekout">
                        <div
                          style={{ marginTop: "20px" }}
                          className="input-group-chekout"
                        >
                          <input
                            style={{ marginTop: "20px" }}
                            classNme="inputchekout"
                            type="text"
                            placeholder="Entre your country"
                          />
                        </div>
                      </div>
                      {/* city */}
                      <div className="input-group-chekout">
                        <div
                          style={{ marginTop: "20px" }}
                          className="input-group-chekout"
                        >
                          <input
                            style={{ marginTop: "20px" }}
                            classNme="inputchekout"
                            type="text"
                            placeholder="Entre your city"
                          />
                        </div>
                      </div>

                      {/* Password */}
                      <div className="input-group-chekout">
                        <div
                          style={{ marginTop: "20px" }}
                          className="input-group-chekout"
                        >
                          <input
                            style={{ marginTop: "20px" }}
                            classNme="inputchekout"
                            type="password"
                            pattern=".{8,}"
                            id="password"
                            placeholder="Your password"
                          />
                        </div>
                        <span className="help-text">At least 8 characters</span>
                      </div>

                      {/* button Payment */}
                      <button type="submit" className="btn-submit">
                        Payment
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="4" md="6">
              <div className="checkout__bill">
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Subtotal: <span>${cartTotalAmount}</span>
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Shipping: <span>${shippingCost}</span>
                </h6>
                <div className="checkout__total">
                  <h5 className="d-flex align-items-center justify-content-between">
                    Total: <span>${totalAmount}</span>
                  </h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
