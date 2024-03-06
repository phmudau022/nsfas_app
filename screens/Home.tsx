import { View, Text, ScrollView, ImageBackground } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import { Button } from '../components/Button';

export const Home = () => {
    return (
        <SafeAreaView className="flex flex-1 items-center bg-background">
            <View className="flex flex-row items-center mb-4">

                <View style={{ marginRight: 85 }}>
                    <FontAwesome name="user-circle" size={30} color="black" />
                </View>

                <Text className="text-2xl font-bold mr-20">Dashboard</Text>

                <View>
                    <FontAwesome name="bell" size={24} color="orange" />
                </View>

            </View>

            <ScrollView className='h-full flex-1 p-4'>

                <ScrollView className=' py-4 gap-x-4' horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ alignItems: "center" }}>
                    <View className="">

                        <View className="bg-grayTint p-4 rounded-lg w-50 h-40">
                            <Text className="text-14 font-bold mr-20">Application details</Text>
                            <Text>Enter all required fields</Text>
                        </View>

                    </View>


                    <View className="">

                        <View className="bg-grayTint p-4 rounded-lg w-50 h-40">
                            <Text className="text-14 font-bold mr-20">Upload documents</Text>
                            <Text>Documents for submission</Text>
                        </View>

                    </View>

                    <View className="">

                        <View className="bg-grayTint p-4 rounded-lg w-50 h-40">
                            <Text className="text-14 font-bold mr-20">Allowance</Text>
                            <Text>Allowance breakdown</Text>
                        </View>

                    </View>
                </ScrollView>


                <View className="flex flex-1 items-center justify-center bg-grayTint relative">
                    <ImageBackground source={require('../assets/bn.jpeg')} style={{ width: '100%', height: 200, alignItems: 'center' }} resizeMode='cover'>
                        <View className="p-4 rounded-lg">
                            <Text className="text-white text-2xl font-bold mb-2">Apply for funding now</Text>
                            <Text className="text-white text-sm">Enter your details and upload all required documents for a successful submission</Text>
                        </View>
                        <View className="absolute top-0 right-0 p-4">
                            <Button title='apply now' icon="user" action={() => { }} />
                        </View>
                    </ImageBackground>
                </View>

            </ScrollView>





        </SafeAreaView>
    );
};
