import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { addProducts } from "../../store/shopping-cart/productSlice";

function Add(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const wrapper = () => {
    handleClose();
  };
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
    <>
      <div className="containerlogin">
        <Button
          variant="primary"
          onClick={handleShow}
          style={{ backgroundColor: "#e50913" }}
        >
          Add Products
        </Button>

        <Modal show={show} onHide={handleClose}>
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
            {/* <button
              onClick={() => alert("Product Add")}
              type="submit"
              className="btn-submit"
            >
              Add
            </button> */}
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={wrapper}
              style={{ backgroundColor: "#e50913" }}
            >
              Save
            </Button>
          </form>
        </Modal>
      </div>
    </>
  );
}

export default Add;
