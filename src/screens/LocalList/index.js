import React from 'react';
import { ScrollView, View } from 'react-native';
//import { Text } from "react-native-elements";
import styles from "./styles";
import TitleHeader from '../../components/TitleHeader'
import LocalCard from '../../components/LocalCard'

const handleBackPress = () => {
  // Handle back press
};

export default function LocalList() {
  return (
    <View style={styles.container}>
      <TitleHeader title={'Região Criúva'} onPress={handleBackPress}/>
      <ScrollView> 
        <LocalCard style={styles.card}/> 
        <LocalCard style={styles.card}/>  
      </ScrollView> 
    </View>
  );
}

