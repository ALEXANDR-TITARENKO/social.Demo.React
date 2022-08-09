

import React from 'react'
import { Field ,reduxForm } from 'redux-form'
import { Input } from '../common/FormControl/FormControls'
import { required } from '../../Utils/Validators/Validators'
import { login,logOut} from '../../redux/authReduce.tsx'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import s from './Login.module.css'





const LoginForm = (props) => { 
return (
  <form className={s.form}  onSubmit={props.handleSubmit}>
        <div>
            <label>Ваше имя</label>
         
           <Field   
                     name={"email"} 
                component={Input} 
                     type={"text"} 
              placeholder={"Логин"} 
                 validate={required}/>
       
        </div>
        
        <div>
            <label>Фамилия</label>
            <Field 
                     name={"password"} 
                component={Input} 
                     type={"password"} 
              placeholder={"Пароль"}
                 validate={required}/>
        </div>
   
        <div>
            <label>Запомнить меня</label>
               <Field 
                      name={"rememberMe"} 
                 component={'input'} 
                      type={"checkbox"} />
        </div>

{/*     
    <div>
       <label>Уровень программирования</label>
          <div>
            
             <label>
                <Field
                      name={"skill"} 
                 component={"input"} 
                      type={"radio"}
                     value={"junior"}/>
                Junior
             </label>
           
             <label> 
                 <Field 
                          name={"skill"}
                     component={"input"} 
                          type={"radio"}
                         value={"midll"}/>
                 Midlle
             </label>
             
             <label>
                 <Field 
                        name={"skill"}
                   component={"input"} 
                        type={"radio"}
                       value={"senior"}/>
                 Senior
             </label>
          </div>
    </div> */}

    <div>
        <button >Регистрация</button>
    <div>{props.error}
</div>
         {/* <button type="submit" disabled={submitting || pristine}>
          Регистрация
         </button>
        
         <button type="button" onClick={form.reset} disabled={submitting || pristine}>
         Отменить
         </button> */}
    </div>
</form>


)}

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm)






const Login = (props) => {
  
  const onSubmit = (formData) =>{
       
    props.login(formData.email , formData.password, formData.rememberMe) 
    
  }

  if(props.isAuth){
  return <Navigate to='/profail/:uzerId'/>}
  
  return  <div className={s.container}>
              
               <div className={s.register}>
                    <h1 >Регистрация</h1>
               </div>
               
               <div className={s.formContainer}>
                    <LoginReduxForm onSubmit={onSubmit}/>
               </div>

          </div>
  
}


const mapStateToProps = (state) =>( {
     isAuth : state.auth.isAuth,
})
export default connect(mapStateToProps, {login,logOut})(Login)















