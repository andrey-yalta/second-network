import {createStore, combineReducers} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import userReducers from "./users-reducer";


let reducers = combineReducers({
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        usersPage: userReducers,
    });
let store = createStore(reducers);
export default store;