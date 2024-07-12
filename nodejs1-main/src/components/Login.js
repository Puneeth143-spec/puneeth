import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      // Reset form fields
      setFormData({
        username: "",
        password: "",
      });
    } else {
      console.log("Form validation failed");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    return formData.username.trim() !== "" && formData.password.trim() !== "";
  };

  return (
    <div className="d-flex justify-content-center align-items-center login-container">
      <div className="login">
        <h1>College LOG IN</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btnSubmit">
            Submit
          </button> 
           {/* <Link to="/registration" type="submit" className="btnSubmit">
          Submit
        </Link> */}
        </form>
      </div>
    </div>
  );
};

export default Login;
























// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css"; 
// import "./Login.css";
// import { Link } from "react-router-dom";

// function Login() {
//   return (
//     <div className="d-flex justify-content-center align-items-center">
//     <div className="login">
//         <h1>College LOG IN</h1>
//         <label>Username</label>
//         <input type="text" />
//         <label>Password</label>
//         <input type="password" />
//         <Link to="/registration" style={btnSubmit}>
//             Submit
//           </Link>
//     </div>
//     </div>
//   );
// }
// const btnSubmit = {
//   padding: '10px 20px',
//   fontSize: '10px',
//   color: '#fff',
//   backgroundColor: '#007bff',
//   borderRadius: '20px',
//   textDecoration: 'none',
//   textAlign: 'center',
//   display: 'inline-block',
//   transition: 'background-color 0.3s',
//   left:'45px',
// };

// export default Login;
