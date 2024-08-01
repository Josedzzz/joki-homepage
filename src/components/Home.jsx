import PropTypes from "prop-types";

export default function Home() {
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
    <div className="flex flex-col gap-6">
      <h2 className="text-xl sm:text-xl md:text-2xl text-blue-400 font-bold border-b-2 border-blue-400 ">
        On the web
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <SocialMedia
          icon={<i className="fa-brands fa-github"></i>}
          title={"@Josedzzz"}
          reference={"https://github.com/Josedzzz"}
        />
        <SocialMedia
          icon={<i className="fa-solid fa-code"></i>}
          title={"@JokiNP"}
          reference={"https://leetcode.com/u/JokiNP/"}
        />
        <SocialMedia
          icon={<i className="fa-brands fa-linkedin"></i>}
          title={"@Jose David Amaya"}
          reference={"https://www.linkedin.com/in/jose-david-amaya-37ba23167/"}
        />
        <SocialMedia
          icon={<i className="fa-brands fa-instagram"></i>}
          title={"@jokidzz"}
          reference={"https://www.instagram.com/jokidzz/"}
        />
      </div>
    </div>
  );
};

const SocialMedia = (props) => {
  const { icon, title, reference } = props;

  const handleClick = () => {
    if (reference.startsWith("https://")) {
      window.open(reference, "_blank");
    } else {
      navigator.clipboard.writeText(title).then(() => {
        alert(`Copied ${title} to clipboard`);
      });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center space-x-2 p-2 border border-white rounded-xl hover:bg-blue-400 transition duration-300 ease-in-out transform hover:scale-105"
    >
      <div className="text-white text-lg">{icon}</div>
      <span className="text-lg text-white">{title}</span>
    </button>
  );
};

SocialMedia.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  reference: PropTypes.string.isRequired,
};
