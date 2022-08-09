import {withAuthRedirect} from '../../hok/authRedirect.js'
import { connect } from 'react-redux'
import Contact from './Contact.jsx'
import React from 'react'


class ContactContainer extends React.Component {
    componentDidMount(){

    }
    render(){
       return <Contact {...this.props}/>
    }
}

let mapStateToProps = (state) => {
return  {isAuth: state.auth.isAuth}

}
let mapDispathToProps = (dispath) => {

}

export default connect(mapStateToProps, mapDispathToProps)( withAuthRedirect(ContactContainer))