import React, { useEffect} from 'react';
import { View, Image, Dimensions, Text, Button, Platform } from 'react-native';

const Screen2 = ({ navigation, route }) => {
    return(
        <View
        style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'pink',
        }}
        >

        <Button
            title="Next"
            onPress={()=>{
                navigation.navigate('Screen22')
            }}
        />

        <Button
            title="Back"
            onPress={()=>{
 
            }}
        />

        </View>
    )
}

export default Screen2;