import { ImAirplane } from "react-icons/im";

const Footer = () => {
  return (
    <div className="flex flex-col items-center p-5 bg-slate-100 gap-1">
      <div className="flex gap-2 ">
        <ImAirplane className=" text-xl text-primary " />
        <p className="text-primary font-bold">droptrips</p>
      </div>
      <div>
        <p className="text-sm">Todos os direitos reservados.</p>
      </div>
    </div>
  );
};

export default Footer;
