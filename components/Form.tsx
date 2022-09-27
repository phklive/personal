import React from "react";

const Form = () => {
  return (
    <div className="m-4 w-11/12 md:w-1/2 mx-auto mb-10">
      <h1 className="text-center text-white text-2xl nabla mb-2">Contact me</h1>
      <form
        action="https://formsubmit.co/kajfaszph@gmail.com"
        method="POST"
        className="flex flex-col justify-center items-center"
      >
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          className="text-xl rounded p-2 bg-transparent border-white border text-white w-full mb-3"
          required
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          className="text-xl rounded p-2 bg-transparent border-white border text-white w-full mb-3"
          required
        />
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="Subject"
          className="text-xl rounded p-2 bg-transparent border-white border text-white w-full mb-3"
          required
        />
        <textarea
          id="text"
          name="text"
          placeholder="Message"
          required
          className="text-xl rounded p-2 bg-transparent border-white border text-white w-full mb-3"
          rows={6}
        />
        <button
          type="submit"
          className="text-2xl px-4 py-2 rounded border border-white text-white nabla hover:bg-white hover:text-black w-full"
        >
          Get in touch
        </button>
      </form>
    </div>
  );
};

export default Form;
