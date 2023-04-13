import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import CustomHeader from './src/components/CustomHeader';
import LocalList from './src/screens/LocalList';
import MapLocation from './src/screens/MapLocation';
import React, { useEffect, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './src/screens/Home';

export default function App() {
    const osRef = useRef(Platform.OS);
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <View style={[styles.container]}>
                {osRef.current === 'ios' ? (
                    <>
                        <StatusBar
                            backgroundColor='#F5F5F5'
                            barStyle='dark-content'
                        />
                        <CustomHeader />
                    </>
                ) : (
                    <StatusBar
                        backgroundColor='#9DCC9B'
                        barStyle='dark-content'
                    />
                )}
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name='HomePage' component={HomePage} />
                    <Stack.Screen name='MapLocation' component={MapLocation} />
                    <Stack.Screen name='LocalList' component={LocalList} />
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
