import "../pages/Dashboard.css";
import profile from "../assets/profile.png";

const DashHeader = () => {
  return (
    <div className="dash__header__bar">
      <h2 className="dahsboard">Upload CSV</h2>

      <div className="header__right">
        <button className="bell__icon">
          <i className="ri-notification-2-line"></i>
        </button>

        <div className="profile__icon">
          <img src={profile} alt="userimage" />
        </div>
      </div>
    </div>
  );
};

export default DashHeader;
