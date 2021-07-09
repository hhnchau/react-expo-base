import React, { useEffect} from 'react';
import { View, StyleSheet, Image, Dimensions, Text, Button, Platform, ScrollView, TouchableOpacity } from 'react-native';
import {get, post} from '../../api/request'
import {setStore, getStore, TOKEN} from '../../utils/storage'
import { useDispatch, useSelector } from 'react-redux';

const Splash = ({ navigation })=>{
    const dispatch = useDispatch();
    const { status, data } = useSelector((state) => state.splashReducer);

    useEffect(()=>{
        //get();
        //setStore(TOKEN, "10");
       //const u = getStore(TOKEN);

       console.log('++++++SPALSH ' ,status);
       console.log('++++++SPALSH ' ,data);
      
    },[]);

    useEffect(()=>{
       console.log('++++++SPALSH NEW ' ,status);
       console.log('++++++SPALSH NEW ' ,data);
    },[status]);

    return(
        <View style={styles.container}>

            <ScrollView>

                <TouchableOpacity style={styles.btn} onPress={()=>{
                    //navigation.replace('Screen1');
                    dispatch({ type: "TYPE_SPLASH_SUCCESS", data: 10 });
                }}>
                    <Text>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={()=>{
                    //navigation.replace('Screen2');
                    dispatch({ type: "TYPE_SPLASH_START", data: 10 });
                }}>
                    <Text>Screen1</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={()=>{
                    //navigation.replace('Login');
                    dispatch({ type: "TYPE_SPLASH_ERROR", data: 10 });
                }}>
                    <Text>Screen2</Text>
                </TouchableOpacity>

            </ScrollView>

        </View>
    );
}

export default Splash;

const styles = StyleSheet.create({
	container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white'
	},
    btn:{
        backgroundColor:'red',
        height: 50,
        width: 300,
        margin: 8,
        alignItems:'center',
        justifyContent:'center'
    }
});