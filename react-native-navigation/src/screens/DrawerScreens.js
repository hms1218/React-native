import { View, Text, StyleSheet, Button, Pressable, Image } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";

const HomeScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>HomeScreen</Text>
        </View>
    )
}

const ProfileScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Profile Screen</Text>
        </View>
    )
}

const CustomDrawer = (props) => {
    return(
        <View style={{flex:1}}>
            {/* 드로어 메뉴 스크롤 영역 */}
            <DrawerContentScrollView
                {...props}
                contentContainerStyle={{backgroundColor:'4#CAF50'}}>
                    {/* 프로필 영역 */}
                    <View style={styles.profileContainer}>
                        <Image
                            source={{uri:"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODEwMDNfMTIx%2FMDAxNTM4NDk1NzQ1Nzc5.CoQN_-o2F9sDE0VIJU0abjeV1EFLlwURWHs0rtzTymQg.bOlNPonomjedD0PzdgfEmfcx1pux0fMolNxCRLdjk6kg.GIF.hi_kon%2FIPON_%252870%2529.gif&type=sc960_832_gif"}}
                            style={styles.profileImage}
                        />
                        <Text style={styles.profileName}>홍길동</Text> 
                        <Text style={styles.profileEmail}>one@korea.com</Text>
                    </View>

                    {/* 기본 제공되는 드로어 메뉴 */}
                    <View style={{flex:1, backgroundColor:'#fff', paddingTop: 10}}>
                        <DrawerItemList {...props} />
                    </View>
                </DrawerContentScrollView>

                {/* 하단 고정 로그아웃 버튼 */}
                <View style={styles.logoutContainer}>
                    <Pressable onPress={() => alert('로그아웃')}>
                        <Text style={styles.logoutText}>로그아웃</Text>
                    </Pressable>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f9f9f9'
    },
    title:{
        fontSize: 24,
        marginBottom: 20,
    },
    profileContainer:{
        padding: 20,
        alignItems: 'center',
    },
    profileImage:{
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 10,
    },
    profileName:{
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
    },
    profileEmail: {
        color: '#000',
        fontSize: 14,
    },
    logoutContainer:{
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
    },
    logoutText:{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#e53935',
    }
})

export {HomeScreen, ProfileScreen, CustomDrawer};