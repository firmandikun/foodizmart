// 1 import redux
import { combineReducers, applyMiddleware, createStore, compose } from "redux";
// 2. import redux-thunk
import thunk from "redux-thunk";

// daftarkan redux auth
// import { authReducer } from "../features/Auth/reducer";
import location from "../features/locations/reducer";

// 3. buat composer enhancer untuk menghubungkan dengan Chrome DevTools Redux
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
// (4) gabung reducer, untuk sementara kosong, karena kita belum membuat reducer
const rootReducer = combineReducers({
  address: location,
});
// (5) buat store, dan gunakan composerEnhancer + middleware thunk
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

// (6) export store
export default store;
