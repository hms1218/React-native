import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`

const StyledText = styled.Text`
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 10px;
`

const LoginScreen = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const _handleLoginButton = () => {
        console.log("로그인 버튼 클릭")
    }

    return(
        <Container>
            <StyledText>로그인</StyledText>
            <CustomInput 
                placeholder="이메일"
                value={email}
                onChangeText={(text) => setEmail(text)}
                />
            <CustomInput 
                placeholder="비밀번호"
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
            />
            <CustomButton 
                title="로그인"
                onPress={_handleLoginButton}
            />
            <CustomButton 
                title="회원가입"
                onPress={() => navigation.navigate("Signup")}
                backgroundColor='#2ecc71'
            />
        </Container>
    )
}

export default LoginScreen;