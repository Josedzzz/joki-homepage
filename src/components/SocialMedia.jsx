import PropTypes from "prop-types";

export default function SocialMedia(props) {
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
      className="flex items-center space-x-2 p-2 border-2 border-white rounded-xl hover:bg-blue-400 transition duration-300 ease-in-out transform hover:scale-105"
    >
      <div className="text-white text-sm md:text-lg">{icon}</div>
      <span className="text-sm md:text-lg text-white">{title}</span>
    </button>
  );
}

SocialMedia.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  reference: PropTypes.string.isRequired,
};
