import styled from "styled-components";

const ButtonContainer = styled.Pressable`
    padding : 10px;
    background-color : skyblue;
    border-radius : 7px;
`

const ButtonText = styled.Text`
    color: #fff;
    font-size: 20px;
    font-weight: 60;
`

const MyButton = ({title,onPress}) => {
    return(
        <ButtonContainer title={title} onPress={onPress}>
            <ButtonText>{title}</ButtonText>
        </ButtonContainer>
    )
}

export default MyButton;