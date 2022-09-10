import React, { useState } from "react";

import { Container, Row, Col } from "reactstrap";

import { useForm } from "react-hook-form";
import { addProducts } from "../../store/shopping-cart/productSlice";
import { useDispatch } from "react-redux";
import "../../styles/productDash.css";
import Helmet from "../../components/Helmet/Helmet";
import CommonSection from "../../components/UI/common-section/CommonSection";
import NavDash from "./NavDash";

const Products = () => {
  const dispatch = useDispatch();
  const [fileUp, setFileUp] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const subProducts = (data) => {
    dispatch(addProducts({ ...data, file: fileUp }));
  };
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
                  <form
                    action="#"
                    className="login active formPrdouct "
                    onSubmit={handleSubmit(subProducts)}
                  >
                    <h2 className="title">Add Product</h2>
                    {/* id */}
                    {/* Price */}
                    <div className="formProductsDash">
                      <div className="input-groupProductsdash roup">
                        <input
                          className="inputdash"
                          type="number"
                          placeholder="Entre id "
                          {...register("id")}
                        />
                      </div>
                    </div>
                    {/* Tilte */}
                    <div className="formProductsDash">
                      <div className="input-groupProductsdash roup">
                        <input
                          className="inputdash"
                          type="text"
                          placeholder="Entre your title"
                          {...register("title")}
                        />
                      </div>
                    </div>

                    {/* Price */}
                    <div className="formProductsDash">
                      <div className="input-groupProductsdash roup">
                        <input
                          className="inputdash"
                          type="number"
                          placeholder="Entre Price "
                          {...register("price")}
                        />
                      </div>
                    </div>
                    {/* Decs */}
                    <div className="formProductsDash">
                      <div className="input-groupProductsdash roup">
                        <input
                          className="inputdash"
                          type="text"
                          placeholder="Entre Description "
                          {...register("desc")}
                        />
                      </div>
                    </div>
                    {/* category */}
                    <div className="formProductsDash">
                      <div className="input-groupProductsdash roup">
                        <input
                          className="inputdash"
                          type="text"
                          placeholder="Entre category "
                          {...register("category")}
                        />
                      </div>
                    </div>

                    {/* image */}
                    <div className="formProductsDash">
                      <div className="input-groupProductsdash roup">
                        <input
                          className="inputdash"
                          type="file"
                          accept=".png,.jpeg,.jpg"
                          placeholder="Entre URL image"
                          onChange={(e) => setFileUp(e.target.files[0])}
                        />
                      </div>
                    </div>

                    {/* button Login */}
                    <button
                      onClick={() => alert("Product Add")}
                      type="submit"
                      className="btn-submit"
                    >
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
