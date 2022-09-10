import React, { useEffect, useRef, useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../store/shopping-cart/userSlice";
import { useDispatch, useSelector } from "react-redux";
import "../styles/register.css";

const Register = () => {
  // const signupNameRef = useRef();
  // const signupPasswordRef = useRef();
  // const signupEmailRef = useRef();
  const nav = useNavigate();
  const [fileUp, setFileUp] = useState({});
  // Function React hook form */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const { errors: userErrors, isAuth } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuth) nav("/cart");
  }, [isAuth]);

  // Function Submit data */

  const submitRegister = (RegisterData) => {
    dispatch(registerUser(RegisterData));
  };
  return (
    <Helmet title="Signup">
      <CommonSection title="Signup (You have to register first)" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <div>
                <div className="containerregister">
                  <form
                    action="#"
                    className="login active"
                    onSubmit={handleSubmit(submitRegister)}
                  >
                    <h2 className="title">Registration</h2>

                    {/* Username */}
                    <div className="form-group">
                      <label>Username</label>
                      <div className="input-group">
                        <input
                          type="text"
                          placeholder="Entre your Username"
                          {...register("username")}
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="form-group">
                      <label>Email</label>
                      <div className="input-group">
                        <input
                          type="email"
                          placeholder="Entre your email"
                          {...register("email", {
                            required: true,
                            pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                          })}
                        />
                        {errors.email && <p>Invalid Email </p>}
                        {userErrors && (
                          <p className="ErrorsMsg">{userErrors}</p>
                        )}
                      </div>
                    </div>

                    {/* Password */}
                    <div className="form-group">
                      <label>Password</label>
                      <div className="input-group">
                        <input
                          type="password"
                          pattern=".{8,}"
                          id="password"
                          placeholder="Your password"
                          {...register("password")}
                        />
                      </div>

                      <span className="help-text">At least 8 characters</span>
                    </div>
                    {/* image */}
                    <div className="form-group">
                      <label>Photo</label>
                      <div className="input-group">
                        <input
                          type="file"
                          placeholder="Entre your phtot"
                          onChange={(e) => setFileUp(e.target.files[0])}
                          accept=".png,.jpeg,.jpg"
                        />
                      </div>
                    </div>
                    {/* button Register */}

                    <button type="submit" className="btn-submit">
                      Register
                    </button>
                    <Link to="/login">Already have an account? Login</Link>
                  </form>
                </div>
                <div></div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Register;
