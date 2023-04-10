import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/screens/Home";
import mock from "./src/mocks/Home";
import { useEffect } from "react";
import useApiData from "./src/hooks/use-api-data";
import { persistor } from "./src/store";

export default function App() {
  // const [placesData, placesLoading, placesError] = useApiData(
  //   "https://rotasrurais.free.beeceptor.com/api/v1/places",
  //   "places"
  // );

  const places = [
    { id: 1, name: "Teste" },
    { id: 2, name: "Teste 2" },
    { id: 3, name: "Teste 3" },
  ];
  const data = persistor.getState();

  const store = persistor.dispatch({ type: "SET_PLACES", payload: places });

  return (
    <View style={styles.container}>
      <Home {...mock} />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Places Data: {JSON.stringify(data)}</Text>
        {/* <Text>Places Loading: {JSON.stringify(placesLoading)}</Text>
        <Text>Places Error: {JSON.stringify(placesError)}</Text> */}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
