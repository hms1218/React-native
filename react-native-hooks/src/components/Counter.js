import { useState } from "react";
import styled from "styled-components";
import Button from "./Button";

const StyeldText = styled.Text`
    font-size: 24px;
    margin: 10px;
`

const Container = styled.View`
    flex:1;
    justify-content: center;
    align-items: center;
`

const Counter = () => {

    const [count, setCount] = useState(0);

    return(
        <Container>
            <StyeldText>Counter : {count}</StyeldText>
            <Button title={"+"} onPress={() => {setCount(prev => prev+1); setCount(prev => prev+1);}}></Button>
            <Button title={"-"} onPress={() => {setCount(prev => prev-1); setCount(prev => prev-1);}}></Button>
        </Container>
        
    )
}

export default Counter;