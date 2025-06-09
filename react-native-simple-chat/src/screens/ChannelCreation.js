//채널 화면으로 이동할 수 있는 버튼을 가진 간단한 채널 생성 화면
import styled from "styled-components";
import { Text, Button } from "react-native";

const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.background}
`

const ChannelCreation = ({navigation}) => {
    return(
        <Container>
            <Text style={{fontSize: 24}}>ChannelCreation</Text>
            <Button title="Channel" onPress={() => navigation.navigate('Channel')} />
        </Container>
    )
}

export default ChannelCreation;