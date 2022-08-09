import Dialogs from './Dialogs';
import { addMessengeActionCreator} from '../../redux/messegeReduce';
import { connect } from 'react-redux';
import React from 'react';
import { withAuthRedirect } from '../../hok/authRedirect';




class DialogsContainer extends React.Component{
    componentDidMount(){}
    render(){
         return  <Dialogs {...this.props}/>
    }
    }





let mapStateToProps = (state) =>{
    return { messegeUzer: state.messegePage.messegeUzer,
             messegeData: state.messegePage.messegeData,
             newMessegeBody: state.messegePage.newMessegeBody,
             isAuth: state.auth.isAuth

    }
}
let mapDispathToProps = (dispatch) => {
    return {
        addMes: (text)=> dispatch(addMessengeActionCreator(text)),
    }
}

export default connect(mapStateToProps, mapDispathToProps)

 ( withAuthRedirect(DialogsContainer) )

