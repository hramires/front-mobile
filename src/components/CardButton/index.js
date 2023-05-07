import React, { useEffect } from "react";
import { TouchableOpacity, View } from "react-native";
import { Card, Text } from "react-native-elements";
import styles from "./styles";

export default function LocalCard() {

  

  return (
    <View style={styles.viewBotao}>
      <TouchableOpacity style={styles.botao} ><Text style={styles.textBotao}>Ver no Mapa</Text></TouchableOpacity>
    </View>
  );
}