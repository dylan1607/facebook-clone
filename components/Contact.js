import Image from "next/image";

const Contact = ({ name, src }) => {
  return (
    <div
      className="flex items-center space-x-3 mb-2
        relative hover:bg-gray-200 cursor-pointer
        p-2 rounded-xl"
    >
      <Image
        className="rounded-full"
        alt=""
        src={src}
        height={50}
        width={50}
        layout="fixed"
      />
      <p>{name}</p>
      <div
        className="absolute bg-green-500 bottom-2 left-7
        h-3 w-3 rounded-full animate-bounce"
      ></div>
    </div>
  );
};

export default Contact;
