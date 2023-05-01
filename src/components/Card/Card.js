import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Card, Text } from 'react-native-elements';
import { Button } from '../Button';

const { width } = Dimensions.get('screen');

export const CardWrapper = ({ title, description, image, onPress }) => {
  return (
    <Card containerStyle={styles.card}>
      <Card.Image style={styles.img} source={image} />
      <Card.Title style={styles.title} numberOfLines={1}>
        {title}
      </Card.Title>
      <Text numberOfLines={2} style={styles.description}>
        {description}
      </Text>
      {onPress && (
        <Button title='Ver mais' onPress={onPress} icon='arrow-right' />
      )}
    </Card>
  );
};

export default CardWrapper;

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    overflow: 'hidden',
    width: width * 0.9,
    padding: 0,
  },
  img: {
    width: width,
    height: 192,
  },
  title: {
    textAlign: 'left',
    paddingTop: 20,
    fontSize: 28,
    paddingLeft: 24,
    margin: 0,
  },
  description: {
    textAlign: 'left',
    fontSize: 16,
    paddingHorizontal: 24,
    paddingBottom: 24,
    lineHeight: 28,
  },
});
