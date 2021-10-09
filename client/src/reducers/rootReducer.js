import { combineReducers } from "redux";
import boardsReducer from "./boards";
import listsReducer from "./lists"
import cardsReducer from "./cards"


const rootReducer = combineReducers({ 
  boards: boardsReducer, 
  lists: listsReducer,
  cards: cardsReducer 
});

export default rootReducer;
