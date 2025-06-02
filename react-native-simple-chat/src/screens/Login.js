import styled from "styled-components";
import { Text, Button } from "react-native";
import { Image } from "../components";
import { images } from "../utils/images";

const Container = styled.View`
    flex : 1;
    justify-content : center;
    align-items : center;
    background-color : ${({theme}) => theme.background};
`

const Login = ({navigation}) => {
    return(
        <Container>
            <Text style={{fontSize:30}}>Login Screen</Text>
            <Image url={images.logo} imageStyle={{borderRadius: 8}}/>
            <Button title="signup" onPress={() => navigation.navigate('Signup')} />
        </Container>
    )
}

export default Login;