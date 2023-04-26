import React, { useEffect } from "react";
import { TouchableOpacity, View } from "react-native";
import { Card, Text } from "react-native-elements";
import styles from "./styles";

import img from "../../../assets/EventList/anarechnatal.jpg";

export default function EventCard({
  title = "Encanto de Natal de Ana Rech",
  description = "O 29º. Encanto de Natal de Ana Rech será realizado de 07 a 22 de dezembro de 2019, na Praça Peda",
  image = img,
  onPress = () => {},
}) {
  useEffect(() => {
    console.log(
      "[EventCard] RECEIVED title:",
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
