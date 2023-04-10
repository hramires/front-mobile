import { StyleSheet } from "react-native";
import { Dimensions} from 'react-native';
const { width, height } = Dimensions.get('window');
export default styles = StyleSheet.create({
    container: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      flex:1
      // height: '100%',
    },
    mapContainer:{
      width: Dimensions.get('window').width,
      // height: Dimensions.get('window').height *0.9,
      height: '100%',
      paddingBottom: Dimensions.get('window').height *0.09,
    }
  });