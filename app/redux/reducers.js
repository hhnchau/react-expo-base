import AsyncStorage from '@react-native-async-storage/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { persistCombineReducers } from 'redux-persist';

import * as SplashReducer from './reducers/splashReducer';

const persistConfig = {
	storage: AsyncStorage,
	key: 'root',
	stateReconciler: autoMergeLevel2,
};

export default persistCombineReducers(
	persistConfig,
	Object.assign(
		SplashReducer
	)
);
