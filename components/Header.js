import Image from "next/image";
import {
  SearchIcon,
  FlagIcon,
  PlayIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import HeaderIcon from "./HeaderIcon";
import { signOut, useSession } from "next-auth/client";

const Header = () => {
  const [session] = useSession();
  // console.log(session);
  return (
    <div
      className="flex items-center p-2 sticky top-0 z-50 bg-white
            lg:px-5 shadow-md"
    >
      {/* Left */}
      <div className="flex items-center">
        <Image
          width={40}
          height={40}
          alt=""
          layout="fixed"
          src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-1024.png"
        />
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            className="hidden lg:flex bg-transparent ml-2 items-center 
                    outline-none placeholder-gray-500
                    flex-shrink"
            type="text"
            placeholder="Search on Facebook"
          />
        </div>
      </div>

      {/* Center */}
      <div className="flex flex-grow justify-center">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center sm:space-x-2 justify-end">
        <Image
          className="rounded-full cursor-pointer"
          alt=""
          onClick={signOut}
          src={session.user.image}
          layout="fixed"
          width={40}
          height={40}
        />
        <p className="hidden lg:inline-flex whitespace-nowrap font-semibold pr-3">
          {session?.user.name}
        </p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
};

export default Header;
