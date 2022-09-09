import { Outlet, NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import "../../styles/dashboard.css";

import Helmet from "../Helmet/Helmet";
import CommonSection from "../UI/common-section/CommonSection";
import NavDash from "./NavDash";
const Dashboard = () => {
  return (
    <Helmet title="Admin">
      <CommonSection title="Admin" />
      <NavDash />
      <div>
        {/* <Header /> */}

        {/* <div className="Dashboardhead">
        <div className="DashboarsideNav">
          <h3>Quick Links</h3>
          <NavLink
            className={({ isActive }) =>
              isActive ? "link-active" : "link-inactive"
            }
            to="/admin/"
          ></NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "link-active" : "link-inactive"
            }
            to="/admin/Customers"
          >
            Customers
          </NavLink>
          <NavLink
          className={({ isActive }) =>
          isActive ? "link-active" : "link-inactive"
        }
        to="/admin/orders"
        >
        Orders
        </NavLink>
        <NavLink
        className={({ isActive }) =>
        isActive ? "link-active" : "link-inactive"
      }
      to="/admin/Products"
      >
      Products
      </NavLink>
      
      <div className="DashboardOutlet">
      <Outlet />
      </div>
      </div>
    </div> */}
      </div>
    </Helmet>
  );
};

export default Dashboard;
