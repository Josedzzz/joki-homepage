import SkillPanel from "./SkillPanel";

export default function Home() {
  const handleCVDownload = () => {
    const link = document.createElement("a");
    link.href = "/documents/cv.pdf";
    link.download = "CV-Jose-Amaya.pdf";
    link.click();
  };

  return (
    <main className="flex flex-col gap-10 p-4 mx-auto max-w-xl">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <h1 className="text-xl sm:text-3xl md:text-4xl text-white font-bold">
            Hello, I'm
          </h1>
          <span className="text-xl sm:text-3xl md:text-4xl text-blue-400 font-bold">
            José David Amaya
          </span>
          <h2 className="text-lg sm:text-xl md:text-2xl text-white">
            Digital Craftsman ( Developer )
          </h2>
          <button
            onClick={handleCVDownload}
            className="flex justify-between mt-10 items-center space-x-2 p-2 border-4 border-blue-400 rounded-xl hover:bg-blue-400 transition duration-300 ease-in-out transform hover:scale-105"
          >
            <span className="text-lg text-white font-bold">Download CV</span>
            <i className="fa-solid fa-file text-lg text-white font-bold"></i>
          </button>
        </div>
        <img
          src="/images/me.jpeg"
          alt="José David Amaya"
          className="w-28 h-28 rounded-full border-4 border-blue-400 mb-4"
        />
      </div>
      <SkillPanel />
    </main>
  );
}
