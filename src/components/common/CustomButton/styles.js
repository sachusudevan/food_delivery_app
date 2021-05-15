import { StyleSheet } from "react-native"
import colors from "../../../assets/theme/colors";

export default StyleSheet.create({

    TextInput:{
        color : colors.grey,
        flex : 1,
        width: "100%",
    },
    wrapper:{
        height : 42,
        paddingHorizontal : 5,
        marginVertical : 5,
        borderRadius: 5,
        alignItems:"center",
        justifyContent: 'space-evenly',
        
    },

    loaderSection:{
        flexDirection:"row",
        
    },

    error:{
        color:colors.danger,
        paddingTop: 4,
        fontSize: 12,
    }

});