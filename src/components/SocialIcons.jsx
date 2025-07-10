// src/components/SocialIcons.jsx
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
const SocialIcons = () => {
    const iconStyle = "text-2xl mx-2 hover:text-primary transition-colors duration-300";

    return (
        <div className="flex justify-center mt-4 gap-2.5">
            <a href="https://github.com/Prashant-021" target="_blank" rel="noopener noreferrer">
                <div className="h-16 w-16 bg-secondary-background m-auto rounded-xl flex justify-center items-center">
                    <FaGithub className={iconStyle} />
                </div>
            </a>
            <a href="https://www.linkedin.com/in/prashant-patel-366b16169" target="_blank" rel="noopener noreferrer">
                <div className="h-16 w-16 bg-secondary-background m-auto rounded-xl flex justify-center  items-center">
                    <FaLinkedin className={iconStyle} />
                </div>
            </a>
            <a href="https://leetcode.com/u/pspatel021" target="_blank" rel="noopener noreferrer">
                <div className="h-16 w-16 bg-secondary-background m-auto rounded-xl flex justify-center items-center">
                    <SiLeetcode className={iconStyle} />
                </div>
            </a>
        </div>
    );
};

export default SocialIcons;
