import React, { useEffect } from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';
import styles from './styles';
import TitleHeader from '../../components/TitleHeader';
import {CardWrapper as Card} from '../../components/Card/Card';
import { SafeAreaView } from 'react-native-safe-area-context';
import useStorage from '../../hooks/use-storage';

export default function LocalList({ navigation }) {
  const [places, placesLoading, placesError] = useStorage('places');

  const onPressHandler = () => {
    navigation.navigate('MapLocation');
  };

  return (
    <View style={styles.container}>
      <TitleHeader title={'Região Criúva'} onPress={onPressHandler} />
      <SafeAreaView>
        {placesLoading && <Text>Loading...</Text>}
        {placesError && <Text>Error: {placesError}</Text>}
        <FlatList
          data={places}
          renderItem={({ item }) => (
            <>
              <Card
                title={item.name}
                description={item.description}
                onPress={onPressHandler}
              />
              <Card />
            </>
          )}
        />
      </SafeAreaView>
    </View>
  );
}
