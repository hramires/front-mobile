import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

export default styles = StyleSheet.create({
    footer:{
            flex: 1,
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: Dimensions.get('window').height*0.10,
            backgroundColor: '#D5E4CF',
            alignItems: 'center',
            paddingTop: 10,
            borderRadius: 5
    },
    divider: {
        width: '20%',
        alignItems: 'center',
        justifyContent:'center',
        height: 3,
        backgroundColor: '#024053',
      },
})