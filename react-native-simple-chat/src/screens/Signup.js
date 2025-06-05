import styled from "styled-components";
import { Alert, Text } from "react-native";
import { Image, Input, Button } from "../components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { validateEmail, removeWhitespace } from "../utils/common";
import { useEffect, useRef, useState } from "react";
import { images } from "../utils/images";
import { signup } from "../utils/firebase";

const Container = styled.View`
    flex: 1;
    justify-content : center;
    align-items: center;
    background-color: ${({theme}) => theme.background};
    padding: 20px 10px;
`

const ErrorText = styled.Text`
    align-items: flex-start;
    width: 90%;
    height: 20px;
    margin-bottom: 10px;
    line-height: 20px;
    color: ${({theme}) => theme.errorText};
`

const Signup = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [disabled, setDisabled] = useState(true);

    //프로필사진 이미지 URL
    const [photoURL, setPhotoURL] = useState(images.photo);

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    //조건에 맞지 않을 때 에러문구를 렌더링
    // - 이름이 비어있을 때 -> Please Enter your name
    // - 이메일 형식이 맞지 않을 때 -> Please verify your email
    // - 비밀번호의 길이가 6보다 작을 때 -> The Password must contain 6 characters at least.
    // - 비밀번호와 비밀번호확인이 일치하지 않을 때 -> Password need to match!
    // - 모든 조건이 맞을 때 -> ''

    useEffect(() => {
        if(!name){
            setErrorMessage('Please Enter your name')
        } else if(!validateEmail(email)){
            setErrorMessage('Please verify your email')
        } else if(password.length < 6){
            setErrorMessage('The Password must contain 6 characters at least.')
        } else if(password != passwordConfirm){
            setErrorMessage('Password need to match!')
        } else{
            setErrorMessage('')
        }
    },[name,email,password,passwordConfirm])

    //조건에 따라 버튼 활성화/비활성화 하기
    useEffect(() => {
        setDisabled(
            !(name && email && password && passwordConfirm && !errorMessage)
        )
    },[name,email,password,passwordConfirm,errorMessage])

    const _handleSignupButtonPress = async() => {
        try {
            const user = await signup({email,password,name,photoURL})
            console.log(user);
            Alert.alert('Signup Success',user.email);
        } catch (error) {
            Alert.alert("Signup Error", error.message)
        }
    }

    return(
        <KeyboardAwareScrollView
            // contentContainerStyle={{flex:1}}
            extraScrollHeight={120}
            enableOnAndroid={true}
        >
            <Container>
                <Image 
                    rounded 
                    url={photoURL}
                    showButton
                    onChangeImage={
                        url => setPhotoURL(url)
                    }
                />
                <Input
                    label="Name"
                    value={name}
                    onChangeText={text => setName(text)}
                    onSubmitEditing = {() => {
                        setName(name.trim());
                        emailRef.current.focus();
                    }}
                    onBlur = {() => setName(name.trim())}
                    placeholder="Name"
                    returnKeyType="next"
                />
                <Input
                    ref={emailRef}
                    label="Email"
                    value={email}
                    onChangeText={text => setEmail(removeWhitespace(text))}
                    onSubmitEditing={() => passwordRef.current.focus()}
                    placeholder="Email"
                    returnKeyType="next"
                />
                <Input
                    ref={passwordRef}
                    label="Password"
                    value={password}
                    onChangeText={(text) => setPassword(removeWhitespace(text))}
                    onSubmitEditing={() => passwordConfirmRef.current.focus()}
                    placeholder="Password"
                    returnKeyType="done"
                    isPassword
                />   
                <Input
                    ref={passwordConfirmRef}
                    label="PasswordConfirm"
                    value={passwordConfirm}
                    onChangeText={(text) => setPasswordConfirm(removeWhitespace(text))}
                    onSubmitEditing={_handleSignupButtonPress}
                    placeholder="PasswordConfirm"
                    returnKeyType="done"
                    isPassword
                />           
                <ErrorText>{errorMessage}</ErrorText>
                <Button 
                    title="Sign up"
                    onPress={_handleSignupButtonPress}
                    disabled={disabled}
                />
            </Container>
        </KeyboardAwareScrollView>
    )
}

export default Signup;