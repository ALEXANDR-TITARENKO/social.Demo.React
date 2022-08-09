import axios from "axios"

const instans = axios.create({
    withCredentials: true,
    headers: {"API-KEY" : "d0361e72-829c-485d-a45d-10181931aa55"} ,
    baseURL:'https://social-network.samuraijs.com/api/1.0/'

})



  

 export const uzersAPI = {
  
    getUzers(currentPage = 1, pageSize = 5){
        return  instans.get(`users?page=${currentPage}&count=${pageSize}`)
                       .then(response => response.data) 
      },
    uzerFollow(id){
        return instans.post(`follow/${id}`)
    },
    uzerUnfollow(id){
        return instans.delete(`follow/${id}`) 
    },
    
} 

export const profileAPI = {
     addSocial(key){ 
        return instans.put(`profile/`, key)
     },
     uzerID(uzerId){
         return instans.get(`profile/${uzerId}`)
     },
     getStatus(uzerId){
        return instans.get(`profile/status/${uzerId}`)
    },
    updateStatus(status){
        return instans.put(`profile/status`, {status:status})
    },
    saveFoto(fotoFile){
       
        const formData = new FormData()
        formData.append('image', fotoFile)
        return instans.put(`profile/photo`,formData, {
            headers: {"content-type":"multipart/form-data"}
        })
       
    }
}

export const authAPI = {
    me(){
        return instans.get(`auth/me`)
    },
    login(email,password,rememberMe){
        return instans.post(`auth/login`, {email,password,rememberMe})
    },
    logOut(){
        return instans.delete('auth/login')
    }
}



