import d from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Messeges from './Messeges/Messeges';
import React from 'react';
import { Field,reduxForm } from 'redux-form';
import { Textarea } from '../common/FormControl/FormControls';
import { maxLengthCreator,required } from '../../Utils/Validators/Validators';



const Dialogs = (props) =>{
     
    let dialogElement = props.messegeUzer.map(uzer=><DialogItem key={uzer.id} name={uzer.name} id={uzer.id} img={uzer.img}/>)
    let messeg = props.messegeData.map((el)=><Messeges key={el.id}  messeg={el.messeg} id={el.id} />)
 

     

    let addMessege = (value) =>{
        props.addMes(value.messeg)
    }
            
    return(
        <div className={d.dialogs}>
    
            <div className={d.dialogsItem}>
               {dialogElement} 
            </div>
               
            <div className={d.messeges}>
              {messeg}
                
           </div>
           <div className={d.addMes}>
                  <AddMesFormRedux onSubmit={addMessege}/> 
           </div>
            
         </div>
    ) 
}




  export default Dialogs;

const maxMess = maxLengthCreator(100)

  const addMesForm = (props) => {
    return( 
        <form onSubmit={props.handleSubmit}>
             <div>
                <Field component={Textarea} 
                            name='messeg' 
                     placeholder='Напишите сообщение'
                        validate={[required,maxMess]}/>
                 <button>Отправить</button>
            </div>   
        </form>
    )
}

const AddMesFormRedux = reduxForm({form: 'addMess'})(addMesForm)
