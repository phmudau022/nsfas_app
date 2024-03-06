import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../components';
import { useNavigation } from '@react-navigation/native';


export const SignupScreen = () => {
    const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [Idnumber, setIdnumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const handleSignup = () => {
    if (!email || !Idnumber || !password || !confirmPassword) {
      Alert.alert('Please fill in all fields.');
        return;
    }
    else if (!email) {
      Alert.alert('Please enter your email.');
    
      
  }
   else if (!Idnumber || Idnumber.length !== 13 || isNaN(parseInt(Idnumber))) {
        Alert.alert('Please enter a valid 13-digit ID number.');
        return;
    }

    else if (!password) {
        Alert.alert('Please enter your password.');
        return;
    }

    else if (!confirmPassword) {
        Alert.alert('Please confirm your password.');
        return;
    }

    else if (password !== confirmPassword) {
        Alert.alert('Passwords do not match.');
        return;
    }
    console.log('Email:', email);
    console.log('Idnumber:', Idnumber);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);

    navigation.navigate('Login');
};


  return (
    <SafeAreaView className='flex-1 h-screen justify-center items-center bg-grayTint px-8 gap-y-4'>
      
      <View className='w-80 items-center'>
        <TextInput
          className='w-full bg-white h-12 rounded-full px-4 mb-4'
          placeholder="Email"
          value={email}
          onChangeText={(val) => setEmail(val)}
        />
        <TextInput
          className='w-full bg-white h-12 rounded-full px-4 mb-4'
          placeholder="Idnumber"
          value={Idnumber}
          onChangeText={(val) => setIdnumber(val)}
          secureTextEntry={true}
          
        />
        <TextInput
          className='w-full bg-white h-12 rounded-full px-4 mb-4'
          placeholder="Password"
          value={password}
          onChangeText={(val) => setPassword(val)}
          secureTextEntry={true}
        />

        <TextInput
          className='w-full bg-white h-12 rounded-full px-4 mb-4'
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={(val) => setConfirmPassword(val)}
          secureTextEntry={true}
        />
        <Button title='SignUp' icon="user" action={handleSignup} 
        />

        
        <View className='flex-row justify-center'>
          <Text>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text className='text-blue-500'>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
