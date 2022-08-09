import d from "./DialogItem.module.css";
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {

  
return (
              <div className={d.dialog +' '+ d.active}>
                     <img src={props.img} alt="" />
                     <NavLink to={ "/dialogs/" + props.id}>{props.name}</NavLink>  
              </div>
    )
 }

 export default DialogItem ;




 