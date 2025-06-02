import { createContext, useState } from "react";

//1. createContext 함수를 호출해 새로운 Context를 생성한다.
//Context의 값을 수정해 Context를 사용하는 컴포넌트에 변경된 내용을 반영해보자.
const UserContext = createContext({
    user : {name: ''}, //기본 사용자 이름을 빈 문자열로 설정
    dispatch : () => {} //기본 'dispatch'는 빈 함수로 설정
});

const UserProvider = ({children}) => {
    const [name, setName] = useState("Beomjun Kim");

    //전역적으로 관리하려고 하는 데이터
    const value = {user: {name}, dispatch: setName};

    return (
        //Provider 컴포넌트의 value 속성으로 전역으로 관리하고자 하는 데이터를 전달
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

const UserConsumer = UserContext.Consumer;

export {UserProvider,UserConsumer};
export default UserContext;