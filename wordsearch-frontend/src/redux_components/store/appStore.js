import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunkMiddleware from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const appStore = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunkMiddleware))
)

appStore.getState()

export default appStore;