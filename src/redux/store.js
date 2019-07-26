import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

<<<<<<< HEAD
const store = createStore(applyMiddleware(...middlewares));
=======
const store = createStore(rootReducer, applyMiddleware(...middlewares));
>>>>>>> 23aa576... added redux, and implemented userReducer and userActions to header and app components

export default store;
