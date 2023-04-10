import React, { useEffect } from "react";
import { FlatList, ScrollView, View } from "react-native";
import styles from "./styles";
import TitleHeader from "../../components/TitleHeader";
import LocalCard from "../../components/LocalCard";
import { SafeAreaView } from "react-native-safe-area-context";
import useStorage from "../../hooks/use-storage";

export default function LocalList({ navigation }) {
  const [places, placesLoading, placesError] = useStorage("places");

  useEffect(() => {
    console.log("[LocalList] places:", places);
  }, [places]);

  return (
    <View style={styles.container}>
      <TitleHeader
        title={"Região Criúva"}
        onPress={() => navigation.navigate("MapLocation")}
      />
      <SafeAreaView>
        <FlatList
          data={places}
          renderItem={(place) => (
            <LocalCard
              style={styles.card}
              title={place.name}
              description={place.description}
            />
          )}
        />
      </SafeAreaView>
    </View>
  );
}
