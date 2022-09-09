import React from "react";
import { Link } from "react-router-dom";
import "../../styles/dashboard.css";
const NavDash = () => {
  return (
    <div className="fixedNav">
      <div className="side-menu">
        <div className="brand-name">
          <h1>Brand</h1>
        </div>

        <ul>
          <li>
            <img src="dashboard (2).png" alt="" />

            <Link className="spanLink" to="/admin/customers/">
              Users
            </Link>
          </li>
          <li>
            <img src="reading-book (1).png" alt="" />
            <Link className="spanLink" to="/admin/payments/">
              Payments
            </Link>
          </li>
          <li>
            <img src="teacher2.png" alt="" />
            <Link className="spanLink" to="/admin/products/">
              Products
            </Link>
          </li>
          <li>
            <img src="school.png" alt="" />
            &nbsp;<span>Schools</span>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavDash;
