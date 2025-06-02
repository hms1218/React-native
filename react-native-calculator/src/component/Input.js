import styled from "styled-components";

const StyeldInput = styled.TextInput.attrs({
    placeholderTextColor : "#c0c0c0",
    keyboardType : "numeric"
})`
    width: 90%;
    height: 50px;
    margin-bottom: 10px;
    border : 2px;
    border-color: white;
    border-radius : 10px;
    background-color: white;
    font-size : 16px;
    
`

const Input = (props) => {
    return <StyeldInput placeholder={props.placeholder} value={props.value} onChangeText={props.onChangeText}/>
}

export default Input;