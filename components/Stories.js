import Image from "next/image";
import StoryCard from "./StoryCard";

const stories = [
  {
    name: "Mark Zuckerberg",
    src: "https://links.papareact.com/xql",
    profile: "https://links.papareact.com/snf",
  },
  {
    name: "Elson Musk",
    src: "https://links.papareact.com/4zn",
    profile: "https://links.papareact.com/kxk",
  },
  {
    name: "Bill Gates",
    src: "https://links.papareact.com/4u4",
    profile: "https://links.papareact.com/zvy",
  },
  {
    name: "Jeff Bezoz",
    src: "https://links.papareact.com/k2j",
    profile: "https://links.papareact.com/f0p",
  },
];

const Stories = () => {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((item) => (
        <StoryCard
          key={item.src}
          name={item.name}
          src={item.src}
          profile={item.profile}
        />
      ))}
    </div>
  );
};

export default Stories;
