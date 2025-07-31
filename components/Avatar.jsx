import avatarImg from "../public/avatar.jpg";
import Image from "next/image";

const Avatar = () => (
  <div className="w-full h-full sm:w-60 sm:h-40 xl:w-[737px] xl:h-[500px] relative">
    <Image
      src={avatarImg}
      alt="Avatar"
      layout="fill"
      objectFit="contain"
      priority
    />
  </div>
);

export default Avatar;