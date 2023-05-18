import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('screen').width;

export default styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#D5E4CF',   
    },
    img:{
      width: "100%",
      height: 578 / 768 * width,
    },
    title:{
      textAlign: "left",
      paddingTop: 20,
      fontSize: 20,
      //paddingHorizontal: 24,
      //paddingRight: 24,
      paddingLeft: 24,
      paddingBottom: 8,
      //paddingTop: 24,
      margin: 0,
  },
  description:{
      textAlign: "left",
      fontSize: 13,
      paddingHorizontal: 24,
      paddingBottom: 24,
      lineHeight: 16,
  },
  descriptionInfo:{
    textAlign: "left",
    fontSize: 13,
    paddingHorizontal: 24,
    paddingBottom: 5,
    lineHeight: 28,
},
botao:{
  backgroundColor: "#2A846B",
  width: 135,
  height: 45,
  borderRadius: 4,
  justifyContent: "center",
},
textBotao:{
  textAlign: "center",
  color: "white",
  fontSize: 16,
},
viewBotao:{
  alignItems: "center",
},
})