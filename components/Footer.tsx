import { AiOutlineInstagram } from "react-icons/ai";
import { FiTwitter, FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="flex flex-row gap-4 items-center justify-center mb-10">
      <a href="https://instagram.com/phk.dev">
        <AiOutlineInstagram className="text-white text-3xl hover:text-yellow-500" />
      </a>
      <a href="https://twitter.com/phklive">
        <FiTwitter className="text-white text-3xl  hover:text-yellow-500" />
      </a>
      <a href="https://www.youtube.com/c/PHKLIVEc">
        <FiYoutube className="text-white text-3xl  hover:text-yellow-500" />
      </a>
    </div>
  );
};

export default Footer;
