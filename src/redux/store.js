import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { reducer as formReducer } from "redux-form";
import ReduxThunk from "redux-thunk";
import weatherCardReducer from "./weatherCard-reducer";

let reducersPack = combineReducers({
  weatherCard: weatherCardReducer,
  form: formReducer,
});

const store = createStore(reducersPack, compose(applyMiddleware(ReduxThunk)));
export default store;
