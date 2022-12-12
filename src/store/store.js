import {compose, createStore ,applyMiddleware} from 'redux'
import logger from 'redux-logger'
import { persistStore,persistReducer } from 'redux-persist';
import { rootReducer } from './root-reducer'
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

const middleWares = [process.env.NODE_ENV === 'development' && logger,thunk].filter(
  Boolean
);
const persistConfig = {
  key:'root',
  storage,
  // balckList: ['user']  //不希望缓存的state
  whiteList:['cart']
}
const persistedReducer = persistReducer(persistConfig,rootReducer)

const composedEnhancer = (process.env.NODE_ENV !== 'production' &&
  window &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const composedEnhancers = composedEnhancer(applyMiddleware(...middleWares))

export const store = createStore(persistedReducer,undefined,composedEnhancers)

export const persistor = persistStore(store)