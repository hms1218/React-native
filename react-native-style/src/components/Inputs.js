import styled from "styled-components";

//스타일드 컴포넌트 attrs를 이용해서 props로 전달된 borderColor값에 따라
//Input컴포넌트의 디자인이 변경되도록 수정해보자.
//attrs : 컴포넌트에 기본속성(default props)을 설정할 수 있게 해주는 메서드이다.
//attrs를 이용하면 스타일을 설정하는 곳에서 props의 값에 따라 컴포넌트의 속성을
//다르게 적용할 수도 있고 항상 일정한 속성을 미리 정의해놓을 수도 있다.
const StyledInput = styled.TextInput.attrs(props => ({
    placeholder: 'Enter a text...',
    placeholderTextColor: props.borderColor,
}))`
    width: 200px;
    height: 60px;
    margin: 5px;
    padding: 10px;
    border-radius: 10px;
    border: 2px;
    border-color: ${props => props.borderColor};
    font-size: 24px;
`

const Input = props => {
    return <StyledInput borderColor={props.borderColor} />
}

export default Input;