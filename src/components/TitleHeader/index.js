import React from 'react';
import {View, Text, TouchableOpacity } from 'react-native';
import  styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { primaryHeaderColor } from '../../config/Theme';

const TitleHeader = (props) => {
    return(
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={props.onPress}>
        <Icon name="arrow-left" size={20} color="#FFF" />
      </TouchableOpacity>
        <Text style={styles.headerTitle}>{props.title}</Text>
  </View>
      );
};
export default TitleHeader;