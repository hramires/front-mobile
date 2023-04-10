import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    card:{
        backgroundColor: 'white',
        alignItems: 'center',  
        borderRadius: 12,
        overflow: "hidden",
        padding: 0,
        paddingHorizontal: 0,
    },
    img:{
        width: 360,
        height: 192,
    },
    title:{
        textAlign: "left",
        paddingTop: 20,
        fontSize: 28,
        //paddingHorizontal: 24,
        //paddingRight: 24,
        paddingLeft: 24,
        //paddingBottom: 8,
        //paddingTop: 24,
        margin: 0,
    },
    description:{
        textAlign: "left",
        fontSize: 16,
        paddingHorizontal: 24,
        paddingBottom: 24,
        lineHeight: 28,
    },
})