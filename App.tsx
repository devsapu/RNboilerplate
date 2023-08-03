import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingScreen from './src/screens/Landing';
import LoginScreen from './src/screens/users/login';
import SignInScreen from './src/screens/users/signIn';
import HomeScreen from './src/screens/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileScreen from './src/screens/MyProfile';
import MyAppointmentsScreen from './src/screens/MyAppointments';
import {
  AppointmentIcon,
  HomeIcon,
  NotificationIcon,
  ProfileIcon,
} from './assetes/icons';
import {Button, TouchableOpacity, View} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import NotificationsScreen from './src/screens/Notifications';
const Tab = createBottomTabNavigator();

function HomeTabNavigator() {
  return (
    <Tab.Navigator
  screenOptions={({route}) => ({
    tabBarIcon: ({focused, color, size}) => {
      let iconName;

      if (route.name === 'Home') {
        iconName = focused ? <HomeIcon color={color} size={size} /> : <HomeIcon color={color} size={size} />;
      } else if (route.name === 'MyAppointments') {
        iconName = focused ? <AppointmentIcon color={color} size={size} /> : <AppointmentIcon color={color} size={size} />;
      } else if (route.name === 'Profile') {
        iconName = focused ? <ProfileIcon color={color} size={size} /> : <ProfileIcon color={color} size={size} />;
      } else if (route.name === 'Notifications') {
        iconName = focused ? <NotificationIcon color={color} size={size} /> : <NotificationIcon color={color} size={size} />;
      }

      return iconName;
    },
  })}
  tabBarOptions={{
    activeTintColor: 'green',
    inactiveTintColor: 'gray',
  }}>
  <Tab.Screen name="Home" component={HomeScreen} options={{headerShown:false }}/>
  <Tab.Screen name="MyAppointments" component={MyAppointmentsScreen} options={{headerShown:false }} />
  <Tab.Screen name="Profile" component={ProfileScreen}  options={{headerShown:false }}/>
  <Tab.Screen name="Notifications" component={NotificationsScreen}  options={{headerShown:false }}/>
</Tab.Navigator>

  );
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Home" component={HomeTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
