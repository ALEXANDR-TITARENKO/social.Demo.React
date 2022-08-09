import t from "./Tele.module.css"
import UzerTele from "./UzerTele/UzerTele"




const Tele = (props)=> {
 
    let contakt = props.dialogData.map((uzer)=> <UzerTele name={uzer.name} number={uzer.number} img={uzer.img}  /> )

  return  (
<div className={t.tele}>
{contakt}
</div>
    )
}


export default Tele;