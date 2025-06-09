import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{headerShown : false}}
                />
                <Stack.Screen
                    name="Signup"
                    component={SignupScreen}
                />
            </Stack.Navigator>   
        </NavigationContainer> 
    )
}

export default StackNavigation;