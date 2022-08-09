import React from 'react'
import d from './Messeges.module.css'


const Messeges =(props)=>{
    return(
       <div className={d.messege}>
            {props.messeg}
       </div>
         
    )
 }
 
 export default Messeges;