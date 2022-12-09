import { DrawerElements1,DrawerElements2 } from "../static/DrawerElements";
import DrawerComponent from "./DrawerComponents";
import ProfileCard from "./ProfileCard";


const Sidebar = () => {
  return (
    <>
      <aside className="lg:block w-64" aria-label="Sidebar">
        <div className="overflow-y-auto h-screen py-4 px-3 bg-gray-50 rounded dark:bg-gray-800 shadow-2xl flex flex-col justify-around">
          <ProfileCard width={'w-64'}/>
          <ul className="space-y-2">
            {DrawerElements1.map((ele,i) => (
              <DrawerComponent label={ele.label} Icon={ele.Icon} key={i} />
            ))}
          </ul>
          <ul>
          {DrawerElements2.map((ele,i) => (
              <DrawerComponent label={ele.label} Icon={ele.Icon} key={i} />
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
