import {createStore, applyMiddleware} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import expireReducer from 'redux-persist-expire';
import createSagaMiddleware from 'redux-saga';

import rootReducers from '../redux/reducers';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whiteList: ['userReducer'],
  transforms: [
    expireReducer('userReducer', {
      expireSeconds: 60 * 60 * 24,
      expiredState: [],
      autoExpire: true,
    }),
  ],
};
const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));

const configureStore = () => {
  return {store};
};

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default configureStore;
