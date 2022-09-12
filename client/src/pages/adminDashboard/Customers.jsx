import React, { useEffect } from "react";
import "../../styles/dashboard.css";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../../components/Helmet/Helmet";
import CommonSection from "../../components/UI/common-section/CommonSection";
import NavDash from "./NavDash";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUser,
  getAllUserInfo,
} from "../../store/shopping-cart/userSlice";

<link
  href="https://fonts.googleapis.com/css?family=Open Sans Condensed:300"
  rel="stylesheet"
></link>;
const Customers = ({ items }) => {
  const { _id, image, email, username, phone } = items;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUserInfo());
  }, []);
  const { AllUserInfo } = useSelector((state) => state.user);
  console.log(_id);
  console.log(username);
  const deletUser = (e) => {
    e.preventDefault();
    dispatch(deleteUser(_id));
  };
  return (
    <tr>
      <td>
        <img className="userImage" src={image} alt="user" />
      </td>
      <td>{username}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>
        <button className="btnDelete" onClick={deletUser}>
          Delete
        </button>
        <img src="info.png" alt="" />
      </td>
    </tr>
  );
};

export default Customers;
