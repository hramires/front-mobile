import React from 'react';
import { ScrollView, View } from 'react-native';
//import { Text } from "react-native-elements";
import styles from "./styles";

import LocalCard from '../../components/LocalCard'

export default function LocalList() {
  return (
    <View style={styles.container}>
      <ScrollView> 
        <LocalCard style={styles.card}/> 
        <LocalCard style={styles.card}/>  
      </ScrollView> 
    </View>
  );
}

