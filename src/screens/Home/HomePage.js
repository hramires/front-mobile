import React from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/core';
import HomeHeader from '../../components/HomeHeader';
import CarouselWrapper from './partials/CarouselWrapper';
import { mockupEvents, mockupPlaces, mockupRoutes } from '../../data';
import { primaryHeaderColor, secondaryHeaderColor, whiteHeaderTextColor } from '../../config/Theme';
import styles from '../../components/TitleHeader/styles';
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
    <View>
    <HomeHeader title={'Região Criúva'} color={whiteHeaderTextColor}backgroundColor={secondaryHeaderColor} onPress={onPressHandler} />
    <SafeAreaView >
      <ScrollView>
        <CarouselWrapper
          title={'Eventos'}
          data={mockupEvents}
          navigate={'EventList'}
        />
        <CarouselWrapper
          title={'Roteiros'}
          data={mockupRoutes}
          navigate={'RouteList'}
          />
        <CarouselWrapper
          title={'Locais'}
          data={mockupPlaces}
          navigate={'LocalList'}
          />
      </ScrollView>
    </SafeAreaView>
          </View>
  );
}
