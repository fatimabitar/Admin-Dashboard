import React from "react";
import Chart from "../components/Chart";
import FeaturedInfo from "../components/FeaturedInfo";
import "../css/home.css";

const Home = () => {
  return (
    <main className="home">
      <FeaturedInfo />
      <Chart />
    </main>
  );
};

export default Home;
