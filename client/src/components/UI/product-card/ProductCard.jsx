import React, { useEffect } from "react";
import { getUserInfo } from "../../../store/shopping-cart/userSlice";
import "../../../styles/product-card.css";

import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";
import { deleteProduct } from "../../../store/shopping-cart/productSlice";
import Edit from "../../Add/Edit";

const ProductCard = (props) => {
  const { _id, id, title, image01, price } = props.item;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfo());
  }, []);

  const { userInfo } = useSelector((state) => state.user);
  const Role = userInfo.isAdmin;

  const deletPro = (e) => {
    e.preventDefault();
    dispatch(deleteProduct(_id));
  };

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
      })
    );
  };

  return (
    <div className="product__item">
      <div className="product__img">
        <img src={image01} alt="product-img" className="w-50" />
      </div>

      <div className="product__content">
        <h5>
          <Link to={`/foods/${id}`}>{title}</Link>
        </h5>
        <div className=" d-flex align-items-center justify-content-between ">
          {/* <span className="product__price">${price}</span> */}
          {Role ? (
            <>
              <button className="addTOCart__btn" onClick={deletPro}>
                Dellet Cart
              </button>
              <Edit item={props.item} />
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
