import preloader from '../../../images/uzer/Fidget-spinner.gif'
import React from 'react'
import pre from './preloader.module.css'


const Preolader = (props) => {
    return(
        <div className={pre.logo}>
        <img src={preloader} alt="" />
       </div>
       
    )
}
   



export default Preolader