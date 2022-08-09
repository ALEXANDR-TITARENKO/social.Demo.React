import messegeReducer from "./messegeReduce"
import profailReducer from "./profailReduce"
import sidebarReducer from "./sidebarReduce"

const ADD_POST = 'ADD-POST'
const UPDATA_POST = 'UPDATA-POST'
const REMOVE_POST = 'REMOVE-POST'

const ADD_MESSENGE ='ADD-MESSENGE'
const UPDATA_MESSENGE = 'UPDATA-MESSENGE'



let store={
       _state:{   
              profailPege:{
                  post :[
                         { post: "Hell0", likeCount: 100, id: 1, img: "https://sun1-84.userapi.com/s/v1/if2/WfOYEm0PR2m5QEh4GgEeZO3OOU_YJt-3SglemoKeoljiwih2CAqgCpCbG93OkDyXawmhYEEKr4bp_nFlCyL10IMG.jpg?size=400x406&quality=96&crop=8,0,1063,1079&ava=1" },
                         { post: 'Hello asd', likeCount: 20, id: 2, img: "https://sun1-26.userapi.com/s/v1/if1/UiC9SOHjV5jhwFBNMPBOdO_CgnNnmpZj4QU2Gvv0lXWFiD199zxe7ix9ogPpkV1W5FbqMiQG.jpg?size=400x400&quality=96&crop=0,0,622,622&ava=1" },
                         { post: 'Yoooo', likeCount:35, id: 3, img: "https://sun1-17.userapi.com/s/v1/if1/ZeCyQCiFZCmd4m7srtysN5ms78EpZjiOPaYenqqGqiFNB6KqMbzIQVlXC7bo9-tR3SuVLA.jpg?size=400x400&quality=96&crop=444,0,1707,1707&ava=1" },
                         { post: 'Osda', likeCount: 200, id: 4, img: "https://sun9-44.userapi.com/impf/vzFEzJS11Hg0zA13W-ElWWoAYZFtAFbvUGazuQ/F6XsTYjvKDs.jpg?size=960x960&quality=96&sign=c611b41a282e8020cb6bd840fa810a07&type=album" },
                         { post: 'Hello', likeCount: 333, id: 5, img: "https://sun9-10.userapi.com/impg/nNYVkre_2TFJhnSrNhuBStRgxcuXUKXvsw3ARg/KEYsZxuVzJY.jpg?size=1920x1920&quality=96&sign=f2177d3ca09a895d0c3b811b52161f19&type=album" },
                        ],
            dialogData:[
                         {id:'1', number:89328476343, name:"Зуб", img:"https://sun1-84.userapi.com/s/v1/if2/WfOYEm0PR2m5QEh4GgEeZO3OOU_YJt-3SglemoKeoljiwih2CAqgCpCbG93OkDyXawmhYEEKr4bp_nFlCyL10IMG.jpg?size=400x406&quality=96&crop=8,0,1063,1079&ava=1"},
                         {id:'2',number:89096006499, name:"Yulia",img:"https://sun1-26.userapi.com/s/v1/if1/UiC9SOHjV5jhwFBNMPBOdO_CgnNnmpZj4QU2Gvv0lXWFiD199zxe7ix9ogPpkV1W5FbqMiQG.jpg?size=400x400&quality=96&crop=0,0,622,622&ava=1"},
                         {id:'3', number:252525, name:"Nastya",img:"https://sun1-17.userapi.com/s/v1/if1/ZeCyQCiFZCmd4m7srtysN5ms78EpZjiOPaYenqqGqiFNB6KqMbzIQVlXC7bo9-tR3SuVLA.jpg?size=400x400&quality=96&crop=444,0,1707,1707&ava=1"},
                         {id:'4',number:708923, name:"Misha",img:"https://sun9-44.userapi.com/impf/vzFEzJS11Hg0zA13W-ElWWoAYZFtAFbvUGazuQ/F6XsTYjvKDs.jpg?size=960x960&quality=96&sign=c611b41a282e8020cb6bd840fa810a07&type=album"},
                         {id:'5',number:8909328342, name:"NAil",img:"https://sun9-10.userapi.com/impg/nNYVkre_2TFJhnSrNhuBStRgxcuXUKXvsw3ARg/KEYsZxuVzJY.jpg?size=1920x1920&quality=96&sign=f2177d3ca09a895d0c3b811b52161f19&type=album"},
                         {id:'6',number:89501898876, name:"Anar",img:"https://sun1-27.userapi.com/s/v1/if1/ncdX7R9jwovmZtrd8HQnLf58PsyMJ_wFcwfaKN4ei4LScZKqA63KSPwROvI6IUu7rfN6gw.jpg?size=400x400&quality=96&crop=0,0,720,720&ava=1"},
                         {id:'7', number:89328476343, name:"Miha",img:"https://sun9-49.userapi.com/impf/c624820/v624820068/11416/O2OPZMIuMO8.jpg?size=453x452&quality=96&sign=e7d9d4a57c900d1f2a9959af1206aa4a&type=album"},
                        ],
             newPostText: 'It.kamasutra'
   
                          },
    
              messegePage:{
                     messegeData:[
                                  {id:'1', messeg:"Hi"},
                                  {id:'2', messeg:"Pirveeet"},
                                  {id:'3', messeg:"Yoooou"},
                                  {id:'4', messeg:"Kavabandaaa"},
                                  {id:'5', messeg:"Go go go gooood"},
                                  {id:'6', messeg:"Yo yo yo yooo!!!!"},
                                  {id:'7', messeg:"Heloooшгршгршгршгршгршгo"},
                                ],
                       newMessegeBody:"Привет как дела?! "         
                          },

               sidebar:{ 
                      friend:[
                              {name:"Alex", img:"https://sun1-84.userapi.com/s/v1/if2/WfOYEm0PR2m5QEh4GgEeZO3OOU_YJt-3SglemoKeoljiwih2CAqgCpCbG93OkDyXawmhYEEKr4bp_nFlCyL10IMG.jpg?size=400x406&quality=96&crop=8,0,1063,1079&ava=1"},
                              {name:"Yulia",img:"https://sun1-26.userapi.com/s/v1/if1/UiC9SOHjV5jhwFBNMPBOdO_CgnNnmpZj4QU2Gvv0lXWFiD199zxe7ix9ogPpkV1W5FbqMiQG.jpg?size=400x400&quality=96&crop=0,0,622,622&ava=1"},
                              {name:"Nastya",img:"https://sun1-17.userapi.com/s/v1/if1/ZeCyQCiFZCmd4m7srtysN5ms78EpZjiOPaYenqqGqiFNB6KqMbzIQVlXC7bo9-tR3SuVLA.jpg?size=400x400&quality=96&crop=444,0,1707,1707&ava=1"},
                              {name:"Anar",img:"https://sun1-27.userapi.com/s/v1/if1/ncdX7R9jwovmZtrd8HQnLf58PsyMJ_wFcwfaKN4ei4LScZKqA63KSPwROvI6IUu7rfN6gw.jpg?size=400x400&quality=96&crop=0,0,720,720&ava=1"},
                              {name:"Miha",img:"https://sun9-49.userapi.com/impf/c624820/v624820068/11416/O2OPZMIuMO8.jpg?size=453x452&quality=96&sign=e7d9d4a57c900d1f2a9959af1206aa4a&type=album"},
                            ]

                        },
  
      },
     
      _renderEntireTree(){
      },  
      
      
      
      subscribe(observer){
        this._renderEntireTree = observer
      },
      getState(){
        return this._state
      },
      
      

      
      dispatch(action){        // у action это {}и унего должно быть обзязательно свойтво например{type='ADD-POST'}
    
      this._state.profailPege = profailReducer(this._state.profailPege,action)
      this._state.messegePage = messegeReducer(this._state.messegePage,action)
      this._state.sidebar = sidebarReducer(this._state.sidebar,action)
       
      this._renderEntireTree(this._state)     

  }
}











export default store;