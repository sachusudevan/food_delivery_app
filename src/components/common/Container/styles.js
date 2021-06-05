
import { StyleSheet, Dimensions  } from "react-native"
import colors from "../../../assets/theme/colors";

const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    mainLayout:{
        backgroundColor: colors.white,
        // minHeight:windowHeight
        
    },
    wrapper:{
        padding:20,
    }
});
