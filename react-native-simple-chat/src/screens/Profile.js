import styled from "styled-components";
import { Button, Text } from "react-native";
import { logout } from "../utils/firebase";
import { UserContext } from "../contexts";
import { useContext } from "react";

const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.background}
`

const Profile = () => {

    const {dispatch} = useContext(UserContext);

    const _handleLogoutButtonPress = async () => {
        try {
            await logout();
        } catch (error) {
            console.log(`[profile] logout : ${error.message}`)
        } finally {
            dispatch({})
        }
    }

    return(
        <Container>
            <Text style={{fontSize:24}}>Profile</Text>
            <Button title="logout" onPress={_handleLogoutButtonPress} />
        </Container>
    )
}

export default Profile