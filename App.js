import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import mock from './src/mocks/Home'
import MapLocation from './src/screens/MapLocation';

export default function App() {
  return (
    <View style={styles.container}>
      <MapLocation></MapLocation>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
