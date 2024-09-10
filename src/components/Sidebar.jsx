import PropTypes from "prop-types";

function Sidebar({ handleShowModel, data }) {
  return (
    <div className="sidebar">
      <div className="bgOverlay"></div>

      <div className="sidebarContents">
        <h2>{data?.title}</h2>
        <div className="descriptionContainer">
          <p className="descriptionTitle">{data?.date}</p>
          <p>{data?.explanation}</p>
        </div>
        <button onClick={handleShowModel}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}

Sidebar.propTypes = {
  handleShowModel: PropTypes.func,
  data: PropTypes.object,
};

export default Sidebar;
