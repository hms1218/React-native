//4. 사용하기 위해서 import 한다.
import { useInput } from "../hooks/useInput";
import { TextInput, Text, View } from "react-native";

export default function Signup(){
    //5. 훅 호출
    const name = useInput(); //name = {value, onChangeText}
    const email = useInput();

    return(
        <View>
            <TextInput placeholder="이름" value={name.value} onChangeText={name.onChangeText}/>
            <TextInput placeholder="이메일" value={email.value} onChangeText={email.onChangeText}/>
            <Text>{`입력된 이름 : ${name.value}`}</Text>
            <Text>{`입력된 이메일 : ${email.value}`}</Text>
        </View>
    )
}