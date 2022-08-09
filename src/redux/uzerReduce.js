import {uzersAPI} from './/../api/api.js'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_UZERS = 'SET-UZERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT'
const TOGLE_IS_FETCHING = 'TOGLE-IS-FETCHING'
const FETCHING_FOLLOW_PROGRESS = 'FETCHING-FOLLOW-PROGRESS'


let initialState ={
    uzers:[],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: null,
    isFetching: false,
    followingProgress:[],
    }

const uzerReduce = (state = initialState, action) => {
    switch(action.type){
     
        case FOLLOW:
            return{
                ...state,
                uzers: state.uzers.map(u=>{
                    if(u.id === action.uzerID){
                        return {...u, followed: true}
                    }
                        return u
                })
            }
        case UNFOLLOW:
            return{
                ...state,
                uzers: state.uzers.map(u=>{
                    if(u.id === action.uzerID){
                        return {...u, followed: false}
                    }
                        return u
                
                })
            } 
        case SET_UZERS:{
            return{ ...state, uzers: action.uzers}
        }
        case SET_CURRENT_PAGE:{   
            
            return{ ...state, currentPage: action.page}
        }    
        case SET_TOTAL_COUNT:{
            return{...state, totalUsersCount: action.count }
        }
        case TOGLE_IS_FETCHING:{
            return {...state, isFetching: action.isFet}
        }
        case FETCHING_FOLLOW_PROGRESS:{
            return {...state,
                followingProgress: action.isFetching
                ?[ ...state.followingProgress = action.uzerID ]
                :[ state.followingProgress.filter(id => id !== action.uzerID)  ]
            }
        }        
        default: return state
    }
     
}

//ActionCreate

export const follow = (uzerID) => ({type: FOLLOW, uzerID })
export const unfollow = (uzerID) => ({type: UNFOLLOW,uzerID})
export const setUzers = (uzers) => ({type: SET_UZERS, uzers})
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page})
export const setUzersTotalCount = (count) => ({type: SET_TOTAL_COUNT, count})
export const togolFething = (isFet) => ({type: TOGLE_IS_FETCHING, isFet})
export const togolFollowProgress = (isFetching, uzerID) => ({type:FETCHING_FOLLOW_PROGRESS, isFetching,uzerID })





//Thunk

export const getUzers = (page,pageSize) => {
    return (dispatch) => {
        dispatch(togolFething(true))
        dispatch(setCurrentPage(page))
        uzersAPI.getUzers(page,pageSize)
                .then(data=>{   
                    dispatch(togolFething(false))
                    dispatch(setUzers(data.items))
                    dispatch(setUzersTotalCount(data.totalCount))
        })    
    }
}
export const unfollowAC = (id) => {
    return (dispatch) => {
        uzersAPI.uzerUnfollow(id)
        .then(response=> { 
               if(response.data.resultCode ===0)
                      { dispatch(unfollow(id))
                        dispatch(togolFollowProgress(false,id))

                 }})

    }
}
export const followAC = (id) => {
    return (dispatch) => { 
        // dispatch(togolFollowProgress(true,id))

        uzersAPI.uzerFollow(id)
                .then(response=>{ 
                    if(response.data.resultCode ===0){
                        dispatch(follow(id))
                        dispatch(togolFollowProgress(false,id))
                    }
               })
    }     
}    










export default uzerReduce;