export default function Home() {
  return (
    <main className="flex flex-col gap-10 p-4 mx-auto max-w-2xl">
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
        </div>
        <img
          src="/images/me.jpeg"
          alt="José David Amaya"
          className="w-28 h-28 rounded-full border-4 border-blue-400 mb-4"
        />
      </div>
      <Findme />
    </main>
  );
}

const Findme = () => {
  return (
    <div>
      <h2 className="text-xl sm:text-xl md:text-2xl text-blue-400 font-bold">
        You can find me
      </h2>
    </div>
  );
};
