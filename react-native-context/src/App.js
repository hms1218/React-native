import styled from "styled-components";
import User from "./components/User";
import UserContext, { UserProvider } from "./contexts/User";
import Input from "./components/Input";
import { ThemeProvider } from "./contexts/ThemeContext";
import ThemeComponent from "./components/ThemeComponent";
import HomeScreen from "./components/HomeScreen";
import { UserProviders } from "./contexts/UserContext";
import { CartProvider } from "./contexts/CartContext";
import CartScreen from "./components/CartScreen";

const Container = styled.View`
    flex : 1;
    background-color : #fff;
    justify-content : center;
    align-items : center;
`

const App = () => {
    return (
    //Provider 컴포넌트로부터 value를 전달하는 하위 컴포넌트의 수에는 제한이 없다.
    //하지만 Consumer 컴포넌트는 가장 가까운 Provider 컴포넌트에서 값을 받으므로
    //자식 컴포넌트 중 Provider 컴포넌트가 있다면 그 중간에 있는 내용을 사용한다.
    // <UserProvider>
    //     <Container>
    //         <User />
    //         <Input />
    //     </Container>
    // </UserProvider>

    // <ThemeProvider>
    //     <ThemeComponent />
    // </ThemeProvider>

    // <UserProviders>
    //     <HomeScreen />
    // </UserProviders>

    <CartProvider>
        <CartScreen />
    </CartProvider>
    )
}

export default App;