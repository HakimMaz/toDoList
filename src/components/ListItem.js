import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import Item from './Item'

export default function ListItem() {
    return (
        <View style={styles.container}>
           <Item/>
           <Item/>
           <Item/>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        width:'98%',
        backgroundColor:'#fff',
        marginTop:20
    }
})