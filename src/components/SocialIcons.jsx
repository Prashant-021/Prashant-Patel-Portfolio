// src/components/SocialIcons.jsx
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const SocialIcons = () => {
    const iconStyle = "text-2xl mx-2 hover:text-primary transition-colors duration-300";

    return (
        <div className="flex justify-center mt-4">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <FaGithub className={iconStyle} />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className={iconStyle} />
            </a>
            <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
                <FaTwitter className={iconStyle} />
            </a>
            <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer">
                <FaInstagram className={iconStyle} />
            </a>
        </div>
    );
};

export default SocialIcons;
