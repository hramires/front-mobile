import React from 'react';
import Map from '../../components/Map';
import TitleHeader from '../../components/TitleHeader';
import { View, Text } from 'react-native';
import styles from './styles';

export default function MapLocation({ navigation }) {
  return (
    <>
      <View style={{ flex: 1 }}>
        <TitleHeader
          title={'Região Criúva'}
          onPress={() => navigation.goBack()}
        />
        <Map />
        {/* <View style={{ flex: 1 }} />  */}
        <View style={styles.footer}>
          <View style={styles.divider}></View>
        </View>
      </View>
    </>
  );
}
