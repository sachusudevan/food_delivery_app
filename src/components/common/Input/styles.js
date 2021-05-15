import { StyleSheet } from "react-native"
import colors from "../../../assets/theme/colors";

export default StyleSheet.create({

    TextInput:{
        color : colors.black,
        flex : 1,
        width: "100%",
    },
    wrapper:{
        height : 42,
        borderWidth : 1,
        borderRadius : 4,
        paddingHorizontal : 5,
        alignItems : "center",
        marginTop : 5,
        
    },

    inputContainer:{
        paddingVertical : 12,
    },

    error:{
        color:colors.danger,
        paddingTop: 4,
        fontSize: 12,
    }

});