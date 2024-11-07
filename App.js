import Inscription from "./screens/auth/Inscription";
import Login from "./screens/auth/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Login">
    //     <Stack.Screen name="Inscription" component={Inscription} />
    //     <Stack.Screen name="Login" component={Login}  />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <Inscription />
  )
}