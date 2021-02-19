import React from "react";

const subFooter = () => {
  return (
    <div className="sub-footer-container">
      <nav className="sub-footer-nav">
        <ul>
          <li>
            <a href="#" className="fa fa-facebook" />
          </li>
          <li>
            <a href="#" className="fa fa-instagram" />
          </li>
          <li></li>
        </ul>
      </nav>
      <nav className="sub-footer-nav">
        <ul>
          <li>
            <a href="#">{"Terms of Use"}</a>
          </li>
          <li>
            <a href="#">{"Refund Policy"}</a>
          </li>
          <li>
            <a href="#">{"Privacy Policy"}</a>
          </li>
          <li>
            <a href="#">{"2021 Kabo Labs"}</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default subFooter;
