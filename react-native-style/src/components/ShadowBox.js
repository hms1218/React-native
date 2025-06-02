import { StyleSheet, View, Platform } from "react-native";

const ShadowBox = () => {
    return <View style={styles.shadow}></View>
}

const styles = StyleSheet.create({
    shadow:{
        backgroundColor: '#fff',
        width:200,
        height:200,
        ...Platform.select({
            ios:{
                shadowColor: '#000',
                shadowOffset: { //그림자의 위치
                    width:10,
                    height:10,
                },
                shadowOpacity: 0.5, //그림자의 투명도
                shadowRadius: 10, //그림자의 퍼짐 정도(클수록 흐려짐)
            },
            android : {
                //안드로이드 내부적으로 그림자를 나타내는 유일한 속성
                evevation : 20,
            }
        })
    }
})

export default ShadowBox;