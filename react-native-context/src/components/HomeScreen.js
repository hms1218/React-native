import { View, Text, Button, StyleSheet } from "react-native";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent : 'center',
        alignItems : 'center'
    }
})


const HomeScreen = () => {
    const {login,logout,state} = useContext(UserContext);

    return(
        state ?
        <View style={styles.container}>
            <Text>Welcome, {state.name}</Text>
            <Button title="로그아웃" onPress={logout}/>
        </View>
        :
        <View style={styles.container}>
            <Button title="로그인" onPress={login}/>
        </View> 
        
        
    )

}

export default HomeScreen;