import { BriefcaseBusiness } from "lucide-react";
import Image from "next/image";


export default function Logo() {
  return (
    <a href="#home" className="group flex items-center gap-2.5" aria-label="iJob home">
      {/* <span className="grid size-11 place-items-center rounded-2xl bg-[#168a45] text-white shadow-lg shadow-green-700/20 transition-transform duration-300 group-hover:rotate-[-6deg] group-hover:scale-105">
        <BriefcaseBusiness size={22} />
      </span>
      <span className="text-xl font-black tracking-tight text-slate-900">
        i<span className="text-[#168a45]">Job</span>
      </span> */}

      <span>
        <Image 
          src="/images/Logo.png"
          alt="Rakoloi Mosa, Software Developer and creator of iJob"
          width={100}
          height={100}
        />
      </span>
    </a>
  );
}
