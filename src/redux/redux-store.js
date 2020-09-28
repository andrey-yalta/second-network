import {createStore, combineReducers} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import userReducers from "./users-reducer";
import authReducer from "./auth-reducer";


let reducers = combineReducers({
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        usersPage: userReducers,
        auth:authReducer,

    });
let store = createStore(reducers);
export default store;