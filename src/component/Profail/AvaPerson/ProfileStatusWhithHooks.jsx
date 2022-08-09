import React , { useEffect, useState }  from 'react'


const ProfileStatusWhithHooks = (props)=>{

  // let stateWhithSetState = useState(false)   // useState([false, f]) массив из двух значений 
  // let editMode = stateWhithSetState[0]      //editMode = false  потому что мы определили что useState(false)
  // let setEditNode = stateWhithSetState[1]    // второй элемент это функция с помощью которой устанавливаем, функция находится на стороне React
 
 
 
  let [editMode, setEditMode] = useState(false)    // деструктиризация. мы обозначили что editMode=false , setEditMode = f
  let [status, setStatus] = useState(props.status) 
  const activateEditMode = () => {
    setEditMode(true)
  }
  const deActivateEditMode = () => {
    setEditMode(false)
    props.UPDATEstatus(status)

  }
  const onStatusChange = (e) => {
    status = e.currentTarget.value
    setStatus(status)
  }


  useEffect(()=>{
    setStatus(props.status)
  },[props.status])

 
 return(
    <div>
        { !editMode &&
        <div>
            <span onClick={activateEditMode} >{props.status || 'No status'}</span>
        </div> }
       
        {editMode &&
        <div>
             <input onChange={onStatusChange} 
                 onMouseMove={deActivateEditMode}
                       value={status} />
        </div>
        }
   
    </div>   
)
} 

export default ProfileStatusWhithHooks