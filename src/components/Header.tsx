"use client";

import { ImAirplane } from "react-icons/im";
import { AiOutlineMenu } from "react-icons/ai";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const { status, data } = useSession();

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleLoginClick = () => {
    signIn();
  };

  const handleLogoutClick = () => {
    setMenuIsOpen(false);
    signOut();
  };

  const handleMenuClick = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <div className="container mx-auto p-5 py-0 flex justify-between items-center h-[93px]">
      <div className="flex gap-2 ">
        <ImAirplane className=" text-xl text-primary " />
        <p className="text-primary font-bold">droptrips</p>
      </div>

      {status === "unauthenticated" && (
        <button
          className=" text-primary text-sm font-semibold"
          onClick={handleLoginClick}
        >
          Login
        </button>
      )}

      {status === "authenticated" && (
        <div className="relative flex items-center gap-3 border-grayLighter border border-solid rounded-full p-2 px-3">
          <AiOutlineMenu
            size={16}
            className=" cursor-pointer"
            onClick={handleMenuClick}
          />
          <Image
            height={30}
            width={30}
            alt={data.user?.name!}
            src={data.user?.image!}
            className=" rounded-full shadow-md"
          />

          {menuIsOpen && (
            <div className="absolute top-12 left-0 w-full h-full bg-white rounded-lg  shadow-md flex flex-col justify-center items-center">
              <button
                className="text-primary text-sm font-semibold"
                onClick={handleLogoutClick}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
