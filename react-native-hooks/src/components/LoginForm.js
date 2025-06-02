import { useReducer } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

//로그인폼을 만들어야 하는데 다음과 같은 상태가 필요하다.
//email(문자열)
//password(문자열)
//errorMessage(문자열)
//isSubmitting(논리형)
//isLoggedIn(논리형)
//상태가 많아지게 되면 관리가 복잡해지고, 로직이 흩어지게된다.

const initialValue = {
    email:'',
    password:'',
    isSubmitting: false,
    isLoggedIn: false,
    errorMessage: '',
}

const loginReducer = (state, action) => {
    switch(action.type){
        //dispatch로부터 넘겨받은 payload에 들어있는 데이터를 state에 세팅
        case "SET_EMAIL":
            return {...state, email: action.payload}
        case "SET_PASSWORD":
            return {...state, password: action.payload}
        case 'LOGIN_START':
            return {...state, isSubmitting: true, errorMessage: ''};
        case 'LOGIN_SUCCESS':
            return {...state, isSubmitting: false, isLoggedIn: true};
        case 'LOGIN_FAIL':
            return {...state, isSubmitting: false, errorMessage: action.payload};
        case 'LOGOUT':
            return {...initialValue};       
        default:
            return state;
    }
}

const LoginForm = () => {
    const [state, dispatch] = useReducer(loginReducer, initialValue);

    const handleLogin = () => {
        dispatch({type: "LOGIN_START"});

        //비동기함수
        setTimeout(() => {
            if(state.email === "test@example.com" && state.password === '1234'){
                dispatch({type:'LOGIN_SUCCESS'});
            } else{
                dispatch({type:'LOGIN_FAIL',payload:'이메일 또는 비밀번호가 틀렸습니다.'})
            }
        },1000)
    }

    return(
        <View style={styles.container}>
            {/* 
            아이디 : test@example.com, 비밀번호 '1234'
            isLoggedIn이 true면 로그인 성공! 문자열 출력하기
            false면 이메일 입력란, 비밀번호 입력란, 에러메시지, 로그인 버튼  */}
            {state.isLoggedIn ?    
            <>
            <Text style={styles.successText}>로그인 성공!</Text>
            <Button title="로그아웃" onPress={() => dispatch({type:"LOGOUT"})} />
            </>     
            :
            <>
            <TextInput 
                style={styles.input} 
                value={state.email} 
                placeholder="이메일 입력" 
                onChangeText={(text) => dispatch({type:"SET_EMAIL",payload:text})}/>
            <TextInput 
                style={styles.input} 
                value={state.password} 
                placeholder="비밀번호 입력" 
                onChangeText={(text) => dispatch({type:"SET_PASSWORD",payload:text})}/>
            {state.errorMessage && <Text style={styles.errorText}>{state.errorMessage}</Text>}
            <Button title={state.isSubmitting ? "로그인 중..." : "로그인"} onPress={handleLogin}/>
            </>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding : 20,
        marginTop: 100,
    },
    input:{
        borderWidth: 1,
        borderColor: '#aaa',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    errorText:{
        color:'red',
        marginBottom: 10,
    },
    successText:{
        fontSize: 18,
        color:'green',

    }
})

export default LoginForm;