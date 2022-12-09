import { React, useContext } from "react";
import Sidebar from "../../components/Sidebar";
import Menu from "../../components/Menu";
// import sideBarContext from "../../context/sideBarContext";
import { Outlet } from "react-router-dom";
import Story from "../../components/Story";
import Carousel from "../../components/Carousel";
import PostCard from "../../components/PostCard";
import Banner from "../../components/Banner";
import Articles from "../../components/Articles";
import FeedBack from "../../components/FeedBack";
import Pricing from "../../components/Pricing";
import FAQ from "../../components/FAQ";

const Home = () => {
  const Data = ["1", "2", "3", "4", "5", "6", "7", "8"]

  // const show = useContext(sideBarContext);
  const show = false;
  return (
    <div className="flex flex-col w-full h-screen">
      <div className={show.showMenu ? `fixed top-0 left-0 z-50` : `fixed top-0 -left-64 lg:left-0 w-64`}>
        <Sidebar />
      </div>
      <div className="absolute mx-auto    top-0 left-0 lg:left-64   min-h-screen bg-gray-800 shadow-lg ">
        <Menu />
        <Outlet />
        <Banner />
        <Story />
        <Carousel />
        <div>
          <p className="text-2xl mt-10 ml-5 font-bold font-mono text-white">Explore ShowCase</p>
          <div className="grid grid-cols-4">
            {
              Data?.map((el) => (
                <PostCard />
              ))
            }
          </div>
        </div>
        <Articles />
        <Pricing />
        <FAQ />
        <FeedBack />
      </div>
    </div>
  );
};

export default Home;
