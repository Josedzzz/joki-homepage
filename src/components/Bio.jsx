import { bio } from "../utils/bio";

export default function Bio() {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-xl sm:text-xl md:text-2xl text-blue-400 font-bold">
        Bio
      </h2>
      <ul className="space-y-3">
        {bio.map((item, index) => (
          <li key={index} className="flex flex-col sm:flex-row">
            <span className="text-base sm:text-lg md:text-xl text-blue-400 mr-2">
              {item.date}
            </span>
            <span className="text-base sm:text-lg md:text-xl text-white leading-relaxed">
              {item.description}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
