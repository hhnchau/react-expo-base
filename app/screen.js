import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators, } from '@react-navigation/stack';

import Splash from './container/splash/splash';
import Screen1 from './container/screen1/screen1';
import Screen2 from './container/screen2/screen2';
import Login from './container/login/login';

const Stack = createStackNavigator();

const RootStackScreen = () => (
	<NavigationContainer>
		<Stack.Navigator
			initialRouteName="Init"
			headerMode="none"
			screenOptions={{
				cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
			}}
		>
			{/* SCREEN */}
			<Stack.Screen
				name="Splash"
				component={Splash}
				options={{ animationEnabled: false }}
			/>

			<Stack.Screen
				name="Screen1"
				component={Screen1}
				options={{ animationEnabled: false }}
			/>

			<Stack.Screen
				name="Screen2"
				component={Screen2}
				options={{ animationEnabled: false }}
			/>

			<Stack.Screen
				name="Login"
				component={Login}
				options={{ animationEnabled: false }}
			/>



		</Stack.Navigator>
	</NavigationContainer>
);

export default RootStackScreen;