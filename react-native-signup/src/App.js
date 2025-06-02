import { useState } from "react"
import { Text, StatusBar,Alert } from "react-native"
import styled from "styled-components"

const Container = styled.View`
    flex: 1;
    align-items : center;
`

const BoxContainer = styled.View`
    background-color: skyblue;
    width:100%;
    height: 50px;
    justify-content: center;
    margin-top : 24px;
`

const Title = styled.Text`
    color: white;
    font-size : 20px;
    margin-left : 10px;
`

const TextContainer = styled.View`
    flex-direction : row;
    width: 80%;
    justify-content : space-between;
`

const Input = styled.TextInput`
    width: 70%;
    border-bottom-width : 1px;
    border-bottom-color : gray;
    margin-bottom : 10px;
`

const MyButton = styled.Pressable`
    padding: 10px;
    background-color: blue;
    width: 30%;
    align-items: center;
    border-radius: 5px;
`


export default App = () => {

    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [email, setEmail] = useState('');

    const sign = () => {
        if(id.trim() === ''){
            Alert.alert("아이디를 입력해주세요");
            return;
        }
        if(email.trim() === ''){
            Alert.alert("이메일을 입력해주세요");
            return;
        }

        console.log(id,email);
        Alert.alert(`입력된 아이디는 ${id}, 이메일은 ${email}`)
        setId('');
        setPw('');
        setEmail('');
    }

    return(
        <Container>
            <StatusBar backgroundColor="blue" barStyle="light-content" />
            <BoxContainer>
                <Title>SmartAppDev</Title>
            </BoxContainer>
            <Text style={{fontSize: 30, marginTop:20, marginBottom:20}}>회원가입</Text>
            <TextContainer>
                <Text>아이디</Text>
                <Input value={id} onChangeText={setId}/>
            </TextContainer>
            <TextContainer>
                <Text>비밀번호</Text>
                <Input value={pw} onChangeText={setPw}/>
            </TextContainer>
            <TextContainer>
                <Text>이메일</Text>
                <Input value={email} onChangeText={setEmail}/>
            </TextContainer>
            <MyButton onPress={() => sign()}><Text style={{color:"white"}}>가입하기</Text></MyButton>
        </Container>
        
    )
}