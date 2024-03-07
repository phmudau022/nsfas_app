import { useState } from 'react';
import { View, Image, Text, TextInput, Pressable, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../components';
import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { Home } from './Home';
import { useNavigation } from '@react-navigation/native';


export const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email && !password) {
      Alert.alert('Please enter both email and password.');
    } else if (!email) {
      Alert.alert('Please enter your email.');
    } else if (!password) {
      Alert.alert('Please enter your password.');
    } else {
      console.log('Email:', email);
      console.log('Password:', password);

      navigation.navigate('HomePage');
    }
  };

  return (
    <SafeAreaView className='flex-1 h-screen justify-center  items-center bg-grayTint px-8 gap-y-4' >
      <Image
        source={require('../assets/logo4.png')}
        className='h100'
        resizeMode="contain"
      />

      <View className='flex flex-row items-center w-full bg-white h-12 rounded-full px-4'>
        <AntDesign name="user" size={15} color="gray" />
        <TextInput
          className='w80 h-10 px-4 flex-1'
          placeholder="Email"
          value={email}
          onChangeText={(val) => setEmail(val)}
        />
      </View>
      <View className='flex flex-row items-center mb-4 w-full bg-white h-12 rounded-full px-4'>
        <AntDesign name="user" size={15} color="gray" />
        <TextInput
          className='w80 h-10 px-4 flex-1  mb4 px4'
          placeholder="Password"
          value={password}
          onChangeText={(val) => setPassword(val)}
          secureTextEntry={true}
        />

      </View>

      <Button title='Login' icon="user" action={handleLogin} />

      <View className='flex-row justify-center'>
        <Text>Don't you have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text className='text-sky-500'>Sign in</Text>
        </TouchableOpacity>

      </View>
    
    </SafeAreaView>
  );
};
function setError(arg0: string) {
  throw new Error('Function not implemented.');
}

