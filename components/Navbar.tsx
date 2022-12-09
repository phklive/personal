import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-center">
      <Image
        src={"/logo2.png"}
        alt="logo"
        height={200}
        width={300}
        className="cursor-pointer self-center"
      />
    </div>
  );
};

export default Navbar;
