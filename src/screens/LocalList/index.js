import React from 'react';
import { ScrollView, View } from 'react-native';
//import { Text } from "react-native-elements";
import styles from "./styles";
import TitleHeader from '../../components/TitleHeader'
import LocalCard from '../../components/LocalCard'


export default function LocalList({navigation}) {
  return (
    <View style={styles.container}>
      <TitleHeader title={'Região Criúva'} onPress={()=>navigation.navigate('MapLocation')}/>
      <ScrollView> 
        <LocalCard style={styles.card}/> 
        <LocalCard style={styles.card}/>  
      </ScrollView> 
    </View>
  );
}

