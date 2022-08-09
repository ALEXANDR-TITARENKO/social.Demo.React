import m  from './Navbar.module.css';
import SideBar from './SideBar/SideBar.jsx';
import Navig from './Navig/Navig';


const Navbar = (props) => { 
    let sid = props.friend.map((uzer)=><SideBar key={uzer.id} img={uzer.img} name={uzer.name} />
    )
    return ( 
    <div>
         <nav className={m.nav}> 
              <Navig/>

             <div className={m.vseti} > <h2>В сети</h2> </div>

             <div className={m.sidBar}> {sid} </div>
         </nav>
    </div>

    )}

export default Navbar;