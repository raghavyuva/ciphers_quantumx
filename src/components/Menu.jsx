
// import sideBarContext from "../../context/sideBarContext";
import React, { useContext } from "react";
import  { CgMenuRound }from 'react-icons/cg'
const Menu = () => {
//   const menu = useContext(sideBarContext);
  
  return (
    <>
      <div className="flex lg:hidden justify-between w-full py-5 px-10">
        <a href="/">LOGO</a>
        <button><CgMenuRound size={40} />ashd</button>
      </div>
    </>
  );
};

export default Menu;
