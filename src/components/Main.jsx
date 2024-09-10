import PropTypes from "prop-types";

function Main({ data }) {
  return (
    <div className="imgContainer">
      <img src={data.hdurl} alt={data?.title} className="bgImage" />
    </div>
  );
}

Main.propTypes = {
  data: PropTypes.object,
};
export default Main;
