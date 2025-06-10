//프로젝트에서 사용할 색깔을 관리
const colors = {
    white: '#fff',
    black: '#000',
    gray_0: '#d5d5d5',
    gray_1: '#a6a6a6',
    red: '#e84118',
    blue: '#3679fe',
}

export const theme = {
    //배경색
    background: colors.white,

    //글자색
    text: colors.black, 

    //이미지 관련
    imageBackground: colors.gray_0, 
    imageButtonBackground: colors.gray_1,
    imageButtonIcon : colors.white,

    //Input관련
    label: colors.gray_1, 
    inputPlaceholder: colors.gray_1,
    inputBorder: colors.gray_1,
    errorText: colors.red,
    inputDisabledBackground: colors.gray_0,

    //버튼관련
    buttonBackground: colors.blue,
    buttonTitle: colors.white,
    buttonUnFilledTitle: colors.blue,
    headerTintColor: colors.black,
    buttonLogout: colors.red,

    //Spinner
    spinnerBackground: colors.black,
    spinnerIndicator: colors.white,

    //Tab 스타일
    tabActiveColor: colors.blue,
    tabInactiveColor: colors.gray_1,
}