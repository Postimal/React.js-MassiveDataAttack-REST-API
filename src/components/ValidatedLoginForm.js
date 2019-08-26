import React from "react";
import { Formik } from "formik";
import * as EmailValidator from "email-validator";
import Ushallnotpass from "../ushallnotpass.jpg";

class ValidatedLoginForm extends React.Component {
  render() {
    return (
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log("Logging in", values);
            setSubmitting(false);
            this.props.showMenu();
            this.props.history.push("/home");
          }, 500);
        }}
        // validacja
        validate={values => {
          let errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (!EmailValidator.validate(values.email)) {
            errors.email = "Invalid email address";
          }

          const passwordRegex = /(?=.*[0-9])/;
          if (!values.password) {
            errors.password = "Required";
          } else if (values.password.length < 8) {
            errors.password = "Password must be 8 characters long.";
          } else if (!passwordRegex.test(values.password)) {
            errors.password = "Invalida password. Must contain one number";
          }

          return errors;
        }}
      >
        {props => {
          const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit
          } = props;
          return (
            <form onSubmit={handleSubmit}>
              <label htmlFor="email">Email</label>
              <input
                name="email"
                type="text"
                placeholder="Enter your email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.email && touched.email && "error"}
              />
              {errors.email && touched.email && (
                <div className="input-feedback">{errors.email}</div>
              )}
              <label htmlFor="password">Password</label>
              <input
                name="password"
                type="password"
                placeholder="Enter your password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.password && touched.password && "error"}
              />
              {errors.password && touched.password && (
                <div className="input-feedback">{errors.password}</div>
              )}
              <button type="submit" disabled={isSubmitting}>
                Login
              </button>
              {Object.keys(errors).length === 0 ? (
                <div></div>
              ) : (
                <img src={Ushallnotpass} alt="gandalf" />
              )}
            </form>
          );
        }}
      </Formik>
    );
  }
}

export default ValidatedLoginForm;
