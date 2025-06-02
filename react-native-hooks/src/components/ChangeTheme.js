import { useToggle } from "../hooks/useToggle";
import { View, Text, Pressable } from "react-native";

export default function ChangeTheme(){

    const change = useToggle();
    // const {value, toggle} = useToggle(false);

    console.log("1:",change.value);

    return(
        <View style={{
            flex:1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff'
            }}>
            <Text style={{fontSize:24}}>현재상태 : {change.value? 'on' : 'off'}</Text>
            <Pressable 
                onPress={change.toggle}
                style={{
                    backgroundColor: change.value ? '#f1c40f' : '#95a5a6',
                    padding: 12
                }}
                ><Text style={{fontSize:18}}>{change.value ? "끄기" : "켜기"}</Text>
            </Pressable>
        </View>
    )
}

// useState를 사용해서 t / f 상태관리
// toggle 함수로 상태 반전
// components 에 ChangeTheme.js 만들기
// useToggle()을 사용해 버튼으로 상태 변경
// 현재 상태를 보여주는 텍스트만들기 ex) 현재상태 on/off
// 상태에 따라 버튼의 배경색 변경