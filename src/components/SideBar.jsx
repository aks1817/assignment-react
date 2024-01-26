import "../pages/Dashboard.css";
import logo from "../assets/logo.png";

const SideBar = () => {
  return (
    <div className="sidebar__container">
      <h1 className="board__logo">
        <img src={logo} alt="logo" className="logo" />
        Base
      </h1>

      <ul className="nav__links">
        <li className="nav__link">
          <a rel="noopener noreferrer">
            <i className="ri-layout-grid-fill"></i>Dashboard
          </a>
        </li>
        <li className="nav__link">
          <a rel="noopener noreferrer" className="active">
            <i className="ri-bar-chart-box-fill"></i>Upload
          </a>
        </li>
        <li className="nav__link">
          <a rel="noopener noreferrer">
            <i className="ri-dashboard-fill"></i>Invoice
          </a>
        </li>
        <li className="nav__link">
          <a rel="noopener noreferrer">
            <i className="ri-file-list-3-fill"></i>Schedules
          </a>
        </li>
        <li className="nav__link">
          <a rel="noopener noreferrer">
            <i className="ri-calendar-todo-fill"></i>Calendar
          </a>
        </li>
        <li className="nav__link">
          <a rel="noopener noreferrer">
            <i className="ri-notification-3-fill"></i>Notification
          </a>
        </li>
        <li className="nav__link">
          <a rel="noopener noreferrer">
            <i className="ri-settings-4-fill"></i>Settings
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
