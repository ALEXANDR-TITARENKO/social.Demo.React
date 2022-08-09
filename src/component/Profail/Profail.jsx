import prof from'./Profail.module.css'
import AvaPerson from './AvaPerson/AvaPerson'
import MyPostContainer from './MyPost/MyPostContainer'



const Profail = (props) => {
    return(
    <div className={prof.profile}>


        <AvaPerson saveFoto={props.saveFoto}
                    isOwner={props.isOwner}
                     status={props.status} 
                    profail={props.profail} 
               UPDATEstatus={props.UPDATEstatus}
               addSocialSet={props.addSocialSet}
                       /> 
       
        
        <MyPostContainer/>
     
     </div>
   
   
    )
}


export default Profail;




