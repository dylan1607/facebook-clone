import Image from "next/image";
import { ThumbUpIcon, ChatAltIcon, ShareIcon } from "@heroicons/react/outline";

const Post = ({ name, message, email, image, postImage, timestamp }) => {
  return (
    <div className="flex flex-col">
      <div className="bg-white p-5 mt-5 rounded-t-2xl shadow-md">
        <div className="flex items-center space-x-2">
          <Image
            className="rounded-full"
            alt=""
            src={image}
            height={40}
            width={40}
            layout="fixed"
          />
          <div className="flex flex-col">
            <p className="font-medium">{name}</p>
            <p className="text-xs text-gray-400">
              {new Date(timestamp?.toDate()).toLocaleString()}
            </p>
          </div>
        </div>
        <p className="pt-4">{message}</p>
      </div>
      {postImage && (
        <div className="h-56 md:h-96 bg-white">
          {/* <Image alt="" src={postImage} layout="fill" objectFit="cover" /> */}

          {/* <img className="object-fill" src={postImage} alt="" /> */}
        </div>
      )}
      {/* Footer */}
      <div
        className="flex justify-between items-center
        rounded-b-2xl bg-white shadow-md text-gray-400 border-t"
      >
        <div className="inputIcon rounded-none rounded-bl-2xl">
          <ThumbUpIcon className="h-4" />
          <p className="text-xs sm:text-base">Like</p>
        </div>

        <div className="inputIcon rounded-none">
          <ChatAltIcon className="h-4" />
          <p className="text-xs sm:text-base">Comment</p>
        </div>

        <div className="inputIcon rounded-none rounded-br-2xl">
          <ShareIcon className="h-4" />
          <p className="text-xs sm:text-base">Share</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
