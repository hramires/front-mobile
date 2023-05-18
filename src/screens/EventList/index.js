import React, { useEffect } from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import styles from "./styles";
import TitleHeader from "../../components/TitleHeader";
import EventCard from '../../components/Card/Card';
import { SafeAreaView } from "react-native-safe-area-context";
import useStorage from "../../hooks/use-storage";

export default function EventList({ navigation }) {
  const [events, eventsLoading, eventsError] = useStorage("event");

  const onPressHandler = (screen, item) => {
    navigation.navigate(screen, item);
  };

  return (
    <View style={styles.container}>
      <TitleHeader title={"Região Criúva"} onPress={()=>navigation.goBack()} />
      <SafeAreaView>
        {eventsLoading && <Text>Loading...</Text>}
        {eventsError && <Text>Error: {eventsError}</Text>}
        <FlatList
          data={events}
          renderItem={({ item }) => (
              <EventCard
                title={item.name}
                description={item.description}
                image={item?.image}
                onPress={()=>onPressHandler('ViewItem',item)} 
              />
          )}
        />
      </SafeAreaView>
    </View>
  );
}
