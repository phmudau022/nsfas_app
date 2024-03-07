import { View, Text, ScrollView, ImageBackground, Alert } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import { Button } from '../components/Button';
import { useNavigation } from '@react-navigation/native';

export const Home = () => {
    const navigation = useNavigation();

    const handleButton = () => {
        Alert.alert(
            "Dear student",
            "Are you ready to apply for funding?",
            [
                {
                    text: "No",
                    onPress: () => console.log("User chose not to apply"),
                    style: "cancel"
                },
                {
                    text: "Yes",
                    onPress: () => {
                        console.log("User chose to apply");
                        navigation.navigate('TermsPage');
                    }
                }
            ],
            { cancelable: false }
        );
    }
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


                <View className="flex flex-col items-center justify-center bg-grayTint relative">
                    <View className="p-8 rounded-lg bg-grayTint shadow-lg max-w-md w-full">
                        <Text className="text-3xl font-bold mb-4 text-center">Apply for Funding Now</Text>
                        <Text className="text-lg mb-8 text-center">Enter your details and upload all required documents for a successful submission</Text>
                        <Button title="Apply Now" icon="user" action={handleButton} />
                    </View>
                </View>



            </ScrollView>





        </SafeAreaView>
    );
};
