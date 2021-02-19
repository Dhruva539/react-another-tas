import React from "react";

const dropDownPanel = ({ children, label }) => {
  const [isOpen, setOpen] = React.useState(false);
  const toggle = () => {
    setOpen(!isOpen);
  };
  return (
    <>
      <div className={"dropdownbtn"} onClick={toggle}>
        <label>{label}</label>
        <i className={`fa ${isOpen ? "fa-angle-up" : "fa-angle-down"}`}></i>
        {isOpen && { children }}
      </div>
    </>
  );
};

export default dropDownPanel;
