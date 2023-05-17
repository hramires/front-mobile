import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, Text, View } from 'react-native';
import styles from './styles';
import TitleHeader from '../../components/TitleHeader';
import {CardWrapper as Card} from '../../components/Card/Card';
import { SafeAreaView } from 'react-native-safe-area-context';
import useStorage from '../../hooks/use-storage';
import { mockupRoutes } from '../../data';

export default function RouteList({ navigation }) {
    const [route, rmapsLoading, rmapsError] = useStorage('route');
    const [filteredRoutes, setFilteredRoutes] = useState(routes);
    const [filter, setFilter] = useState("");
  
    const onPressHandler = () => {
      navigation.goBack();
    };
  
    const applyFilter = () => {
      const filtered = routes.filter(route => route.name.toLowerCase().includes(filter.toLowerCase()));
      setFilteredRoutes(filtered);
    };
  
    useEffect(() => {
      applyFilter();
    }, [filter, places]);

    return(
    <View style={styles.container}>
        <TitleHeader title={'Região Criúva'} onPress={onPressHandler} />
        <SafeAreaView>
          {rmapsLoading && <Text>Loading...</Text>}
          {rmapsError && <Text>Error: {rmapsError}</Text>}
          <FlatList
            
            data={filteredRoute}
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