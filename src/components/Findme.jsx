import { socials } from "../utils/socials";
import SocialMedia from "./SocialMedia";

export default function Findme() {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-xl sm:text-xl md:text-2xl text-blue-400 font-bold">
        On the web
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {socials.map((social, index) => (
          <SocialMedia
            key={index}
            icon={<i className={social.icon}></i>}
            title={social.title}
            reference={social.reference}
          />
        ))}
      </div>
    </div>
  );
}
