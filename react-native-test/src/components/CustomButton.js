import styled from "styled-components";

const StyledButton = styled.Pressable`
    width: 80%;
    padding: 14px;
    background-color: ${({backgroundColor}) => backgroundColor || '#3498db'};
    margin: 10px 0;
    border-radius: 8px;
    align-items: center;
`

const StyledText = styled.Text`
    font-size: 18px;
    color: white;
`

const CustomButton = ({
    title,
    onPress,
    backgroundColor
}) => {
    return(
        <StyledButton
            onPress={onPress}
            backgroundColor={backgroundColor}
        >
            <StyledText>{title}</StyledText>
        </StyledButton>
    )
}

export default CustomButton;