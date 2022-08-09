import { createSelector } from "reselect"

export const getAddUzers = (state) =>{
    return state.uzersPage.uzers
}
export const getAddUzersSelector = (state) =>{
    return getAddUzers(state).filter(u=>true)
}
export const getAddUzersSuperSelector = createSelector(getAddUzers,(uzers)=>{
    return uzers.filter( u=> true) 
})

export const getPageSize = (state) => {
    return state.uzersPage.pageSize
} 
export const getTotalUsersCount = (state) => {
    return state.uzersPage.totalUsersCount
}
export const getCurrentPage = (state) => {
    return state.uzersPage.currentPage
} 
export const getIsFetching = (state) =>{
    return state.uzersPage.isFetching
} 
export const getFollowingProgress = (state) =>{
    return state.uzersPage.followingProgress
} 
export const getIsAuth = (state) => {
    return state.auth.isAuth
}