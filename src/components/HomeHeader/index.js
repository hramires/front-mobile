import React from 'react';
import {View, Text, TouchableOpacity } from 'react-native';
import  styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { primaryHeaderColor, whiteHeaderTextColor } from '../../config/Theme';

const TitleHeader = (props) => {
  color = primaryHeaderColor
    return(
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={props.onPress}>
        <Icon name="arrow-right" size={20} color={whiteHeaderTextColor} />
      </TouchableOpacity>
        <Text style={styles.headerTitle}>{props.title}</Text>
        <TouchableOpacity style={styles.questionButton}>
        <Icon name="question-circle" size={25} color={whiteHeaderTextColor} />
      </TouchableOpacity>
  </View>
      );
};
export default TitleHeader;