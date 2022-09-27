import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-center">
      <Image
        src={"/logo.svg"}
        alt="logo"
        height={80}
        width={100}
        className="cursor-pointer self-center"
      />
    </div>
  );
};

export default Navbar;
