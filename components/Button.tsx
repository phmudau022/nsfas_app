import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'

export const Button = (props: ButtonProps) => {
    const {title, action, icon} = props;

  return (
    <Pressable className='bg-secondary  rounded-full h-fit w-48 flex items-center justify-center'
        onPress={action}
    >
        <View className=' flex flex-row items-center justify-between  h-12 w-20 '>

        {
            icon  && <AntDesign name={icon} size={15} color="white" />
        }
        <Text className='text-white font-semibold'>{title}</Text>
        </View>
    </Pressable>
  )
}

type ButtonProps = {
    title: string,
    action: () => void;
    icon?: any
}

