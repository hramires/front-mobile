import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, Text, View } from 'react-native';
import styles from './styles';
import TitleHeader from '../../components/TitleHeader';
import LocalCard from '../../components/Card/Card';
import { SafeAreaView } from 'react-native-safe-area-context';
import useStorage from '../../hooks/use-storage';

export default function LocalList({ navigation }) {
  const [places, placesLoading, placesError] = useStorage('place');
  const [filteredPlaces, setFilteredPlaces] = useState(places);
  const [filter, setFilter] = useState("");

  const onPressHandler = () => {
    navigation.goBack();
  };

  const applyFilter = () => {
    const filtered = places.filter(place => place.name.toLowerCase().includes(filter.toLowerCase()));
    setFilteredPlaces(filtered);
  };

  useEffect(() => {
    applyFilter();
  }, [filter, places]);

  return (
    <View style={styles.container}>
      <TitleHeader title={'Região Criúva'} onPress={onPressHandler} />
      <SafeAreaView>
        {placesLoading && <Text>Loading...</Text>}
        {placesError && <Text>Error: {placesError}</Text>}
        <FlatList
          data={filteredPlaces}
          renderItem={({item}) => (
              <LocalCard
              title={item.name}
              description={item.description}
              image={item?.image}
              onPress={onPressHandler} />
              
          )}
        />
      </SafeAreaView>
    </View>
  );
}
