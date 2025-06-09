import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import { Spinner } from "../components";
//Spinner.js -> 로딩화면
//로딩화면을 띄우는 여부를 Progress.js에 만들어놨다.
//전역적으로 사용하기 위해서 Context를 사용했다.
import { useContext } from "react";
import { ProgressContext, UserContext } from "../contexts/index";
import MainStack from "./MainStack";


//inProgress의 값에 따라 <Spinner /> 컴포넌트를 호출하는 코드 작성하기
//user의 uid와 email값이 존재하면 인증된 것으로 판단하고
//MainStack 네비게이션을 렌더링해보자.
//존재하지 않으면 AuthStack 네비게이션을 렌더링하자.

const Navigation = () => {

    //useContext() 훅을 통해 ProgressContext가 제공하는 것들을 받아올 수 있다.
    const {inProgress} = useContext(ProgressContext);

    const {user} = useContext(UserContext);

    return(
        <NavigationContainer>
            {(user?.email && user?.uid) ? <MainStack /> : <AuthStack />}
            {inProgress && <Spinner />}
        </NavigationContainer>
    )
}

export default Navigation;