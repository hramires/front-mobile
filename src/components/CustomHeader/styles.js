import { StyleSheet, StatusBar } from "react-native";
import { Colors } from "../../config/Theme";

const STATUSBAR_HEIGHT = StatusBar.currentHeight || 0;
export default styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      backgroundColor: '#9DCC9B',
      minHeight: 40, // Reduce the height of the header as needed
      // paddingTop: STATUSBAR_HEIGHT, // Set the marginTop to the height of the status bar
    },
  });
  