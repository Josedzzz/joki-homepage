import { paragraphs } from "../utils/aboutme";

export default function Intro() {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-xl sm:text-xl md:text-2xl text-blue-400 font-bold">
        Get to know me
      </h2>
      <div>
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="text-base sm:text-lg md:text-xl text-white mb-4 text-justify leading-relaxed"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
