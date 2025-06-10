import styled from "styled-components";
import { Text } from "react-native";

const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.background}
`

//넘겨받은 채널의 id와 제목을 화면에 출력해주세요.
const Channel = ({route}) => {
    return(
        <Container>
            <Text style={{fontSize: 24}}>{route.params?.id}</Text>
            <Text style={{fontSize: 24}}>{route.params?.title}</Text>
        </Container>
    )
}

export default Channel;