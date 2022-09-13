import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCart } from "../../../store/shopping-cart/cart";

const CarAfichage = ({ item }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCart());
  }, []);
  const { image01, title, price, quantity } = item;
  console.log("title", title);
  return (
    <>
      <tr>
        <td className="text-center cart__img-box">
          <img src={image01} alt="" />
        </td>
        <td className="text-center">{title}</td>
        <td className="text-center">${price}</td>
        <td className="text-center">{quantity}px</td>
        <td className="text-center cart__item-del">
          <i className="ri-delete-bin-line"></i>
        </td>
      </tr>
    </>
  );
};

export default CarAfichage;
