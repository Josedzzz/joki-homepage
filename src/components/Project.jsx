import PropTypes from "prop-types";

export default function Project(props) {
  const { image, title, text, reference } = props;

  const handleClick = () => {
    if (reference.startsWith("https://")) {
      window.open(reference, "_blank");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="flex flex-col gap-1 items-center p-2 border-2 border-blue-400 rounded-lg hover:bg-blue-400 transition duration-300 ease-in-out transform hover:scale-105"
    >
      <img src={image} alt={title} className="w-full h-auto rounded-lg" />
      <h2 className="text-lg sm:text-xl text-white font-bold">{title}</h2>
      <p className="text-sm sm:text-md text-white text-center">{text}</p>
    </button>
  );
}

Project.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  reference: PropTypes.string.isRequired,
};
