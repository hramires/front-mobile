import React from 'react';
import { Dimensions, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import styles from './styles';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
//-28.875086525967582, -50.97633954616877
const Map = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -28.875086525967582,
          longitude: -50.97633954616877,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
      >
        <Marker
          coordinate={{ latitude: -28.875086525967582, longitude: -50.97633954616877 }}
          title="Região Criúva"
          description="Além da vasta cultura trazida pelos tropeiros, Criúva é privilegiada pelas belezas naturais de seu interior: são cascatas, rios, matas nativas, rica flora e o maior recurso hídrico potável do município"
        />
      </MapView>
    </View>
  );
};

export default Map;
