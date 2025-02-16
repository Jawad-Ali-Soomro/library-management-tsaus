"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const page = () => {
  const router = useRouter();
  const [btnDisabled, setIsDisabled] = useState(true);
  const [formFields, setFields] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => {
      const updatedFields = { ...prev, [name]: value };
      setIsDisabled(
        !updatedFields.email ||
          !updatedFields.username ||
          !updatedFields.password
      );
      return updatedFields;
    });
  };

  const handleRegistration = async () => {
    try {
      await axios.post("/api/user/register", {
        username: formFields.username,
        email: formFields.email,
        password: formFields.password,
      });
      router.push("/login");
    } catch (error) {
      toast.error(error.response?.data?.message || error.message || error);
    }
  };

  return (
    <div className="page flex">
      <div className="container-auth flex col">
        <img src="/logo.png" alt="Logo" />
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
            onClick={handleRegistration}
          >
            Register
          </button>
          <div className="text flex">
            <span>OR</span>
          </div>
          <button
            className="btn-login flex"
            onClick={() => router.push("/login")}
          >
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
