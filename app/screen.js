import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators, } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from "@react-navigation/drawer";

import { Button, StyleSheet, Text, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Splash from './container/splash/splash';
import Screen1 from './container/screen1/screen1';
import Screen12 from './container/screen1/screen12';
import Screen2 from './container/screen2/screen2';
import Screen22 from './container/screen2/screen22';
import Login from './container/login/login';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const RootStackScreen = () => {
	const Stack1 = createStackNavigator();
	const Stack2 = createStackNavigator();
	const tab1 = ()=>(
		<Stack1.Navigator>
		<Stack1.Screen
		name="Screen1"
		component={Screen1}
		options={{ animationEnabled: false }}
		/>
		<Stack2.Screen
		name="Screen12"
		component={Screen12}
		options={{ animationEnabled: false }}
		/>
		</Stack1.Navigator>
	)
	const tab2 = ()=>(
		<Stack1.Navigator>
		<Stack1.Screen
		name="Screen2"
		component={Screen2}
		options={{ animationEnabled: false }}
		/>
		<Stack2.Screen
		name="Screen22"
		component={Screen22}
		options={{ animationEnabled: false }}
		/>
		</Stack1.Navigator>
	)


	return (
	<NavigationContainer>
      <Tab.Navigator 
	  	headerMode="none"
        tabBarOptions={{
          labelStyle:{
            fontSize:20
          },
          activeTintColor: 'blue',
          inactiveTintColor: 'black'
        }}
        //tabBar={()=> <Text>Custom Tab</Text>}
      >
        <Tab.Screen name="S1" component={tab1}
          options={
            {
              tabBarLabel:"Tab1",
               //tabBarIcon: ({color})=> <FontAwesome name='home' size={30} color={color}/>
            }
          }></Tab.Screen>
        <Tab.Screen name="S2" component={tab2} initialParams={{ count: 10 }}
          options={{
            tabBarLabel:"Tab2",
             //tabBarIcon: ({color})=> <FontAwesome name='gear' size={30} color={color}/>
          }}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
	// <NavigationContainer>
	// 	<Stack.Navigator
	// 		initialRouteName="Init"
	// 		headerMode="none"
	// 		screenOptions={{
	// 			cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
	// 		}}
	// 	>
	// 		{/* SCREEN */}
	// 		<Stack.Screen
	// 			name="Splash"
	// 			component={Splash}
	// 			options={{ animationEnabled: false }}
	// 		/>

	// 		<Stack.Screen
	// 			name="Screen1"
	// 			component={Screen1}
	// 			options={{ animationEnabled: false }}
	// 		/>

	// 		<Stack.Screen
	// 			name="Screen2"
	// 			component={Screen2}
	// 			options={{ animationEnabled: false }}
	// 		/>

	// 		<Stack.Screen
	// 			name="Login"
	// 			component={Login}
	// 			options={{ animationEnabled: false }}
	// 		/>



	// 	</Stack.Navigator>
	// </NavigationContainer>
);
}

export default RootStackScreen;