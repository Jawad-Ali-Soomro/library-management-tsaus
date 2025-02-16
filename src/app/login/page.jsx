"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

const Page = () => {
  const router = useRouter();
  const [btnDisabled, setIsDisabled] = useState(true);
  const [formFields, setFields] = useState({
    email: "",
    password: "",
  });

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => {
      const updatedFields = { ...prev, [name]: value };
      setIsDisabled(
        !updatedFields.email ||
          !isValidEmail(updatedFields.email) ||
          !updatedFields.password
      );
      return updatedFields;
    });
  };

  const handleLogin = async () => {
    if (!isValidEmail(formFields.email)) {
      toast.error("Invalid email format.");
      return;
    }

    try {
      await axios.post(
        "/api/user/login",
        {
          email: formFields.email,
          password: formFields.password,
        },
        { withCredentials: true }
      );

      toast.success("Login successful!");
      setTimeout(() => {
        router.push("/dashboard");
      }, 1000);
    } catch (error) {
      toast.error(
        error.response?.data?.message || error.message || "Login failed."
      );
    }
  };

  return (
    <div className="page flex">
      <div className="container-auth flex col">
        <img src="/logo.png" alt="Library Logo" />
        <h1>Library Management</h1>
        <div className="form-auth flex col">
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
            onClick={handleLogin}
          >
            Login
          </button>
          <div className="text flex">
            <span>OR</span>
          </div>
          <button
            className="btn-login flex"
            onClick={() => router.push("/register")}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
