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

const SignupScreen = ({navigation}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const _handleSignupButton = () => {
        console.log("회원가입 버튼 클릭")
    }

    return(
        <Container>
            <StyledText>회원가입</StyledText>
             <CustomInput 
                placeholder="이름"
                value={name}
                onChangeText={(text) => setName(text)}
                />
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
                title="회원가입"
                onPress={_handleSignupButton}
            />
            <CustomButton 
                title="로그인"
                onPress={() => navigation.navigate("Login")}
                backgroundColor='#e67f22'
            />
        </Container>
    )
}

export default SignupScreen;