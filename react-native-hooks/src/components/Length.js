import { useMemo, useState } from "react";
import styled from "styled-components";
import Button from "./Button";

const StyledText = styled.Text`
    font-size: 24px;
`

// const getLength = text => {
//   console.log(`Target Text: ${text}`);
//   return text.length;
// };

const list = ['JavaScript','Expo','Expo','React Native'];

const Length = () => {

    const [index, setIndex] = useState(0);

    const _onPress = () => {
        setIndex(index+1);
        if(index === list.length-1){
            setIndex(0);
        }
        
        // console.log("리스트길이:",list.length);
        // console.log("인덱스:",list[index],index)
        
    }

    const length = useMemo(() => {
        console.log(`Target Text: ${list[index]}`);
        return list[index].length;
    },[list[index]]);

    return(  
        <>
            <StyledText>Index : {index}</StyledText>
            <StyledText>Text : {list[index]}</StyledText>
            <StyledText>Length : {length}</StyledText>
        
            <Button title="Get Length" onPress={_onPress}/>
        </>
        //문자열
        //해당 문자열의 길이
        //버튼(버튼을 누를 때마다 배열을 순회하면서 문자열의 길이를 구하는 기능)
    )
}

export default Length;