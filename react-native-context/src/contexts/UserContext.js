import { useState,createContext } from "react";

const UserContext = createContext();

const UserProviders = ({children}) => {
    
    // const user = {name: 'John Doe'};
    const [state, setState] = useState(null);

    const login = () => {
        console.log("로그인")
        setState({name:'John Doe'});
        
    }

    const logout = () => {
        console.log("로그아웃")
        console.log("이름: " ,state.name)
        setState(null);
    }

    const value = {login,logout, state}

    return(
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProviders};