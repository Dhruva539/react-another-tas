import React from "react";
import Header from "../components/header";
import Dashboard from "../components/dashboard";
import Footer from "../components/footer";

const userDashboard = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Dashboard />
      </div>
      <div className="footer__position">
        <Footer />
      </div>
    </div>
  );
};

export default userDashboard;
