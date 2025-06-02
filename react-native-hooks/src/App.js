import styled from "styled-components";
import Counter from "./components/Counter";
import Parent from "./components/Parent";
import Form from "./Form";
import { Button } from "react-native";
import { useState } from "react";
import ScrollEnd from "./components/ScrollEnd";
import Length from "./components/Length";
import AverageCalculator from "./components/Average";
import Dog from "./components/Dog";
import Signup from "./components/Signup";
import ChangeTheme from "./components/ChangeTheme";
import Counter2 from "./components/Counter2";
import LoginForm from "./components/LoginForm";

const Container = styled.View`
    flex : 1;
    background-color : #fff;
    justify-content: center;
    align-items: center;
`

const App = () => {

    const [title,setTitle] = useState("Hide");
    
    const hideShow = () => {
        title === 'Hide' ? setTitle('Show') : setTitle("Hide");
    }

    // const [isVisible, setIsVisible] = useState(true);

    return (
    <Container>
        {/* <Counter /> */}
        {/* <Parent /> */}
        {/* 버튼을 하나 만들고 title은 Hide, Form 안보일때는 Show
        버튼을 눌렀을 때 Form을 숨기거나, 보이게 만들기 */}
        {/* <Button title={title} onPress={hideShow}/>
        {title === "Hide" ? <Form /> : ''} */}
        {/* <Button title={isVisible ? 'Hide' : 'Show'} onPress={() => setIsVisible(prev => !prev)}/> */}
        {/* {isVisible && <Form />} */}
        {/* <ScrollEnd /> */}
        {/* <Length /> */}
        {/* <AverageCalculator /> */}
        {/* <Dog /> */}
        {/* <Signup /> */}
        {/* <ChangeTheme /> */}
        {/* <Counter2 /> */}
        <LoginForm />
    </Container>
    )
}

export default App;