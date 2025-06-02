const prefix = 'https://firebasestorage.googleapis.com/v0/b/react-native-simple-chat-5cbc6.firebasestorage.app/o';

//복사된 주소의 쿼리 스트링에서 token부분은 제외하고 사용해야한다.
//쿼리스트링에 있는 token은 현재 로그인된 사용자에게 발급된 값이다.
//실제 사용할 때는 token이 변경될 뿐 아니라, 로그인 화면에서는
//아직 로그인 한게 아니기 때문에 token이 없는 상태로 접근이 가능해야한다.
export const images = {
    logo : `${prefix}/logo.png?alt=media`
}