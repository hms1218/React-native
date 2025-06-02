import { View, Text } from "react-native";
import MyButton from "./MyComponent";
import { useState } from "react";

const Counter = () => {
    //컴포넌트에서 관리해야하는 상태가 여러개일수 있는데
    //useState를 여러번 사용하면 된다.
    const [count, setCount] = useState(0);
    const [double, setDouble] = useState(0);

    return(
        <View style={{alignItems:'center'}}>
            <Text style={{fontSize: 30, margin: 10}}>{count}</Text>
            <Text style={{fontSize: 30, margin: 10}}>{double}</Text>
            <MyButton title="+1" onPress={() => {setCount(count+1), setDouble(double+2)}}/>
            <MyButton title="-1" onPress={() => {setCount(count-1), setDouble(double-2)}}/>
        </View>
    )
}

export default Counter;