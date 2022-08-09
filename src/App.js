import './App.css';


import HeaderContainer from './component/Header/HeaderContainer.jsx';
import DialogsContainer from './component/Dialogs/DialogsContainer';
import { Route, Routes} from 'react-router-dom';
import NavbarContainer from './component/Navbar/NabarContainer';
import TeleContainer from './component/Tele/TeleContainer';
import UzersContainer from './component/Uzers/UzersContainer';
import ProfailContainer from './component/Profail/ProfileContainer';
import Login from './/component/Login/Login.jsx'
import React,{Suspense,lazy} from 'react';
import { connect } from 'react-redux';
import { useLocation,useNavigate,useParams } from 'react-router-dom';
import { initializetApp } from './redux/AppReduce.tsx';
import Preolader from './component/common/Preloader/Preloader';
import ContactContainer from './component/Contact/ContactContainer';
// const ContactContainer = React.lazy(()=> import ('./component/Contact/ContactContainer') ) ;



class App extends React.Component { 
 
 
  componentDidMount(){
    this.props.initializetApp()
  }  

  render(){

    if(!this.props.initializet){
      return <Preolader/> 
    }
    return (
    <div className="app-wrapper">
           <HeaderContainer/>
           <NavbarContainer/>
              <div className="app-wrapper-content">
                  <Routes>
                 
                      {/* <Suspense fallback={<div>Loading...</div>}> */}
                      <Route path='/profail/:uzerId' element={ <ProfailContainer/>}/>
                      {/* </Suspense> */}

                      
                      <Route path='/dialogs/*' element={<DialogsContainer/>} /> 
                      <Route path='/contact/*' element={<ContactContainer/>} />
                      <Route path='/tele/*' element={<TeleContainer/>} />
                      <Route path='/uzers/*' element={<UzersContainer/>} />
                      <Route path='/login/*' element={<Login/>} />
                      <Route path='/proloader/*' element={<Preolader/>} />
                      


                  </Routes>
               </div>
    </div>
    )
  }
}




function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}
const mapStateProps = (state) => {
  return {
    initializet: state.app.initializet
  }
}

export default withRouter(connect(mapStateProps,{initializetApp})(App))
 ;

