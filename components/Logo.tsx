import { BriefcaseBusiness } from "lucide-react";
import Image from "next/image";


export default function Logo() {
  return (
    <a href="#home" className="group flex items-center gap-2.5" aria-label="iJob home">
      <span>
        <Image 
          src={`${process.env.NODE_ENV === "production" ? "/iJob-website" : ""}/images/Logo.png`}
          alt="Rakoloi Mosa, Software Developer and creator of iJob"
          width={100}
          height={100}
        />
      </span>
    </a>
  );
}
