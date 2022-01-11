import React from 'react'
import { View, Text } from 'react-native'

export default function Button({title}) {
    return (
        <View style={StyleSheet.container}>
            <Text style={StyleSheet.title}>{title}</Text>
        </View>
    )
}
