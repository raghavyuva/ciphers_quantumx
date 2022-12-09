import React from "react";
import user from "../assets/User.jpg";

const ProfileCard = ({ width, name = 'Manoj Bhat', email = 'bhatmanoj@gmail.com' }) => {
  return (
    <div
      className={`w-[95%] md:${width} bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-900 dark:border-gray-700`}
    >
      <div className="flex justify-end px-4 pt-4"></div>
      <div className="flex flex-col items-center pb-10">
        <img
          className="w-28 h-28 mb-3 rounded-full shadow-lg"
          src={user}
          alt="user image"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          Manoj Bhat
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          manojbhat@gmail.com
        </span>
      </div>
    </div>
  );
};

export default ProfileCard;
