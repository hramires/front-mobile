import { StyleSheet, Text, View, StatusBar, Platform } from "react-native";
import Home from "./src/screens/Home";
import mock from "./src/mocks/Home";
import CustomHeader from "./src/components/CustomHeader";
import MapLocation from "./src/screens/MapLocation";
import LocalList from "./src/screens/LocalList";
import { useRef}  from "react";

export default function App() {
  const osRef = useRef(Platform.OS);
  return (
    <View style={[styles.container]}>
      {osRef.current === "ios" ? (
        <>
          <StatusBar backgroundColor="#F5F5F5" barStyle="dark-content" />
          <CustomHeader />
        </>
      ) : (
        <StatusBar backgroundColor="#9DCC9B" barStyle="dark-content" />
      )}
      <LocalList></LocalList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
