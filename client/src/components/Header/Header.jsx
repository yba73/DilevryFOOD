import React, { useRef, useEffect } from "react";

import { Container } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/shopping-cart/userSlice";
import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";

import "../../styles/header.css";

const Header = () => {
  const nav = useNavigate();
  const { isAuth } = useSelector((state) => state.user);
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const logouthandler = (e) => {
    e.preventDefault();
    dispatch(logout());
    nav("/homes");
  };
  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header__shrink");
      } else {
        headerRef.current.classList.remove("header__shrink");
      }
    });

    return () => window.removeEventListener("scroll");
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src={logo} alt="logo" />
            <h5>Tasty Treat</h5>
          </div>

          {/* ======= menu ======= */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu d-flex align-items-center gap-5">
              {/* {nav__links.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                >
                  {item.display}
                </NavLink>
              ))} */}

              <Link className="navClass" to="/homes">
                Home
              </Link>
              <Link className="navClass" to="/admin/customers">
                Admin
              </Link>

              {isAuth ? (
                <>
                  <Link className="navClass" to="/profile">
                    Profile
                  </Link>
                  <Link className="navClass" to="/foods">
                    Foods
                  </Link>
                  <Link className="navClass" to="/cart">
                    Cart
                  </Link>
                  <button
                    onClick={logouthandler}
                    className="btnLgout"
                    style={{
                      backgroundColor: "#ECF0F1",
                      borderColor: "#1B2631",
                      width: "80px",
                      height: "40px",
                      borderRadius: "12px",
                      fontSize: "20px",
                      lineHeight: "normal",
                    }}
                  >
                    Logout
                  </button>
                  <div className="nav__right d-flex align-items-center gap-4">
                    <span className="cart__icon" onClick={toggleCart}>
                      <i className="ri-shopping-basket-line"></i>
                      <span className="cart__badge">{totalQuantity}</span>
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <Link className="navClass" to="/login">
                    Login
                  </Link>
                  <Link className="navClass" to="/register">
                    Register
                  </Link>
                </>
              )}
              <Link className="navClass" to="/contact">
                Contact
              </Link>
            </div>
          </div>

          {/* ======== nav right icons ========= */}
          <div className="nav__right d-flex align-items-center gap-4">
            {/* <span className="user">
              <Link to="/login">
                <i class="ri-user-line"></i>
              </Link>s
            </span> */}

            <span className="mobile__menu" onClick={toggleMenu}>
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
