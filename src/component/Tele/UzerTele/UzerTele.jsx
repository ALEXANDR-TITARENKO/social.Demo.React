import u from "./UzerTele.module.css"

const UzerTele = (props) => {
    return(
        <div className={u.numbr}>
            <img src={props.img} alt=""  />
            <h1>{props.name}</h1>
            <p> {props.number}</p>  
        </div>
    )
}

export default UzerTele;