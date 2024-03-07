import React from 'react';
import { View, Text } from 'react-native';

export const TermsandCondition = () => {
  return (
    <View className="flex flex-1 items-center justify-center bg-gray-100">
      <Text className="text-lg font-bold mb-4">Terms and Conditions</Text>
      <View className="bg-white p-4 rounded-lg shadow-md w-80">
        <Text className="text-sm mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        <Text className="text-sm mb-2">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
        <Text className="text-sm mb-2">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
        <Text className="text-sm mb-2">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>
        <Text className="text-sm mb-2">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
      </View>
    </View>
  );
};

