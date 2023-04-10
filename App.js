import { StyleSheet, Text, View, StatusBar, Platform } from "react-native";
import CustomHeader from "./src/components/CustomHeader";
import LocalList from "./src/screens/LocalList";
import React, { useEffect, useRef } from "react";
import useFetch from "./src/hooks/use-fetch";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const [regions, regionsLoading, regionsError] = useFetch("regions");
  const [places, placesLoading, placesError] = useFetch("places");
  const [routes, routesLoading, routesError] = useFetch("routes");
  const [events, eventsLoading, eventsError] = useFetch("events");
  const [categories, categoriesLoading, categoriesError] =
    useFetch("categories");

  const osRef = useRef(Platform.OS);
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <View style={[styles.container]}>
        {osRef.current === "ios" ? (
          <>
            <StatusBar backgroundColor="#F5F5F5" barStyle="dark-content" />
            <CustomHeader />
          </>
        ) : (
          <StatusBar backgroundColor="#9DCC9B" barStyle="dark-content" />
        )}
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="MapLocation" component={MapLocation} />
          <Stack.Screen name="LocalList" component={LocalList} />
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
