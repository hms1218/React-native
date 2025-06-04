import styled from "styled-components";
import { Text, Pressable, KeyboardAvoidingView } from "react-native";
import { Image, Input, Button } from "../components/index";
import { images } from "../utils/images";
import { useState, useRef, useEffect } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { removeWhitespace, validateEmail } from "../utils/common";

const Container = styled.View`
    flex : 1;
    justify-content : center;
    align-items : center;
    background-color : ${({theme}) => theme.background};
`

const ErrorText = styled.Text`
    align-items : flex-start;
    width: 90%;
    heigth: 20px;
    margin-bottom: 10px;
    line-height: 20px;
    color: ${({theme}) => theme.errorText}
`

const Login = ({navigation}) => {
    const [email, setEmail] = useState(''); //이메일 상태관리
    const [password, setPassword] = useState(''); //비밀번호 상태관리
    const [errorMessage, setErrorMessage] = useState(''); //에러 메시지 상태관리
    const [disabled, setDisabled] = useState(true); //버튼의 활성화 상태관리
    const passwordRef = useRef();

    //email,password,errorMessage의 state값이 변할때마다
    //조건에 맞게 disabled의 state에 값을 세팅한다.
    useEffect(() => {
        //로그인 버튼은 이메일과 비밀번호가 입력되어있어야하고
        //오류 메시지가 없어야 활성화된다.
        setDisabled(!(email && password && !errorMessage));
    },[email,password,errorMessage])

    const _handleEmailChange = (email) => {
        //입력된 이메일의 공백이 있다면 먼저 제거한다
        const changedEmail = removeWhitespace(email);
        setEmail(changedEmail);
        setErrorMessage(
            validateEmail(changedEmail) ? '' : 'Please verify your email'
        )
    }

    const _handlePasswordChange = (password) => {
        setPassword(removeWhitespace(password));
    }

    const _handleLoginButtonPress = () => {

    }

    return(
        <KeyboardAwareScrollView
            contentContainerStyle={{flex:1}}
            extraScrollHeight={80}
            enableOnAndroid={true}
        >
            <Container>
                <Image url={images.logo} imageStyle={{borderRadius: 8}}/>
                <Input
                    ref={passwordRef}
                    label="Email"
                    value={email}
                    onChangeText={_handleEmailChange}
                    onSubmitEditing={() => passwordRef.current.focus()}
                    placeholder="Email"
                    returnKeyType="next"
                />
                <Input
                    label="Password"
                    value={password}
                    onChangeText={_handlePasswordChange}
                    onSubmitEditing={() => {}}
                    placeholder="Password"
                    returnKeyType="done"
                    isPassword
                />
                <ErrorText>{errorMessage}</ErrorText>
                <Button 
                    title="Login" 
                    onPress={_handleLoginButtonPress}
                    disabled={disabled}
                />
                <Button
                    title="Sign up"
                    onPress={() => navigation.navigate('Signup')}
                    isFilled={false}
                />
            </Container>
        </KeyboardAwareScrollView>
    )
}

export default Login;