import React from 'react';
import { FlatList, View } from 'react-native';
import styles from './styles';
import TitleHeader from '../../components/TitleHeader';
import Card from '../../components/Card/Card';

export default function LocalList({ navigation, route }) {
  return (
    <View style={styles.container}>
      <TitleHeader
        title={'Região Criúva'}
        onPress={() => navigation.navigate('MapLocation')}
      />
      <FlatList
        data={route.params}
        renderItem={({ item }) => (
          <Card
            title={item.name}
            description={item.description}
            image={item.image}
            onPress={() => navigation.navigate('ViewItem', item)}
          />
        )}
      />
    </View>
  );
}
