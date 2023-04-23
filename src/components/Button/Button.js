import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import { colorPalette } from '../../../constants';
import Icon from 'react-native-vector-icons/Feather';

export const Button = (props) => {
  const {
    onPress,
    title = defaultProps.title,
    style = defaultProps.style,
    textStyle = defaultProps.textStyle,
    iconStyle = defaultProps.iconStyle,
    icon = '',
  } = props;
  return (
    <Pressable style={style} onPress={onPress}>
      <Text style={textStyle}>{title}</Text>
      {icon && (
        <Icon name={icon} size={iconStyle.size} color={iconStyle.color} />
      )}
    </Pressable>
  );
};

export default Button;

const defaultProps = {
  title: 'Button',
  style: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    marginHorizontal: 16,
    marginBottom: 24,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: colorPalette.backgroundGreen,
    width: '50%',
  },
  textStyle: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  iconStyle: { size: 20, color: 'white' },
};
