import React from 'react';
import {Formik} from "formik";
import {connect} from "react-redux";
import {login} from "../../redux/actions/loginAction";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
    const navigate = useNavigate();
    return (
        <div className="container">
            <div className="row w-100 vh-100 justify-content-center align-items-center">
                <div className="col-4">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="text-center">Admin</h4>
                        </div>
                        <div className="card-body">
                            <Formik
                                initialValues={{ username: '', password: '' }}
                                onSubmit={(values) => {
                                    props.login(values, navigate);
                                }}
                            >
                                {({
                                      values,
                                      handleChange,
                                      handleSubmit,
                                      isSubmitting,
                                  }) => (
                                    <form onSubmit={handleSubmit}>
                                        <input
                                            type="text"
                                            name="username"
                                            onChange={handleChange}
                                            value={values.username}
                                            className="form-control"
                                            placeholder="Username"
                                        />
                                        <input
                                            type="password"
                                            name="password"
                                            onChange={handleChange}
                                            value={values.password}
                                            className="form-control mt-3"
                                            placeholder="Password"
                                        />
                                        <button type="submit" className="btn btn-success btn-block mt-3" disabled={isSubmitting}>
                                            Sign-in
                                        </button>
                                    </form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default connect(null, {login})(Login);