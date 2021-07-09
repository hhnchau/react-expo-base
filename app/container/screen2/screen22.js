import React, { useEffect} from 'react';
import { View, Image, Dimensions, Text, Button, Platform } from 'react-native';

const Screen2 = ({ navigation, route }) => {
    return(
        <View
        style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'green',
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
                navigation.navigate('Screen2')
            }}
        />

        </View>
    )
}

export default Screen2;