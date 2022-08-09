
import React from 'react'
import { Field ,reduxForm } from 'redux-form'
import { Input } from '../../common/FormControl/FormControls'
// import { required } from '../../Utils/Validators/Validators'

const ProfileDataForm = (props) => {
   
return (
  <form onSubmit={props.handleSubmit}  >
 
        <div>{Object.keys(props.initialValues.contacts)
                    .map((key) =>{ 
                        return ( <div><label>{key}</label>
                                    <Field   
                                        name={'contacts.'+ key} 
                                   component={Input} 
                                        type={"text"} 
                                 placeholder={props.initialValues.contacts[key]}/></div>)  })} 
        </div>
        
        
        <label>В поисках</label>
        <Field     name='lookingForAJob' 
              component={Input} 
                   type={"checkbox"} 
            placeholder='В поисках?' />
          
        <label>Кем работаешь</label>
        <Field     name='lookingForAJobDescription' 
              component={Input} 
                   type={"text"} 
            placeholder='место работы'/>
        
        <label>Мое имя</label>
        <Field     name='fullName' 
              component={Input} 
                   type={"text"} 
            placeholder={props.initialValues.fullName}/>

        <Field     name='AboutMe' 
              component={Input} 
                   type={"text"} 
            placeholder='Обо мне'/>
   
        <div>
           <button>Сохранить</button>
        </div>
</form>
)}

const ProfileForm = reduxForm({
  form: 'skill'
})(ProfileDataForm)

const ProfileSaveSocial = (props) => {
   
   const onSubmit = (key) => {
       props.addSocialSet(key)
       props.deactivateEditMode(false)

   }

return ( <div>
      <h1>Ведите данные</h1>
      <ProfileForm onSubmit={onSubmit}  initialValues={props.profail}/>
      </div>
  )
}
 



export default ProfileSaveSocial




