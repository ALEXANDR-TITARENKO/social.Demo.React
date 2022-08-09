import m from './Navig.module.css'
import { NavLink } from 'react-router-dom';


const Navig = ()=> {
    return(
        <div>
<div className={m.item}><NavLink className = { navData => navData.isActive ? m.active : m.a } to="/profail/:uzerId">Профиль</NavLink></div>
<div className={m.item}><NavLink className = { navData => navData.isActive ? m.active : m.a}  to="/uzers" >Друзья</NavLink> </div>
<div className={m.item}><NavLink className = { navData => navData.isActive ? m.active : m.a } to="/dialogs">Сообщения</NavLink></div>
<div className={m.item}><NavLink className = { navData => navData.isActive ? m.active : m.a } to="/contact">Контакты</NavLink></div>
<div className={m.item}><NavLink className = { navData => navData.isActive ? m.active : m.a } to="/tele">Телефон</NavLink></div>

        </div>
    )
}


export default Navig