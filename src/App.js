import "./styles.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loginApiActions, userApiActions } from "./actions/actions";
import React from "react";
import UserDashboard from "./container/userDashboard";
function App(props) {
  React.useEffect(() => {
    props.fetchUserDetails();
  }, []);
  return (
    <div className="App">
      <UserDashboard />
    </div>
  );
}

const mapDispatch = (dispatch) =>
  bindActionCreators(
    {
      fetchRequest: loginApiActions.fetchRequest,
      fetchUserDetails: userApiActions.fetchRequest
    },
    dispatch
  );
export default connect(null, mapDispatch)(App);
