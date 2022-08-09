import { authMe } from "./authReduce.tsx"
const SET_INITIALIZET = 'SET-INITIALIZET'


export type InitialStateType = {
    initializet: boolean
}

let initialState: InitialStateType ={
    initializet: false
    }

const appReduce = (state = initialState, action:any) => {
    switch(action.type){
     
        case SET_INITIALIZET:  
            return{ ...state,
                 initializet: true ,   
        }  
        default: return state
    
}
}

export type initializetUzerActionType = {
    type: typeof SET_INITIALIZET
}
export const initializetUzer  = ():initializetUzerActionType => ({type: SET_INITIALIZET})

export const initializetApp = () => (dispatch:any) =>{
    let promise = dispatch(authMe())
Promise.all([promise])
       .then(()=>{
            dispatch(initializetUzer())
       }
       )
  


}




export default appReduce;