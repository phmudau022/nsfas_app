import React from 'react';
import { View, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

export const Profile = () => {
    const navigation = useNavigation();

    const handleProfile = () => {
        navigation.navigate('Login');
    }

    return (
        <SafeAreaView>
            <View>
                <Text>Profile</Text>
            </View>
            <Button title='Login' onPress={handleProfile} />
        </SafeAreaView>
    );
};
