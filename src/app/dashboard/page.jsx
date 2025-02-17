"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/userSlice";

const Dashboard = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get("/api/auth/validate", {
          withCredentials: true,
        });
        const user = res.data.user.user;
        setUserInfo(user);
        dispatch(setUser(user));

        setLoading(false);
      } catch (error) {
        router.push("/login");
      }
    };

    checkAuth();
  }, [router, dispatch]);

  if (loading)
    return (
      <div className="loading flex page">
        <div className="loader flex"></div>
      </div>
    );

  return <h1>Welcome {userInfo?.username} to the Dashboard</h1>;
};

export default Dashboard;
