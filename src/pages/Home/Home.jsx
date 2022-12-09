import { React, useContext } from "react";
import Sidebar from "../../components/Sidebar";
import Menu from "../../components/Menu";
// import sideBarContext from "../../context/sideBarContext";
import { Outlet } from "react-router-dom";

const Home = () => {

  // const show = useContext(sideBarContext);
  const show = false;
  return (
    <div className="flex flex-col w-full h-screen">
      <div className={show.showMenu?`fixed top-0 left-0 z-50`:`fixed top-0 -left-64 lg:left-0 w-64`}>
        <Sidebar />
      </div>
      <div className="absolute w-full lg:w-[calc(100%-16rem)] top-0 left-0 lg:left-64 px-5 pb-10 min-h-screen bg-blue-100 lg:pt-10">
        <Menu />
        <Outlet/>
      </div>
    </div>
  );
};

export default Home;
