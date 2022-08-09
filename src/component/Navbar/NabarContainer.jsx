import Navbar from "./Navbar";
import { connect } from "react-redux";

// const NavbarContainer = (props) => {

//     return (

//   <StoreContext.Consumer>{(store)=>
//     <Navbar friend={store.getState().sidebar.friend}/>
// }
//   </StoreContext.Consumer>

//     )}

// export default NavbarContainer;

let mapToStateProps = (state) => {
  return {
    friend: state.sidebar.friend,
  };
};
const NavbarContainer = connect(mapToStateProps)(Navbar);

export default NavbarContainer;
