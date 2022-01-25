import React from "react";
import Chart from "../components/Chart";
import FeaturedInfo from "../components/FeaturedInfo";
import { WidgetLg } from "../components/WidgetLg";
import WidgetSm from "../components/WidgetSm";
import "../css/home.css";
import { userData } from "../Data";

const Home = () => {
  return (
    <main className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="activeusers"
      />
      <div className="home__widgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </main>
  );
};

export default Home;
