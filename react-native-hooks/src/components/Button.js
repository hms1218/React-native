import styled from "styled-components";

const Container = styled.Pressable`
    background-color: #3498db;
    border-radius: 15px;
    padding: 15px 30px;
    margin: 10px 0px;
    justify-content: center;
`

const Title = styled.Text`
    font-size: 24px;
    font-weight: 600;
    color: #fff;
`

//함수형 컴포넌트
//함수안에서 해결할 수 없는 내용을 매개변수로 받아서 해결을 하고 있다.
const Button = ({title,onPress}) => {
    return(
        <Container onPress={onPress}>
            <Title>{title}</Title>
        </Container>
    )
}

export default Button;