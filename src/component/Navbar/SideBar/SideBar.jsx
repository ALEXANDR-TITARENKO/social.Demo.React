import s from './SideBar.module.css'

const SideBar = (props) => {
    return(
        <div >
          <img className={s.icon} src={props.img}></img>
        </div>
    )
}



export default SideBar;