import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    darkContainer : {
        flex: 1,
        backgroundColor : '#333',
        justifyContent : 'center',
        alignItems : 'center'
    },
    lightContainer : {
        flex: 1,
        backgroundColor : '#fff',
        justifyContent : 'center',
        alignItems : 'center'
    },
    darkText : {
        color: '#fff'
    },
    ligthText : {
        color: '#000'
    }
})

const ThemeComponent = () => {

    const {isDarkmode, toggleTheme} = useContext(ThemeContext);

    return(
        <View style={isDarkmode ? styles.darkContainer : styles.lightContainer}>
            <Text style={isDarkmode ? styles.darkText : styles.ligthText}>mode: {isDarkmode ? 'darkMode' : 'lightMode'}</Text>
            <Button title="Toggle Theme" onPress={toggleTheme} />
        </View>
    )


}

export default ThemeComponent;