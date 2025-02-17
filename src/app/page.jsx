"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/userSlice";
import Header from "@/components/Header";
import toast from "react-hot-toast";

const Home = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <div className="home-container flex page col">
      <Header />
      <div className="home-container flex page">
        <h1>Hello</h1>
      </div>
    </div>
  );
};

export default Home;
