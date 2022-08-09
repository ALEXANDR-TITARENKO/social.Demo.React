import Headers from "./Headers";
import React from "react";
import { connect } from "react-redux";
import { authMe, logOut, setUzerData } from "./../../redux/authReduce.tsx";

class HeaderContainer extends React.Component {
  render() {
    return <Headers {...this.props} />;
  }
}

let mapStateProps = (state) => {
  return {
    id: state.auth.id,
    email: state.auth.email,
    login: state.auth.login,
    isAuth: state.auth.isAuth,
    uzersPage: state.uzersPage.uzers,
  };
};

export default connect(mapStateProps, { setUzerData, authMe, logOut })(
  HeaderContainer
);
