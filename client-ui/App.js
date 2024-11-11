import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './screens/auth/Login';
import RegisterUser from './screens/auth/RegisterUser';

const Home = () => <Text>Home</Text>
const Profile = () => <Text>Profile</Text>

export default function App() {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="RegisterUser" component={RegisterUser} options={{headerShown: false}} />
        <Drawer.Screen name="Login" component={Login} options={{headerShown: false}} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
