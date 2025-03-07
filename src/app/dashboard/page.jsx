"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/store/userSlice";
import Header from "@/components/Header";

const Dashboard = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState(null);
  const dispatch = useDispatch();
  const [books, setBooks] = useState([]);

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

    const fetchBooks = async () => {
      const apiRequest = await axios.get("/api/book/all");
      setBooks(apiRequest.data.foundBooks);
    };

    checkAuth();
    fetchBooks();
  }, [router, dispatch]);

  if (loading)
    return (
      <div className="loading flex page">
        <div className="loader flex"></div>
      </div>
    );
  console.log(userInfo);
  return (
    <>
      <Header />
      <div className="search-container flex">
        <h1>Welcome {userInfo?.username}</h1>
      </div>
      <div className="books-container flex">
        <div className="books-wrapper flex">
          {books?.map((book) => {
            return (
              <div className="book-card flex" key={book?._id}>
                <div className="details flex">
                  <div className="department">
                    <p>{book?.department} </p>
                  </div>
                  <h3>{book?.title?.substring(0, 27)}</h3>
                  <div className="quantity flex">
                    <p>{book?.quantity}</p>
                  </div>
                </div>
                <img src={book?.cover_page} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
