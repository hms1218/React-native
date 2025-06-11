import { createStackNavigator } from "@react-navigation/stack";
import BoardScreen from "../screens/BoardScreen";
import { NavigationContainer } from "@react-navigation/native";
import DetailScreen from "../screens/DetailScreen";
import WriteScreen from "../screens/WriteScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="카페"
                screenOptions={{
                    headerTitleAlign: 'center',
                    // cardStyle: {backgroundColor:'black'}
                }}
            >
                <Stack.Screen
                    name="카페"
                    component={BoardScreen}
                />
                <Stack.Screen
                    name="DetailScreen"
                    component={DetailScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator;