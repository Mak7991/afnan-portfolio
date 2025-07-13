import Image from "next/image";
import Link from "next/link";

import Socials from "../components/Socials";
import { BsDot } from "react-icons/bs";

const Header = () => {
  return (
    <header className="absolute z-30 w-full items-center px-16 xl-px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          {/* logo */}
          <Link href="/">
            <p className="text-white text-[26px] font-bold cursor-pointer flex">
              Afnan  &nbsp;
              <span className="font-thin"> Ahmed </span> <BsDot className="text-white/20 mt-4" color="red"/>
            </p>
          </Link>

          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
