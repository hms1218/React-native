import styled from "styled-components";

const StyledTextInput = styled.TextInput`
    width: 80%;
    padding: 12px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 8px;
`

const CustomInput = ({
    placeholder,
    value,
    onChangeText,
    secureTextEntry
}) => {
    return(
        <StyledTextInput
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
        />   
    )
}

export default CustomInput;