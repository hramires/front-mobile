import { Animated, FlatList, View } from 'react-native';
import React, { useRef, useState } from 'react';
import Pagination from './Pagination';
import { CardWrapper as Card } from '../Card/Card';

const Carousel = ({navigation, data, navigate }) => {
  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleOnPress = (screen, params={}) => {
    navigation.navigate(screen, params);
  };

  const handleOnScroll = (event) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      }
    )(event);
  };

  const handleOnViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems && viewableItems.length > 0) {
      setIndex(viewableItems[0].index);
    }
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Card
            title={item.name}
            description={item.description}
            image={item?.image}
            onPress={() => handleOnPress(navigate, item)}
          />
        )}
        horizontal
        pagingEnabled
        snapToAlignment='center'
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
      <Pagination data={data} scrollX={scrollX} index={index} />
    </View>
  );
};

export default Carousel;
