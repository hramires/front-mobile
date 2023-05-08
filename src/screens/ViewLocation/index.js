import React, { useEffect } from 'react';
import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import styles from './styles';
import TitleHeader from '../../components/TitleHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import useStorage from '../../hooks/use-storage';
import Button from '../../components/Button';
import { mockupPlaces } from '../../data';

export default function ViewLocation({ navigation, route }) {
  const onPressHandler = () => {
    navigation.navigate('LocalList');
  };

  const onPressHandler2 = () => {
    navigation.navigate('MapLocation');
  };

  return (
    <View style={styles.container}>
      <TitleHeader title={'Região Criúva'} onPress={onPressHandler} />
      <SafeAreaView>
        <View style={styles.viewBotao}>
          <Image source={route.params.image} style={styles.img} />
        </View>
        <Text style={styles.title}>{route.params.name}</Text>
        <Text style={styles.description}>{route.params.description}</Text>
        <View style={{alignItems: 'center'}}>
        <Button
          onPress={onPressHandler2}
          title='Ver no Mapa'
          style={{
            backgroundColor: '#2A846B',
            width: 135,
            height: 45,
            borderRadius: 4,
            justifyContent: 'center',
          }}
          textStyle={{
            textAlign: 'center',
            color: 'white',
            fontSize: 16,
          }}
        />
        </View>
        <Text style={styles.title}>Informações</Text>
        <Text style={styles.descriptionInfo}>
          Horário de funcionamento: {route.params.openingHour || 'Não possui'}
        </Text>
        <Text style={styles.descriptionInfo}>
          Contato: {route.params.contact || 'Não possui'}
        </Text>
        <Text style={styles.descriptionInfo}>
          Exige agendamento: {route.params.appointment ? 'Sim' : 'Não'}
        </Text>
      </SafeAreaView>
    </View>
  );
}
