import "./Dashboard.css";
import SideBar from "../components/SideBar";
import DashHeader from "../components/DashHeader";
import UploadFile from "../components/UploadFile";

const Dashboard = () => {
  return (
    <div className="dashb__container">
      <SideBar />
      <div className="main__dashboard__container">
        <DashHeader />
        <UploadFile />
      </div>
    </div>
  );
};

export default Dashboard;
