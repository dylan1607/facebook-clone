import Stories from "../components/Stories";
import InputBox from "../components/InputBox";
import Posts from "./Posts";

const Feed = () => {
  return (
    <div
      className="flex-grow h-screen pb-44 pt-6 
    mr-4 xl:mr-40 overflow-y-auto scrollbar-hide"
    >
      <div className="mx-auto max-x-md md:max-w-lg lg:max-w-2xl">
        {/* Stories */}
        <Stories />

        {/* InputBox */}
        <InputBox />

        {/* Posts */}
        <Posts />
      </div>
    </div>
  );
};

export default Feed;
