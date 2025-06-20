import styled from "styled-components";
import { useFetch } from "../hooks/useFetch";

const StyledImage = styled.Image`
    background-color : #7f8c8d;
    width: 300px;
    height: 300px;

`

const ErrorMessage = styled.Text`
    font-size : 18px;
    color: #e74c3c;
`

const LoadingMessage = styled.Text`
    font-size : 18px;
    color: #2ecc71;
`

const URL = "https://dog.ceo/api/breeds/image/random";
const Dog = () => {
    const {data,error,inProgress} = useFetch(URL);

    
    return(
        <>
            {/* 요청중일 때 "현재 요청이 진행중입니다." 라는 문자열 출력하기 */}
            {inProgress && <LoadingMessage>현재 요청이 진행중입니다.</LoadingMessage>}
            <StyledImage source={data?.message ? {uri : data.message} : null} />
            <ErrorMessage>{error?.message}</ErrorMessage>
        </>
    )
}

export default Dog;