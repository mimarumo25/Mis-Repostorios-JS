import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "../reducer/loginReducer";
import {registerReducer} from '../reducer/registerReducer'
import {listarReducer} from '../reducer/listarReducer'
import { favoritesReducer } from "../reducer/favoritesReducer";


const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  login: loginReducer,
  register: registerReducer,
  listar: listarReducer,
  favorites:favoritesReducer
});

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
    );

    export default store