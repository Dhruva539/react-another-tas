import React from "react";

const header = () => {
  return (
    <div className="header-container">
      <div style={{ display: "flex" }}>
        <h3 className="header-title">{"Kabo"}</h3>
        <nav className="header-navigation">
          <button className="btn btn-medium btn-secondary" active>
            {"Dashboard"}
          </button>
          <button className="btn btn-medium btn-secondary">{"Store"}</button>
          <button className="btn btn-medium btn-secondary">{"Orders"}</button>
          <button className="btn btn-medium btn-secondary">{"Account"}</button>
          <button className="btn btn-borderless adddog">
            <i
              className="fa fa-plus"
              style={{
                fontSize: "8px",
                borderRadius: "50%",
                background: "rgb(17, 87, 64)",
                color: "white",
                height: "8px",
                width: "8px",
                padding: "4px"
              }}
            ></i>
            <span>{"Add another dog"}</span>
          </button>
        </nav>
      </div>
      <div className="right-header">
        <button className="btn-borderless">
          <i className="fa fa-bell" style={{ width: "40px" }}></i>
        </button>
        <button className="btn-borderless">
          <i className="fa fa-cart-plus" style={{ width: "40px" }}></i>
        </button>
        <button className="btn-borderless">{"Logout"}</button>
      </div>
    </div>
  );
};

export default header;
