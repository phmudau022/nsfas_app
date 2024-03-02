import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { BottomNavigator } from './components';

const Stack = createNativeStackNavigator();

export default function Layout() {
  return (
    <Stack.Navigator>
        <Stack.Screen 
            name='Bottom Navigator'
            component={BottomNavigator}
            options={{headerShown: false}}
        />
    </Stack.Navigator>
  )
}



