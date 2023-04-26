import React, { useEffect } from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import styles from "./styles";
import TitleHeader from "../../components/TitleHeader";
import EventCard from "../../components/EventCard";
import { SafeAreaView } from "react-native-safe-area-context";
import useStorage from "../../hooks/use-storage";

export default function EventList({ navigation }) {
  const [places, placesLoading, placesError] = useStorage("places");

  const onPressHandler = () => {
    navigation.navigate("MapLocation");
  };

  return (
    <View style={styles.container}>
      <TitleHeader title={"Região Ana Rech"} onPress={onPressHandler} />
      <SafeAreaView>
        {placesLoading && <Text>Loading...</Text>}
        {placesError && <Text>Error: {placesError}</Text>}
        <FlatList
          data={places}
          renderItem={({ item }) => (
            <>
              <EventCard
                title={item.name}
                description={item.description}
                onPress={onPressHandler}
              />
              <EventCard />
            </>
          )}
        />
      </SafeAreaView>
    </View>
  );
}
