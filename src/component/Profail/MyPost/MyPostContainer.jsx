import { connect } from 'react-redux';
import { addPostNew,updataPost,removePost } from '../../../redux/profailReduce';
import MyPost from './MyPost';


let mapStateProps = (state) => {
        return {
                post: state.profailPege.post,
                newPostText: state.profailPege.newPostText
        }
} 

// let mapDispathProps = (dispatch) => {
//         return {
//                 addPost : (text) => dispatch(addPostNewActionCreator(text)),
//                 updataPost : (text)=>dispatch(updataPostActionCreator(text)),
//                 removePost: () => dispatch(removePostActionCreator())           
//         }
// }

const MyPostContainer = connect(mapStateProps,{addPostNew,updataPost,removePost })(MyPost) 




export default MyPostContainer;