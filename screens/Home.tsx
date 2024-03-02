import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../components';
 
export const Home = () => {

    const [count, setCount] = useState<number>(0)

    const clickASction = () => {
        setCount(prev => prev + 5 * 20)
    }
    return (
        <SafeAreaView className="flex flex-1 items-center justify-center bg-background">
           <View >
                <Text className='text-xl font-bold'>Home page</Text>

                <Button title='Click me' action={clickASction} icon={"user"}/>
                <Text className='text-3xl font-semibold text-secondary'>{count}</Text>
           </View>
        </SafeAreaView>
    )
} 