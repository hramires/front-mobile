import { StyleSheet, StatusBar } from "react-native";
import { Colors } from "../../config/Theme";

const STATUSBAR_HEIGHT = StatusBar.currentHeight || 0;
export default styles = StyleSheet.create({
    container: {
      flex: 1,
      display: 'flex',
    },
    header: {
      backgroundColor: '#024053',
      height: 45, // Reduce the height of the header as needed
      flexDirection: 'row', // Use flexDirection to align the back button and header title in a row
      justifyContent: 'center',
      alignItems: 'center',
    //   marginTop: STATUSBAR_HEIGHT, // Set the marginTop to the height of the status bar
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
      },
      backButton: {
        position: 'absolute', // Position the back button absolutely
        left: 0, // Move the back button to the left of the screen
        marginLeft: 10, // Add marginLeft to create spacing between the back button and screen edge
        padding: 10,
      },
  });
  