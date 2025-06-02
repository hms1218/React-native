import { useState } from "react"

//커스텀 훅
//리액트의 내장 훅들을 조합해서 재사용 가능한 로직을 하나의 함수로 분리하는 것

//1. use로 시작하는 함수 이름
export const useInput = (initialValue = '') => {
    //2. 훅 내부에서 필요한 useState, useEffect 등 사용
    const [value, setValue] = useState(initialValue);

    const onChangeText = (text) => {
        setValue(text);
    }

    //3. 값을 return으로 전달
    return {value, onChangeText};

}