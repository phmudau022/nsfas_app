import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BottomNavigator } from './components';
import { Home, LoginScreen, SignupScreen } from './screens';


const Stack = createNativeStackNavigator();

export default function Layout() {
  return (
    <Stack.Navigator>


      <Stack.Screen
        name='Login'
        component={LoginScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name='Bottom Navigator'
        component={BottomNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='SignUp'
        component={SignupScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='HomePage'
        component={Home}
        options={{ headerShown: false }}
      />



    </Stack.Navigator>
  )
}



