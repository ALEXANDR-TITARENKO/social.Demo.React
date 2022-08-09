import Preolader from '../../common/Preloader/Preloader'
import prof from'./AvaPerson.module.css'
import uzerFoto from './../../../images/uzer/uzer.png'
import ProfileStatusWhithHooks from './ProfileStatusWhithHooks'
import { useState } from 'react'
import ProfileSaveSocial from './ProfileDataForm'

const AvaPerson = (props) => {
let [editMode, setEditMode] = useState(false)

   const activateEditMode = () =>{
       setEditMode(true)
}
   const deactivateEditMode= () =>{
      setEditMode(false)
}

if(!props.profail){
  return <Preolader/>
}  
 const addUzerFoto = (e) =>{  
    props.saveFoto(e.target.files[0])
 }
 
    return(
      
   <div className={prof.ramka}>
               <div className={prof.ava}>   
                    <img className={!props.profail.photos.large ? prof.imgUzer : props.profail.photos.large} src={!props.profail.photos.large ? uzerFoto : props.profail.photos.large } alt=""/>
                        { props.isOwner === ':uzerId' && <input type = {"file"} onChange = {addUzerFoto}/> }
            
               </div>     
           
               <div className={prof.cont}>
                     <div className={prof.nameUzer}> {props.profail.fullName}</div>
                
                     <div className={prof.uzerStatus}>
                                         <ProfileStatusWhithHooks status={props.status}
                                                                 profail={props.profail}
                                                            UPDATEstatus={props.UPDATEstatus}/>
                     </div>
               </div>
               {editMode  ? <ProfileSaveSocial  profail={props.profail}
                                                addSocialSet={props.addSocialSet}
                                                deactivateEditMode={deactivateEditMode}/>
                          :<ProfileData profail={props.profail} isOwner={props.isOwner} activateEditMode={activateEditMode}/> 
               } 
               
    </div> 
    )
}


export default AvaPerson;

const Contact = (props) => {
   return (
        <div className={prof.profilName}>{props.contactTitle} : <span className={prof.infUzer}>{props.contactValue || '------'}</span></div>
   )
}
const ProfileData = (props) => {
   
   return(
      <div className={prof.ava}>
             {props.isOwner && <div><button onClick={props.activateEditMode}>Редактировать</button></div>}
          <div className={prof.container}>
                           <div className={prof.inform}>
                                 <div className={prof.profilName}>В поисках:</div>
                                 <div className={prof.profilName}>Работа:</div>
                           </div>
                      
                           <div className={prof.inform}>
                                <div className={prof.infUzer}>{props.profail.lookingForAJob ? 'ДА' : 'НЕТ'}</div>
                                <div className={prof.infUzer}>{props.profail.lookingForAJobDescription}</div>
                           </div>
                           <div className={prof.inform}>
                           {Object.keys(props.profail.contacts)
                          .map((key) =>{
                            return <Contact     key={key} 
                                       contactTitle={key}
                                       contactValue={props.profail.contacts[key]}/>

                  })} 
                           </div>
               </div>
               

      </div>
   )

   
}

