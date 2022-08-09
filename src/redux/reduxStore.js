import { applyMiddleware, combineReducers, } from "redux";
import authReduce from "./authReduce.tsx";
import messegeReduce from './messegeReduce'
import profailReduce from './profailReduce'
import sidebarReduce from './sidebarReduce'
import uzerReduce from "./uzerReduce";
import { legacy_createStore as createStore} from 'redux'
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import appReduce from "./AppReduce.tsx";

let reducers = combineReducers({
    messegePage: messegeReduce,
    profailPege: profailReduce,
    sidebar: sidebarReduce,
    uzersPage: uzerReduce,
    auth: authReduce,
    form: formReducer,
    app: appReduce

})


let store = createStore(reducers, applyMiddleware(thunkMiddleware))


window.store = store


export default store