import React, { useEffect } from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import useStorage from "../../hooks/use-storage";

export default function Filter({}) {
  const [events, eventsLoading, eventsError] = useStorage("event");

  const onPressHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>

    </View>
  );
}
