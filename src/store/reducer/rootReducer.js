import { combineReducers } from "redux";
import counter from './counter'
import users from './users'
import crudReducer from "./crudReducer";

const rootReducer = combineReducers({
  counter,
  users,
  foods: crudReducer('foods')
})

export default rootReducer

