import React from "react";
import NavDash from "./NavDash";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../UI/common-section/CommonSection";
import Helmet from "../Helmet/Helmet";

import "../../styles/productDash.css";
const Products = () => {
  return (
    <Helmet title="Products">
      <CommonSection title="Products" />

      <NavDash />
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="m-auto text-center">
            <div>
              <div>
                <div className="containerlogin">
                  <form action="#" className="login active formPrdouct ">
                    <h2 className="title">Add Prouct</h2>

                    {/* Tilte */}
                    <div className="form-group">
                      <label>Tilte</label>
                      <div className="input-group">
                        <input type="text" placeholder="Entre your title" />
                      </div>
                    </div>

                    {/* Price */}
                    <div className="form-group">
                      <label>Price</label>
                      <div className="input-group">
                        <input type="text" placeholder="Entre Price" />
                      </div>
                    </div>
                    {/* Decs */}
                    <div className="form-group">
                      <label>Description</label>
                      <div className="input-group">
                        <input type="text" placeholder="Entre Description" />
                      </div>
                    </div>

                    {/* image */}
                    <div className="form-group">
                      <label>Image</label>
                      <div className="input-group">
                        <input type="text" placeholder="Entre URL image" />
                      </div>
                    </div>

                    {/* button Login */}
                    <button type="submit" className="btn-submit">
                      Add
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

export default Products;
