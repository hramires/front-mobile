import React, { useEffect } from "react";
import { TouchableOpacity, View } from "react-native";
import { Card, Text } from "react-native-elements";
import styles from "./styles";

import img from "../../../assets/LocalList/img01.png";

export default function LocalCard({
  title = "Cânion do Palanquinho",
  description = "Espaço belíssimo e detentor de uma vasta mata nativa, o Monumento Natural Palanquinho, foi transformado em Unidade de Conservação",
  image = img,
  onPress = () => {},
}) {
  useEffect(() => {
    console.log(
      "[LocalCard] RECEIVED title:",
      title,
      "| description:",
      description,
      "| image:",
      image,
      "| onPress:",
      onPress
    );
  }, [title, description, image]);

  return (
    <TouchableOpacity onPress={onPress}>
      <Card containerStyle={styles.card}>
        <Card.Image style={styles.img} source={image} />
        <Card.Title style={styles.title}>{title}</Card.Title>
        <Text style={styles.description}>{description}</Text>
      </Card>
    </TouchableOpacity>
  );
}
