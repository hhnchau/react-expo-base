import React, { useEffect} from 'react';
import { View, Image, Dimensions, Text, Button, Platform } from 'react-native';
const Screen1 = ({ navigation, route }) => {
    return(
        <View
        style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'yellow',
        }}
        >

        <Button
            title="Next"
            onPress={()=>{
                navigation.navigate('Screen12')
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

export default Screen1;