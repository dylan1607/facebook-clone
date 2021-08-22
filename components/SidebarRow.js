import Image from "next/dist/client/image";
const SidebarRow = ({ src, title, Icon }) => {
  return (
    <div
      className="flex items-center space-x-2 p-4 cursor-pointer
        hover:bg-gray-200 rounded-xl"
    >
      {src && (
        <Image
          className="rounded-full"
          alt=""
          src={src}
          height={30}
          width={30}
          layout="fixed"
        />
      )}
      {Icon && <Icon className="h-8 w-8 text-blue-500" />}
      <p className="hidden sm:inline-flex font-medium">{title}</p>
    </div>
  );
};

export default SidebarRow;
