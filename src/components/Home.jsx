import SkillPanel from "./SkillPanel";

export default function Home() {
  const handleCVDownload = () => {
    const link = document.createElement("a");
    link.href = "cv-Jose-Amaya.pdf";
    link.download = "CV-Jose-Amaya.pdf";
    link.click();
  };

  const handleCVESDownload = () => {
    const link = document.createElement("a");
    link.href = "cv-Jose-Amaya-ES.pdf";
    link.download = "CV-Jose-Amaya-ES.pdf";
    link.click();
  };

  return (
    <main className="flex items-center justify-center min-h-[calc(100vh-4rem)] flex-col gap-10 p-4 mx-auto max-w-xl appear-bottom">
      <div className="mt-12 flex justify-between items-center">
        <div className="flex flex-col">
          <h1 className="text-xl sm:text-3xl md:text-4xl text-white font-bold">
            Hello, I am
          </h1>
          <span className="text-xl sm:text-3xl md:text-4xl text-blue-400 font-bold">
            José David Amaya
          </span>
          <h2 className="text-lg sm:text-xl md:text-2xl text-white">
            Digital Craftsman ( Developer )
          </h2>
          <button
            onClick={handleCVDownload}
            className="flex justify-between mt-4 items-center space-x-2 p-2 border-4 border-blue-400 rounded-xl hover:bg-blue-400 transition duration-300 ease-in-out transform hover:scale-105"
          >
            <span className="text-lg text-white font-bold">
              Download CV - English
            </span>
            <i className="fa-solid fa-file text-lg text-white font-bold"></i>
          </button>
          <button
            onClick={handleCVESDownload}
            className="flex justify-between mt-4 items-center space-x-2 p-2 border-4 border-blue-400 rounded-xl hover:bg-blue-400 transition duration-300 ease-in-out transform hover:scale-105"
          >
            <span className="text-lg text-white font-bold">
              Download CV - Spanish
            </span>
            <i className="fa-solid fa-file text-lg text-white font-bold"></i>
          </button>
        </div>
      </div>
      <SkillPanel />
    </main>
  );
}
