import { categories } from "../constants";
const SideBar = () => {
  return (
    <div className="flex flex-col p-1 md:p-4">
      {categories?.map((item) => (
        <div key={item.name}>
          <div className="flex items-center gap-2 cursor-pointer py-4 px-2 md:px-3 text-base md:text-lg rounded-md hover:bg-[#2d2d2d]">
            <span className="max-sm:text-2xl">{item.icon}</span>
            <span className="max-sm:hidden"> {item.name}</span>
          </div>

          {/*divider true ise ekrana çizgi bas */}
          {item.divider && <hr />}
        </div>
      ))}
    </div>
  );
};

export default SideBar;
