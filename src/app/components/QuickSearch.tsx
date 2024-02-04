import { LuHotel } from "react-icons/lu";
import { GiFarmTractor } from "react-icons/gi";
import { MdOutlineCottage } from "react-icons/md";
import { PiHouseLineBold } from "react-icons/pi";
import Link from "next/link";

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
        <Link href={"/trips/search?text=hotel"}>
          <div className="flex flex-col items-center gap-1">
            <LuHotel size={35} className=" text-grayPrimary cursor-pointer" />
            <p className=" text-sm text-grayPrimary font-semibold">Hotel</p>
          </div>
        </Link>

        <Link href={"/trips/search?text=fazenda"}>
          <div className="flex flex-col items-center gap-1 cursor-pointer">
            <GiFarmTractor size={35} className=" text-grayPrimary" />
            <p className=" text-sm text-grayPrimary font-semibold">Fazenda</p>
          </div>
        </Link>

        <Link href={"/trips/search?text=chalé"}>
          <div className="flex flex-col items-center gap-1 cursor-pointer">
            <MdOutlineCottage size={35} className=" text-grayPrimary" />
            <p className=" text-sm text-grayPrimary font-semibold">Chalé</p>
          </div>
        </Link>

        <Link href={"/trips/search?text=pousada"}>
          <div className="flex flex-col items-center gap-1 cursor-pointer">
            <PiHouseLineBold size={35} className=" text-grayPrimary" />
            <p className=" text-sm text-grayPrimary font-semibold">Pousada</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default QuickSearch;
