import { connect } from "react-redux";
import Tele from "./Tele";

let mapStateProps = (state) => {
    return {
        dialogData: state.profailPege.dialogData
    }
} 



const TeleContainer = connect(mapStateProps)(Tele)

export default TeleContainer