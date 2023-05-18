import { View, Text } from 'react-native';
import React from 'react';
import Carousel from '../../../components/Carousel/Carousel';
import { Button } from '../../../components/Button';
import { colorPalette } from '../../../../constants';
import { useNavigation } from '@react-navigation/native';

const CarouselWrapper = ({navigation, title, viewAll, viewItem, data }) => {

  const handleOnPress = (screen, params={}) => {
    navigation.navigate(screen, params);
  };

  return (
    <View style={{ marginBottom: 16 }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between', 
          marginHorizontal: 16,
          marginTop: 16,
        }}
      >
        <Text
          style={{
            fontSize: 32,
            fontWeight: 700,
            color: colorPalette.backgroundGreen,
          }}
        >
          {title}
        </Text>
        <Button
          title={'Ver tudo'}
          onPress={() => handleOnPress(viewAll)}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 4,
            marginHorizontal: 8,
            paddingVertical: 12,
            paddingHorizontal: 12,
            borderRadius: 33,
            elevation: 3,
            backgroundColor: 'white',
          }}
          textStyle={{
            fontSize: 16,
            lineHeight: 21,
            fontWeight: 'bold',
            letterSpacing: 0.25,
            color: colorPalette.backgroundGreen,
          }}
          icon={'chevron-right'}
          iconStyle={{ size: 20, color: colorPalette.backgroundGreen }}
        />
      </View>
      <Carousel data={data} navigate={viewItem} navigation={navigation} />
    </View>
  );
};

export default CarouselWrapper;
