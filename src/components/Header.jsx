import PropTypes from "prop-types";

export default function Header(props) {
  const { toggleWindow } = props;

  return (
    <header className="flex justify-between items-center p-4 mx-auto max-w-3xl gap-4">
      <div className="flex items-center space-x-2">
        <i className="fa-solid fa-terminal text-blue-400 text-2xl"></i>
        <h2 className="text-4xl text-white font-bold">Joki</h2>
      </div>
      <nav className="space-x-5">
        <a
          onClick={() => toggleWindow("home")}
          className="text-white hover:text-blue-400 font-bold"
        >
          <i className="fa-solid fa-house"></i> Home
        </a>
        <a
          onClick={() => toggleWindow("about-me")}
          className="text-white hover:text-blue-400 font-bold"
        >
          <i className="fa-solid fa-user"></i> About me
        </a>
        <a
          onClick={() => toggleWindow("project")}
          className="text-white hover:text-blue-400 font-bold"
        >
          <i className="fa-solid fa-keyboard"></i> Projects
        </a>
        <a
          href="https://github.com/Josedzzz"
          className="text-white hover:text-blue-400 font-bold"
          target="_blank"
        >
          <i className="fa-brands fa-github"></i> Source
        </a>
      </nav>
    </header>
  );
}

Header.propTypes = {
  toggleWindow: PropTypes.func.isRequired,
};
