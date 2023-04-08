import React from 'react';
import { Text, View } from 'react-native';
import {styles} from "./styles"
import Map from '../../components/Map';

export default function MapLocation() {
  return (
            <View style={{flex:1, backgroundColor: 'blue'}}>
                <Map></Map>
            </View>
            
    );
}