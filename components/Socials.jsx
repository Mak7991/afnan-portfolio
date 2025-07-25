import Link from "next/link";

import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiGithubLine,
  RiPinterestLine,
  RiLinkedinLine,
} from "react-icons/ri";

export const socialData = [
  {
    name: "YouTube",
    link: "https://www.youtube.com/@SchoolForEntrepreneurs",
    Icon: RiYoutubeLine,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/i_afnanofficial_?igsh=bTN2YmIyaG5yends",
    Icon: RiInstagramLine,
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/share/16dvjsB45E/?mibextid=wwXIfr",
    Icon: RiFacebookLine,
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/afnan-ahmed-siddique-2027b663?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    Icon: RiLinkedinLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "Github"
              ? "bg-accent rounded-full p-[5px] hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
