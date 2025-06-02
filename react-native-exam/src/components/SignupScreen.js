import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text, SafeAreaView } from "react-native";
import { useWindowDimensions } from "react-native";
import styled from "styled-components";

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    Input:{
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        marginBottom: 10,
    }
})

const StyleButton = styled.Pressable`
    background-color: #95a5a6;
    padding: 15px;
    align-items: center;
    border-radius: 5px;
`

const StyleText = styled.Text`
    font-size: 18px;
    color: white;
`

const SignupScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {width} = useWindowDimensions();

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const _onPress = () => {
        if(validateEmail(email) && !(password.length < 6)){
            alert("회원가입 완료")
        }
    }

    return(
        <SafeAreaView style={{flex:1}}>
            <View style={styles.container}>
                <Text style={{fontSize:35,marginBottom:10}}>회원가입</Text>
                <TextInput 
                    style={[styles.Input, {width:width*0.8}]} 
                    placeholder="이메일"
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput 
                    style={[styles.Input, {width:width*0.8}]} 
                    placeholder="비밀번호(6자 이상)" 
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                <TextInput 
                    style={[styles.Input, {width:width*0.8}]} 
                    placeholder="이름" 
                />
                <StyleButton 
                    style={{width:width*0.8, marginTop:20}} 
                    onPress={_onPress} 
                    hitSlop={{ top: 30, bottom: 30, left: 50, right: 50 }}
                >
                    <StyleText>가입하기</StyleText>
                </StyleButton>
            </View>
        </SafeAreaView>
    )
}

export default SignupScreen;