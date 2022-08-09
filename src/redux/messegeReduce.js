
const ADD_MESSENGE ='ADD-MESSENGE'

let initialState = {
    messegeData:[
                 {id:'1', messeg:"Hi"},
                 {id:'2', messeg:"Pirveeet"},
                 {id:'3', messeg:"Yoooou"},
                 {id:'4', messeg:"Kavabandaaa"},
                 {id:'5', messeg:"Go go go gooood"},
                 {id:'6', messeg:"Yo yo yo yooo!!!!"},
                 {id:'7', messeg:"Heloooшгршгршгршгршгршгo"},
               ],
   messegeUzer:[
        {id:'1', name:"Alex", img:"https://sun1-84.userapi.com/s/v1/if2/WfOYEm0PR2m5QEh4GgEeZO3OOU_YJt-3SglemoKeoljiwih2CAqgCpCbG93OkDyXawmhYEEKr4bp_nFlCyL10IMG.jpg?size=400x406&quality=96&crop=8,0,1063,1079&ava=1"},
        {id:'2',name:"Yulia",img:"https://sun1-26.userapi.com/s/v1/if1/UiC9SOHjV5jhwFBNMPBOdO_CgnNnmpZj4QU2Gvv0lXWFiD199zxe7ix9ogPpkV1W5FbqMiQG.jpg?size=400x400&quality=96&crop=0,0,622,622&ava=1"},
        {id:'3',name:"Nastya",img:"https://sun1-17.userapi.com/s/v1/if1/ZeCyQCiFZCmd4m7srtysN5ms78EpZjiOPaYenqqGqiFNB6KqMbzIQVlXC7bo9-tR3SuVLA.jpg?size=400x400&quality=96&crop=444,0,1707,1707&ava=1"},
        {id:'4',name:"Anar",img:"https://sun1-27.userapi.com/s/v1/if1/ncdX7R9jwovmZtrd8HQnLf58PsyMJ_wFcwfaKN4ei4LScZKqA63KSPwROvI6IUu7rfN6gw.jpg?size=400x400&quality=96&crop=0,0,720,720&ava=1"},
        {id:'5',name:"Miha",img:"https://sun9-49.userapi.com/impf/c624820/v624820068/11416/O2OPZMIuMO8.jpg?size=453x452&quality=96&sign=e7d9d4a57c900d1f2a9959af1206aa4a&type=album"},
    ],
         } 


const messegeReducer = (state = initialState,action) => {     // в state приходит messegePage, тоесть state = messegePage

switch(action.type){
    case ADD_MESSENGE:{
           
         let mesNew = state.text
            return {
              ...state,     //скопирован новый state и возвращен
              messegeData: [...state.messegeData,{id:1, messeg: mesNew}],  //оператор спред [...{добавили}] тоже самое что и push()
            } 
    }
  
    default:
    return state
}
}

export const addMessengeActionCreator=(text) => ({type:ADD_MESSENGE, text })



export default messegeReducer;