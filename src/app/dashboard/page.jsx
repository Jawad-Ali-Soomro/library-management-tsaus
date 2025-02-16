"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const Dashboard = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get("/api/auth/validate", {
          withCredentials: true,
        });
        console.log(res.data);
        setUser(res.data.user.user);
        setLoading(false);
      } catch (error) {
        router.push("/login");
      }
    };

    checkAuth();
  }, [router]);

  if (loading) return <p>Loading...</p>;

  return <h1>Welcome {user?.username} to the Dashboard</h1>;
};

export default Dashboard;
