import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import styles from "./styles";
import TitleHeader from "../../components/TitleHeader";
import EventCard from '../../components/Card/Card';
import { SafeAreaView } from "react-native-safe-area-context";
import useStorage from "../../hooks/use-storage";

export default function EventList({ navigation }) {
  const [events, eventsLoading, eventsError] = useStorage("event");
  const [filteredEvents, setFilteredEvents] = useState(events);
  const [filter, setFilter] = useState("");

  const onPressHandler = () => {
    navigation.goBack();
  };

  const applyFilter = () => {
    const filtered = events.filter(event => event.name.toLowerCase().includes(filter.toLowerCase()));
    setFilteredEvents(filtered);
  };

  useEffect(() => {
    applyFilter();
  }, [filter, events]);

  return (
    <View style={styles.container}>
      <TitleHeader title={"Região Criúva"} onPress={onPressHandler} />
      <SafeAreaView>
        {eventsLoading && <Text>Loading...</Text>}
        {eventsError && <Text>Error: {eventsError}</Text>}
        <FlatList
          data={filteredEvents}
          renderItem={({ item }) => (
              <EventCard
                title={item.name}
                description={item.description}
                image={item?.image}
                onPress={onPressHandler}
              />
          )}
        />
      </SafeAreaView>
    </View>
  );
}
