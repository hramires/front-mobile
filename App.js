import React, { useRef } from 'react';
import { StyleSheet, View, StatusBar, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomHeader from './src/components/CustomHeader';
import LocalList from './src/screens/LocalList';
import MapLocation from './src/screens/MapLocation';
import HomePage from './src/screens/Home/HomePage';
import ViewItem from './src/screens/ViewItem';
import { colorPalette } from './constants';

export default function App() {
  const osRef = useRef(Platform.OS);
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <View style={[styles.container]}>
        {osRef.current === 'ios' ? (
          <>
            <StatusBar backgroundColor='#F5F5F5' barStyle='dark-content' />
            <CustomHeader />
          </>
        ) : (
          <StatusBar
            backgroundColor={colorPalette.colorButton}
            barStyle='dark-content'
          />
        )}
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='HomePage' component={HomePage} />
          <Stack.Screen name='MapLocation' component={MapLocation} />
          <Stack.Screen name='LocalList' component={LocalList} />
          <Stack.Screen name='ViewItem' component={ViewItem} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
