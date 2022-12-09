import React from "react";

const DrawerComponent = ({ label, Icon }) => {
  return (
    <>
      <li>
        <a
          href="dashboard/users"
          className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <Icon />
          <span className="ml-3">{label}</span>
        </a>
      </li>
    </>
  );
};

export default DrawerComponent;
