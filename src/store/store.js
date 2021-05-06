import { createStore } from "redux";
import reducers from "../reducers/index";
import middelwares from "../middlewares/index";

const store = createStore(reducers, middelwares);

export default store;
