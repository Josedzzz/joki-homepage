import PropTypes from "prop-types";

export default function Skill(props) {
  const { icon, title } = props;

  return (
    <div className="flex flex-col items-center p-2 bg-transparent rounded-lg border-2 border-white shadow-lg hover:bg-blue-400 transition duration-300 ease-in-out transform hover:scale-105">
      <div className="text-xl text-white">{icon}</div>
      <span className="text-lg text-white">{title}</span>
    </div>
  );
}

Skill.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
};
