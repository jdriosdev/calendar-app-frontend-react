import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import { rootReducer } from '../reducers/rootReducer';


const composeEnhancers = (typeof window !== 'undefined' 
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

//la union de todos mis reducers la paso a mi createStore(reducers) 

export const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)