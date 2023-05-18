import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import styles from './styles';
import TitleHeader from '../../components/TitleHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../components/Button';

export default function ViewItem({ navigation, route }) {
  return (
    <View style={styles.container}>
      <TitleHeader
        title={'Região Criúva'}
        onPress={() => navigation.goBack()}
      />
      <SafeAreaView>
        <ScrollView>
          <View style={styles.viewBotao}>
            <Image source={route.params.image} style={styles.img} />
          </View>
          <Text style={styles.title}>{route.params.name}</Text>
          <Text style={styles.description}>{route.params.description}</Text>
          <View style={{ alignItems: 'center' }}>
            <Button
              onPress={() => navigation.navigate('MapLocation')}
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
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
