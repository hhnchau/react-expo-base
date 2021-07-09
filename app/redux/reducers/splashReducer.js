import createReducer from '../createReducer';
import { TYPE_SPLASH, START,ERROR,SUCCESS } from '../../utils/type';

const rootState = {
	data: 0,
	status: false,
};

export const splashReducer = createReducer(rootState, {
	[TYPE_SPLASH+START](state) {
		console.log('````START ',  state);
		return {
			data: state.data + 1,
			status: !state.status,
		};
	},

	[TYPE_SPLASH+ERROR](state) {
		console.log('````ERROR ',  state);
		return {
			...state,
			status: !state.status,
		};
	},

	[TYPE_SPLASH+SUCCESS](state, action) {
		console.log('````SUCCESS ',  state);
		console.log('````SUCCESS ',  action);
		return {
			...state,
			status: false,
		};
	},
});

export default {};
