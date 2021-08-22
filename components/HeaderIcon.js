const HeaderIcon = ({ Icon, active }) => {
  return (
    <div
      className="flex items-center cursor-pointer md:px-10 
                sm:h-14 hover:bg-gray-100 rounded-xl group
                active:border-b-2 active:border-blue-500
    "
    >
      <Icon
        className={`h-5 text-center group-hover:text-blue-500 
                    text-gray-500 sm:h-7 mx-auto
                    ${active && "text-blue-500"}`}
      />
    </div>
  );
};

export default HeaderIcon;
