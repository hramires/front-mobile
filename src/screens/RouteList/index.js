import React, { useEffect } from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';
import styles from './styles';
import TitleHeader from '../../components/TitleHeader';
import {CardWrapper as Card} from '../../components/Card/Card';
import { SafeAreaView } from 'react-native-safe-area-context';
import useStorage from '../../hooks/use-storage';
import { mockupRoutes } from '../../data';

export default function RouteList({ navigation }) {
    const [route, rmapsLoading, rmapsError] = useStorage('route');
  
    const onPressHandler = () => {
      navigation.goBack();
    };

  

    return(
    <View style={styles.container}>
        <TitleHeader title={'Região Criúva'} onPress={onPressHandler} />
        <SafeAreaView>
          {rmapsLoading && <Text>Loading...</Text>}
          {rmapsError && <Text>Error: {rmapsError}</Text>}
          <FlatList
            
            data={route}
            renderItem={({ item }) => (
                <Card
                  title={item.name}
                  description={item.description}
                  image={item?.image}
                  onPress={onPressHandler}
                />              
            )}
          />
        </SafeAreaView>
      </View>);
}