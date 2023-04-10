import React from "react";
import Map from "../../components/Map";
import TitleHeader from '../../components/TitleHeader'
import { View, Text } from "react-native";
import styles from "./styles";

const handleBackPress = () => {
    // Handle back press
  };
export default function MapLocation(){
    return(
        <>
        <View style={{flex:1}}>
            <TitleHeader title={'Região Criúva'} onPress={handleBackPress}/>
            <Map/>
            {/* <View style={{ flex: 1 }} />  */}
            <View style={styles.footer}>                
            <View style={styles.divider}></View>
            </View>
        </View>
        </>
    );
}

