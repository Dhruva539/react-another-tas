import React from "react";
import DropDownPanel from "../dropDownPanel";
const dashboard = () => {
  return (
    <>
      <div className="profile_container">
        <div className="profile_details">
          <div className="profile_pic">
            <img src="/images/puppy.png" alt="Profile_pic" />
          </div>
          <div className="profile-name">
            <h3>Blake's Dashboard</h3>
            <label>{"Tell us more about Blake"}</label>
          </div>
        </div>
      </div>
      <div>
        {/* <div>
          <DropDownPanel label={"Next Delivery"} />
        </div>
        <div>
          <DropDownPanel label={"Meal Plan"} />
        </div>
        <div>
          <DropDownPanel label={"Delivery Frequency"} />
        </div> */}
      </div>
    </>
  );
};

export default dashboard;
