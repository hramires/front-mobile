import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/core';
import TitleHeader from '../../components/TitleHeader';
import CarouselWrapper from './partials/CarouselWrapper';
import { mockupEvents, mockupPlaces, mockupRoutes } from '../../data';
//import useFetch from '../../hooks/use-fetch';

export default function HomePage({ header }) {
  const navigation = useNavigation();
  /**
   * Blocked until the server is deployed
   * const [places, placesLoading, placesError] = useFetch('places');
   * const [regions, regionsLoading, regionsError] = useFetch('regions');
   * const [routes, routesLoading, routesError] = useFetch('routes');
   * const [events, eventsLoading, eventsError] = useFetch('events');
   * const [categories, categoriesLoading, categoriesError] =
   *   useFetch('categories');
   */
  const onPressHandler = () => {
    navigation.navigate('MapLocation');
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <TitleHeader title={'Região Criúva'} onPress={onPressHandler} />
        <CarouselWrapper
          title={'Eventos'}
          data={mockupEvents}
          navigate={'LocalList'}
        />
        <CarouselWrapper
          title={'Roteiros'}
          data={mockupRoutes}
          navigate={'LocalList'}
        />
        <CarouselWrapper
          title={'Locais'}
          data={mockupPlaces}
          navigate={'LocalList'}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
