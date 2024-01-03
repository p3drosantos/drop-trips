import { LuHotel } from "react-icons/lu";
import { GiFarmTractor } from "react-icons/gi";
import { MdOutlineCottage } from "react-icons/md";
import { PiHouseLineBold } from "react-icons/pi";

const QuickSearch = () => {
  return (
    <div className="container mx-auto p-5">
      <div className="flex items-center">
        <div className="w-full h-[1px] bg-grayLighter"></div>
        <h2 className="font-medium text-grayPrimary whitespace-nowrap px-5">
          Tente pesquisar por
        </h2>
        <div className="w-full h-[1px] bg-grayLighter"></div>
      </div>

      <div className="flex w-full justify-between mt-5">
        <div className="flex flex-col items-center gap-1">
          <LuHotel size={35} className=" text-grayPrimary cursor-pointer" />
          <p className=" text-sm text-grayPrimary font-semibold">Hotel</p>
        </div>
        <div className="flex flex-col items-center gap-1 cursor-pointer">
          <GiFarmTractor size={35} className=" text-grayPrimary" />
          <p className=" text-sm text-grayPrimary font-semibold">Fazenda</p>
        </div>
        <div className="flex flex-col items-center gap-1 cursor-pointer">
          <MdOutlineCottage size={35} className=" text-grayPrimary" />
          <p className=" text-sm text-grayPrimary font-semibold">Chalé</p>
        </div>
        <div className="flex flex-col items-center gap-1 cursor-pointer">
          <PiHouseLineBold size={35} className=" text-grayPrimary" />
          <p className=" text-sm text-grayPrimary font-semibold">Pousada</p>
        </div>
      </div>
    </div>
  );
};

export default QuickSearch;
