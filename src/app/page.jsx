"use client";

import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import Header from "@/components/Header";

const Home = () => {
  const images = [
    "https://media.springernature.com/full/springer-static/cover-hires/book/978-1-349-13173-0",
    "https://studypack.taleemihub.com/wp-content/uploads/2023/06/Commerce.jpg",
    "https://media.springernature.com/full/springer-static/cover-hires/book/978-3-319-08186-1",
  ];

  return (
    <div className="home-container flex page col">
      <Header />
      <div className="home-container flex">
        <div className="left-home flex col">
          <h2>
            Explore The <span>shaikh ayaz university</span> library
          </h2>
          <div className="btns flex">
            <button>Explore </button>
            <button>Admissions</button>
          </div>
        </div>
        <div className="right-images flex">
          {images?.map((image) => {
            return (
              <div className="image-card flex" key={image}>
                <img src={image} alt="" />
              </div>
            );
          })}
        </div>
        <div className="background"></div>
      </div>
    </div>
  );
};

export default Home;
