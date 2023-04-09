import React from "react";
import Map from "../../components/Map";
import TitleHeader from '../../components/TitleHeader'
import { View } from "react-native";

const handleBackPress = () => {
    // Handle back press
  };
export default function MapLocation(){
    return(
        <View style={{flex:1}}>
            <TitleHeader title={'Região Criúva'} onPress={handleBackPress}/>
            <Map/>
        </View>
    );
}

