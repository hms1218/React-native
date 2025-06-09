// BottomTab 네비게이터 생성
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { ChannelList, Profile } from "../screens"

const Tab = createBottomTabNavigator();

const MainTab = () => {
    return(
        //Channel List, Profile 컴포넌트를 Screen으로 갖도록 설정
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tab.Screen 
                name="Channel List" 
                component={ChannelList}
            />
            <Tab.Screen 
                name="Profile" 
                component={Profile} 
            />
        </Tab.Navigator>
    )
}

export default MainTab;