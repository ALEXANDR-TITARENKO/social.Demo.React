import p from'./MyPost.module.css'
import Post  from './Post/Post';
import React from 'react';
import { reduxForm } from 'redux-form';
import { Field  } from 'redux-form'
import { required, maxLengthCreator } from '../../../Utils/Validators/Validators';
import { Textarea } from '../../common/FormControl/FormControls';


const MyPost = (props) => {



    let postDa =  props.post.map((p)=><Post post={p.post} like={p.likeCount} id={p.id} img={p.img} key={p.id}/>
    )
   
    let addPosta = (value) => {
        props.addPostNew(value.post)

    }
 

    return(
         <div>
             <div className={p.dialog}>
                <AddMesFormRedux  onSubmit={addPosta}/>
             </div>
             <div className={p.posts}>
              {postDa}
             </div>
        </div>
   

    )
}


export default MyPost;

const maxLengt = maxLengthCreator(10)

const addPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>

                 <Field component={Textarea}  
                             name='post'  
                      placeholder='Напиши обо мне'
                         id="" cols="85" rows="5"
                         validate={[required, maxLengt]} />
                <button className={p.btn}>Добавить пост</button>
                <button  className={p.btnClose}>удалить</button>
        </form>

    )
}

const AddMesFormRedux = reduxForm({form: 'post'})(addPostForm)