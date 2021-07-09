import React, { useEffect} from 'react';
import { View, Image, Dimensions, Text, Button, Platform } from 'react-native';
const Screen1 = ({ navigation, route }) => {
    return(
        <View
        style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'blue',
        }}
        >

        <Button
            title="Next"
            onPress={()=>{

            }}
        />

        <Button
            title="Back"
            onPress={()=>{
                navigation.navigate('Screen1')
            }}
        />


        </View>
    )
}

export default Screen1;