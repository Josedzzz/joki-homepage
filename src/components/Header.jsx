import PropTypes from "prop-types";

export default function Header(props) {
  const { toggleWindow, window } = props;

  const linkClasses = (link) =>
    `hover:text-blue-400 font-bold text-sm sm:text-md md:text-lg transition duration-300 ease-in-out ${
      window === link
        ? "border-b-2 border-blue-400 text-blue-400"
        : "text-white hover:text-blue-400 font-bold text-sm sm:text-md md:text-lg"
    }`;

  return (
    <header className="flex justify-between items-center p-4 mx-auto max-w-3xl gap-4">
      <div className="flex items-center space-x-2">
        <i className="fa-solid fa-terminal text-blue-400 text-lg sm:text-xl md:text-2xl"></i>
        <h2 className="text-xl sm:text-3xl md:text-4xl text-white font-bold">
          Joki
        </h2>
      </div>
      <nav className="space-x-7">
        <a onClick={() => toggleWindow("home")} className={linkClasses("home")}>
          <i className="fa-solid fa-house"></i> Home
        </a>
        <a
          onClick={() => toggleWindow("about-me")}
          className={linkClasses("about-me")}
        >
          <i className="fa-solid fa-user"></i> About me
        </a>
        <a
          onClick={() => toggleWindow("project")}
          className={linkClasses("project")}
        >
          <i className="fa-solid fa-keyboard"></i> Projects
        </a>
        <a
          href="https://github.com/Josedzzz"
          className="text-white hover:text-blue-400 font-bold text-sm sm:text-md md:text-lg"
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
  window: PropTypes.string.isRequired,
};
