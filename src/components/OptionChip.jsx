import "../pages/Dashboard.css";

const OptionChip = ({ option }) => {
  return <div className="chip">{option.toUpperCase()}</div>;
};

export default OptionChip;
