import { View, Text, TextInput, Button } from "react-native"
import Input from "./component/Input"
import styled from "styled-components"
import MyButton from "./component/MyButton"
import { useState } from "react"

const Container = styled.View`
    flex: 1;
    justify-content : center;
    align-items : center;
    background-color : #c0c0c0;
`

const ButtonContainer = styled.View`
    flex-direction : row;
    justify-content : space-between;
    width : 50%;
`

export default App = () => {

    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState("Enter numbers and select operation")

    const operation = ["+","-","*","/"];

    const calculator = (operation) => {
        console.log("num1 : " , num1, "num2 : " ,num2)
        //값이 입력이 안되어 있으면 값을 입력하세요 라고 경고 띄우기
        if(num1.trim() === '' || num2.trim() === ''){
            alert("값을 입력하세요")
            return;
        }
        //숫자가 아닐경우 숫자를 입력하세요 라고 경고 띄우기
        const number1 = Number(num1);
        const number2 = Number(num2);

        if(isNaN(number1) || isNaN(number2)){
            alert("숫자를 입력하세요")
            return;
        }
        //넘어온 연산자를 토대로 연산하기

        let res;

        switch(operation){
            case '+':
                res = number1 + number2;
                break;
            case '-':
                res = number1 - number2;
                break;
            case '*':
                res = number1 * number2;
                break;
            case '/':
                //나누기 할 때 정수를 0으로 나누려 하면, 0으로 나눌 수 없습니다 메시지 출력하기
                if(number2 === 0){
                    alert("0으로 나눌 수 없습니다.")
                    return;
                }
                res = number1 / number2;
                break;
            default:
                res = "잘못된 연산자입니다."
        }
        
        setResult(`결과 : ${res}`);

    }

    return(
        <Container>
            <Input placeholder="Enter first number" value={num1} onChangeText={setNum1}/>
            <Input placeholder="Enter second number" value={num2} onChangeText={setNum2}/>
            <Text style={{fontSize: 20}}>{result}</Text>
            <ButtonContainer>
                {operation.map((operation, index) => (
                    <MyButton key={index} title={operation} onPress={() => calculator(operation)}/>
                ))}
            </ButtonContainer>
        </Container>
    )
}