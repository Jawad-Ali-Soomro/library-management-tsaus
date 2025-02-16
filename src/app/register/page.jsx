"use client";
import { redirect } from "next/navigation";
import React, { useState } from "react";

const Page = () => {
  const [btnDisabled, setIsDisabled] = useState(true);
  const [formFields, setFields] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    if (formFields.email && formFields.username && formFields.password) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  return (
    <div className="page flex ">
      <div className="container-auth flex col">
        <img src="/logo.png" alt="" />
        <h1>Library Management</h1>
        <div className="form-auth flex col">
          <div className="wrapper-input flex col">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              value={formFields.username}
              onChange={handleChange}
            />
          </div>
          <div className="wrapper-input flex col">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              value={formFields.email}
              onChange={handleChange}
            />
          </div>
          <div className="wrapper-input flex col">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={formFields.password}
              onChange={handleChange}
            />
          </div>
          <button
            disabled={btnDisabled}
            style={{ background: btnDisabled ? "gray" : "royalblue" }}
          >
            Register
          </button>
          <div className="text flex">
            <span>OR</span>
          </div>
          <button className="btn-login flex" onClick={() => redirect("/login")}>
            LOGIN
          </button>
        </div>
      </div>
      {/* <div className="right-side flex">
        <h1>
          The <span>revival</span> of educational <span>glory</span> to
          Shikarpur
        </h1>
      </div> */}
    </div>
  );
};

export default Page;
