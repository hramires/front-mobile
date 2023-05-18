import React from 'react';
import { ActivityIndicator, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TitleHeader from '../../components/TitleHeader';
import { mockupRoutes } from '../../data';
import useFetch from '../../hooks/use-fetch';
import CarouselHeader from './partials/CarouselHeader';
import Carousel from '../../components/Carousel/Carousel';
import { colorPalette } from '../../../constants';

export default function HomePage({ navigation }) {
  /**
   * Blocked until the server is deployed
   * const [regions, regionsLoading, regionsError] = useFetch('regions');
   * const [routes, routesLoading, routesError] = useFetch('routes');
   */
  const [places, placesLoading, placesError] = useFetch('place');
  const [events, eventsLoading, eventsError] = useFetch('event');

  return (
    <SafeAreaView>
      <ScrollView>
        <TitleHeader
          title={'Região Criúva'}
          onPress={() => navigation.navigate('MapLocation')}
        />
        <View style={{ display: 'flex', gap: 16 }}>
          <View id='places-container'>
            <CarouselHeader
              navigation={navigation}
              title='Locais'
              viewAll='LocalList'
              data={places?.places || []}
            />
            {placesLoading && (
              <ActivityIndicator
                size='large'
                color={colorPalette.backgroundGreen}
              />
            )}
            {!placesLoading && (
              <Carousel
                navigation={navigation}
                data={places?.places || []}
                navigate={'ViewItem'}
              />
            )}
          </View>
          <View id='events-container'>
            <CarouselHeader
              navigation={navigation}
              title='Eventos'
              viewAll='LocalList'
              data={events || []}
            />
            {eventsLoading && (
              <ActivityIndicator
                size='large'
                color={colorPalette.backgroundGreen}
              />
            )}
            {!eventsLoading && (
              <Carousel
                navigation={navigation}
                data={events || []}
                navigate={'ViewItem'}
              />
            )}
          </View>
          <View id='routes-container'>
            <CarouselHeader
              navigation={navigation}
              title='Roteiros'
              viewAll='LocalList'
              data={mockupRoutes || []}
            />
            <Carousel
              navigation={navigation}
              data={mockupRoutes || []}
              navigate={'ViewItem'}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
