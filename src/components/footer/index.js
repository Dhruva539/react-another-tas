import React from "react";
import SubFooter from "./subFooter";

const footer = () => {
  return (
    <>
      <div className="main-footer-container">
        <div className="footer-info-box">
          <h3>{"About"}</h3>
          <ul>
            <li>
              <a href="">{"Transaction Guide"}</a>
            </li>
            <li>
              <a href="">{"Our Blog"}</a>
            </li>
            <li>
              <a href="">{"About Our Food"}</a>
            </li>
            <li>
              <a href="">{"Press"}</a>
            </li>
          </ul>
        </div>
        <div className="footer-info-box">
          <h3></h3>
          <label style={{ paddingTop: "18px" }}>{"Login"}</label>
          <label>{"Read verified reviews on TrustPilot"}</label>
          <label>{"+1 (844)543-5226"}</label>
          <div className="payment_icons">
            <i class="fa fa-cc-amex"></i>
            <i class="fa fa-cc-mastercard"></i>
            <i class="fa fa-cc-paypal"></i>
            <i class="fa fa-cc-visa"></i>
          </div>
        </div>
        <div className="footer-info-box">
          <h3>{"Questions ?"}</h3>
          <label>{"Email us anytime,at help@kabo.co."}</label>
          <label>{"We will respond within 12 hours."}</label>
        </div>
        <div className="footer-info-box">
          <h3>{"Join our Mailing List"}</h3>
          <label>
            {"Get Kabo promotions and healthy"}
            <br></br>
            {"feeding advice for your dog!"}{" "}
          </label>
          <div style={{ margin: "20px 0" }}>
            <input type="text" className="input input-skin" />
            <button className=" btn-medium btn-primary">{"Submit"}</button>
          </div>
        </div>
      </div>
      <SubFooter />
    </>
  );
};

export default footer;
