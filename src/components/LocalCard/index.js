import React from 'react';
import { View } from 'react-native';
import { Card, Text } from "react-native-elements";
import styles from "./styles";

import img from '../../../assets/LocalList/img01.png';

export default function LocalCard() {
  return (
   <Card containerStyle={styles.card}>
    <Card.Image style={styles.img} source={img}/>
        <Card.Title style={styles.title}>Cânion do Palanquinho</Card.Title>
        <Text style={styles.description}>Espaço belíssimo e detentor de uma vasta mata nativa, o Monumento Natural Palanquinho, 
          foi transformado em Unidade de Conservação</Text>
    </Card>
  );
}