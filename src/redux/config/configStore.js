import { createStore } from "redux";
import { combineReducers } from "redux";
import calculator from "../modules/calculator";

const rootReducer = combineReducers({
    counter: calculator
});
const store = createStore(rootReducer);

export default store;
