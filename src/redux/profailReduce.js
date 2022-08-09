import { setUzersTotalCount } from "./uzerReduce"
import { profileAPI } from "../api/api"

const ADD_POST = 'ADD-POST'
const UPDATA_POST = 'UPDATA-POST'
const REMOVE_POST = 'REMOVE-POST'
const SET_UZERS_PROFILE = "SET-UZERS-PROFILE"
const GET_UZER_STATUS = 'GET-UZER-STATUS'
const GET_UZER_FOTO = 'GET-UZER-FOTO'
const GET_SOCIAL_SET = ' GET-UZER-FOTO'


let initialState = {
        post :[
               { post: "Hell0", likeCount: 100, id: 1, img: "https://sun1-84.userapi.com/s/v1/if2/WfOYEm0PR2m5QEh4GgEeZO3OOU_YJt-3SglemoKeoljiwih2CAqgCpCbG93OkDyXawmhYEEKr4bp_nFlCyL10IMG.jpg?size=400x406&quality=96&crop=8,0,1063,1079&ava=1" },
               { post: 'Hello asd', likeCount: 20, id: 2, img: "https://sun1-26.userapi.com/s/v1/if1/UiC9SOHjV5jhwFBNMPBOdO_CgnNnmpZj4QU2Gvv0lXWFiD199zxe7ix9ogPpkV1W5FbqMiQG.jpg?size=400x400&quality=96&crop=0,0,622,622&ava=1" },
               { post: 'Yoooo', likeCount:35, id: 3, img: "https://sun1-17.userapi.com/s/v1/if1/ZeCyQCiFZCmd4m7srtysN5ms78EpZjiOPaYenqqGqiFNB6KqMbzIQVlXC7bo9-tR3SuVLA.jpg?size=400x400&quality=96&crop=444,0,1707,1707&ava=1" },
               { post: 'Osda', likeCount: 200, id: 4, img: "https://sun9-44.userapi.com/impf/vzFEzJS11Hg0zA13W-ElWWoAYZFtAFbvUGazuQ/F6XsTYjvKDs.jpg?size=960x960&quality=96&sign=c611b41a282e8020cb6bd840fa810a07&type=album" },
               { post: 'Hello', likeCount: 333, id: 5, img: "https://sun9-10.userapi.com/impg/nNYVkre_2TFJhnSrNhuBStRgxcuXUKXvsw3ARg/KEYsZxuVzJY.jpg?size=1920x1920&quality=96&sign=f2177d3ca09a895d0c3b811b52161f19&type=album" },
              ],
     dialogData:[
                {id:'1', number:89328476343, name:"", img:"https://sun1-84.userapi.com/s/v1/if2/WfOYEm0PR2m5QEh4GgEeZO3OOU_YJt-3SglemoKeoljiwih2CAqgCpCbG93OkDyXawmhYEEKr4bp_nFlCyL10IMG.jpg?size=400x406&quality=96&crop=8,0,1063,1079&ava=1"},
                {id:'2',number:89096006499, name:"Yulia",img:"https://sun1-26.userapi.com/s/v1/if1/UiC9SOHjV5jhwFBNMPBOdO_CgnNnmpZj4QU2Gvv0lXWFiD199zxe7ix9ogPpkV1W5FbqMiQG.jpg?size=400x400&quality=96&crop=0,0,622,622&ava=1"},
                {id:'3', number:252525, name:"Nastya",img:"https://sun1-17.userapi.com/s/v1/if1/ZeCyQCiFZCmd4m7srtysN5ms78EpZjiOPaYenqqGqiFNB6KqMbzIQVlXC7bo9-tR3SuVLA.jpg?size=400x400&quality=96&crop=444,0,1707,1707&ava=1"},
                {id:'4',number:708923, name:"Misha",img:"https://sun9-44.userapi.com/impf/vzFEzJS11Hg0zA13W-ElWWoAYZFtAFbvUGazuQ/F6XsTYjvKDs.jpg?size=960x960&quality=96&sign=c611b41a282e8020cb6bd840fa810a07&type=album"},
                {id:'5',number:8909328342, name:"NAil",img:"https://sun9-10.userapi.com/impg/nNYVkre_2TFJhnSrNhuBStRgxcuXUKXvsw3ARg/KEYsZxuVzJY.jpg?size=1920x1920&quality=96&sign=f2177d3ca09a895d0c3b811b52161f19&type=album"},
                {id:'6',number:89501898876, name:"Anar",img:"https://sun1-27.userapi.com/s/v1/if1/ncdX7R9jwovmZtrd8HQnLf58PsyMJ_wFcwfaKN4ei4LScZKqA63KSPwROvI6IUu7rfN6gw.jpg?size=400x400&quality=96&crop=0,0,720,720&ava=1"},
                {id:'7', number:89328476343, name:"Miha",img:"https://sun9-49.userapi.com/impf/c624820/v624820068/11416/O2OPZMIuMO8.jpg?size=453x452&quality=96&sign=e7d9d4a57c900d1f2a9959af1206aa4a&type=album"},
               ],
   newPostText: 'It.kamasutra'  ,
   profail: null,
   status: '',
   foto: '' ,
}


const profailReducer = (state = initialState, action) => {   //в state приходит profilePege, тоесть state = profilePege
     
     switch(action.type){
       
        case ADD_POST : {
                         let postNew = {
                    id:2,
                    post: action.newText,
                    likeCount:0
                    }
                     return{                           //  return stateCopy
                        ...state,                      //  let stateCopy = {...state};
                        post: [...state.post,postNew], //  stateCopy.post = [...state.post] //  stateCopy.post.push(postNew);
                        newPostText: ''                //  stateCopy.newPostText = '';
                     }                 
                                                             
                        
                       
        }
        case UPDATA_POST:{
                        return {...state, newPostText: action.textNew}; 
        }           
        case REMOVE_POST: {
                        let stateCopy = {...state}; 
                        stateCopy.post.pop()
                        return stateCopy
        }  
        case SET_UZERS_PROFILE: {
                         return { ...state, profail: action.profail }
        }   
        case GET_UZER_STATUS:{
         return {
              ...state,
              status: action.status
         }
        }
        case GET_UZER_FOTO: {
         return {...state, profail: {...state.profail, photos: action.photos}}
        }
        case  GET_SOCIAL_SET: {
         return {...state, 
                       profail :{...state.profail, contacts: action.key}}
        }
   
                        
        default: 
                return state
   }
}

export const addPostNew = (text) => ({type:ADD_POST, newText:text})
export const updataPost = (text) => ({type: UPDATA_POST, textNew: text })
export const removePost = () => ({type:REMOVE_POST})
export const setUzersProfile = (profail) => ({type: SET_UZERS_PROFILE, profail})
export const getUzerStatus = (status) => ({type: GET_UZER_STATUS, status })
export const getUzerFoto = (foto) => ({type: GET_UZER_FOTO, foto})
export const getSocial = (key) => ({type: GET_SOCIAL_SET, key})


export const addSocialSet = (key) => {
 
   
   return (dispatch,getState) => {   
   const getUzerID = getState().auth.id
      profileAPI.addSocial(key).then(response=>{
         if(response.data.resultCode === 0){
            dispatch(getSocial(response.data.data))
            dispatch(setUzer(getUzerID))
         }   
      })
   }
}

export const setUzer = (uzerId) => { 
   return (dispatch) => {
      profileAPI.uzerID(uzerId).then(response=>{                  
         dispatch(setUzersProfile(response.data))
         dispatch(setUzersTotalCount(response.data.totalCount))

   })
}}


export const GETstatus = (uzerId) => {
   return (dispatch) => {
      profileAPI.getStatus(uzerId)
                .then(response =>{ 
                   dispatch(getUzerStatus(response.data))
                   
                } )
   }
}

export const UPDATEstatus = (status) =>{
   return (dispatch) => {
      profileAPI.updateStatus(status)
                .then(response => {
                   if(response.data.resultCode === 0) {
                     dispatch(getUzerStatus(status))
                   }
                }) 
   }
}

export const saveFoto = (foto) => async (dispatch,getState) => { 
   const getUzerID = getState().auth.id
   let response = await profileAPI.saveFoto(foto)
      if(response.data.resultCode === 0){
         dispatch(getUzerFoto(response.data.photos))
         dispatch(setUzer(getUzerID))
      }
   }

export default profailReducer 