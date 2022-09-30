import Image from "next/image";
import React from "react";
import TypeWriter from "typewriter-effect";

const Header = () => {
  return (
    <>
      <div className="flex flex-row py-10 justify-center w-11/12 mx-auto">
        <div className="flex-1 flex flex-row justify-end">
          <Image
            src={"/phk.jpg"}
            alt="phk"
            width={400}
            height={600}
            className="rounded-xl shadow-2xl"
          />
        </div>
        <div className="flex-1 text-white -ml-8 z-10">
          <span className="text-2xl md:text-4xl">Hey, my name is</span>
          <br />
          <span className="text-4xl md:text-7xl font-bold">
            Paul-Henry
            <br />
            Kajfasz
          </span>
          <br />
          <span className="text-3xl md:text-5xl mt-10">
            <TypeWriter
              options={{
                strings: [
                  "I'm a dreamer",
                  "I'm a builder",
                  "I'm a fullstack developer",
                  "I'm a consultant",
                  "I'm a problem solver",
                  "I'm an innovator",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center">
        <button
          onClick={() => window.scrollTo(0, 10000)}
          className="text-2xl px-4 py-2 rounded border border-white text-white nabla hover:bg-white hover:text-black"
        >
          Let's chat
        </button>
      </div>
    </>
  );
};

export default Header;
