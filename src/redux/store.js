import { createStore } from "redux";
import rootReducer from "./reducer";
import { loadState } from "../utils/localStorage";

const persistedState = loadState();

const store = createStore(rootReducer, persistedState);

export default store;
