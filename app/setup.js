import React, { useState } from 'react';
import * as Font from 'expo-font';
import * as Splash from 'expo-splash-screen';
import AppLoading from 'expo-app-loading';

// -- Redux --
import { Provider } from 'react-redux';
import configureStore from './redux/store';

// -- Screens --
import Screens from './screen';

const Setup = ()=>{
    const[isReady, setIsReady] = useState(false);

    if(!isReady){
        return(
            <AppLoading
                startAsync = {loadResourcesAsync}
                onFinish= {()=> setIsReady(true)}
                onError = {console.warn}
            />
        )
    }

    return(
        <Provider store = {configureStore()}>
            <Screens/>
        </Provider>
    )
}

export default Setup;

const loadResourcesAsync = async ()=>{
    try{
        await Promise.all(
            [
                Font.loadAsync(
                    {
                        'roboto-500': require('../assets/fonts/roboto-500.ttf'),
                        'roboto-700': require('../assets/fonts/roboto-700.ttf'),
                        'roboto-300': require('../assets/fonts/roboto-300.ttf'),
                        'roboto-regular': require('../assets/fonts/roboto-regular.ttf'),
                    }
                )
            ]
        )
    }catch(err){
        console.warn(err);
    }finally{
        await Splash.hideAsync();
    }
}