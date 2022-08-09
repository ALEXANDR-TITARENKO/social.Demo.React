
import { connect } from 'react-redux'
import React from 'react'
import Profail from './Profail'
import { useLocation,useNavigate,useParams } from 'react-router-dom';
import { setUzer,GETstatus,UPDATEstatus,saveFoto,addSocialSet} from './../../redux/profailReduce.js'
import {withAuthRedirect} from '../../hok/authRedirect'

class ProfailContainer extends React.Component{
  
    refreshProfile(){
        let uzerId = this.props.router.params.uzerId
        
        if(uzerId === ':uzerId'){
            uzerId = this.props.Id
        } if(!uzerId){
            this.props.router.location.pathname = '/proloader'
        }
        this.props.setUzer(uzerId) 
        this.props.GETstatus(uzerId)  
     }
    componentDidMount(){  
        this.refreshProfile()
    }


    componentDidUpdate(prevProps,prevState){
        if(this.props.router.params.uzerId !== prevProps.router.params.uzerId){
            this.refreshProfile()  
        }
    }

    render(){
            return  <Profail       {...this.props} 
                             saveFoto={this.props.saveFoto}
                              isOwner={this.props.router.params.uzerId}
                               status={this.props.status} 
                              profail={this.props.profail}
                         UPDATEstatus={this.props.UPDATEstatus}
                                 />        
    } 
}




let mapStateProps = (state) => {
    return {
        profail: state.profailPege.profail,
         isAuth: state.auth.isAuth,
         status: state.profailPege.status,
         Id: state.auth.id

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


export default  connect(mapStateProps,{setUzer,GETstatus,UPDATEstatus,saveFoto,addSocialSet})
(withAuthRedirect(withRouter(ProfailContainer)));
 