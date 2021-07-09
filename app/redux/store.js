import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './reducers';

export default function configureStore(initialState){
    if(__DEV__){
        const logger = createLogger({
            predicate: () => false
        });
        const finalCreateStore = compose(
            applyMiddleware(thunkMiddleware, logger)
        )(createStore);

        const store = finalCreateStore(rootReducer, initialState);

        return store;
    }
    const finalCreateStore = applyMiddleware(thunkMiddleware)(createStore);
	const store = finalCreateStore(rootReducer, initialState);
	return store;
}