import PropTypes from "prop-types";

function Footer({ handleShowModel, showModel, data }) {
  return (
    <footer>
      <div className="bgGradient"></div>
      <div>
        <h2>{data?.title}</h2>
        <h1>APOD PROJECT</h1>
      </div>
      <button onClick={handleShowModel}>
        <i className="fa-solid fa-info"></i>
      </button>
    </footer>
  );
}

Footer.propTypes = {
  handleShowModel: PropTypes.func,
  showModel: PropTypes.bool,
  data: PropTypes.object,
};

export default Footer;
