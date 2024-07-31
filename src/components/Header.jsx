export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 mx-auto max-w-3xl gap-4">
      <div className="flex items-center space-x-2">
        <i className="fa-solid fa-terminal text-blue-400 text-2xl"></i>
        <h2 className="text-4xl text-white font-bold">Joki</h2>
      </div>
      <nav className="space-x-5">
        <a href="#" className="text-white hover:text-blue-400 font-bold">
          <i className="fa-solid fa-house"></i> Home
        </a>
        <a href="#" className="text-white hover:text-blue-400 font-bold">
          <i className="fa-solid fa-user"></i> About me
        </a>
        <a href="#" className="text-white hover:text-blue-400 font-bold">
          <i className="fa-solid fa-keyboard"></i> Works
        </a>
        <a href="#" className="text-white hover:text-blue-400 font-bold">
          <i className="fa-brands fa-github"></i> Source
        </a>
      </nav>
    </header>
  );
}
