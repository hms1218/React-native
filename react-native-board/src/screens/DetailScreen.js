//상세보기 페이지
import { Text, View } from "react-native"
import styled from "styled-components";

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`

const DetailScreen = ({navigation}) => {
    return(
        <Container>
            <Text>DetailScreen</Text>
        </Container>
    )
}

export default DetailScreen;