import { createStore } from "redux";
import teamsReducer from "./team/reducer";

const store = createStore(teamsReducer)

export default store