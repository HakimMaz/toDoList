import React from 'react'
import { Text ,TouchableHighlight,StyleSheet} from 'react-native'

export default function Button({title,backgroundColor,onPress}) {
    return (
        <TouchableHighlight style={[styles.container,{backgroundColor}]} onPress={onPress}>
            <Text style={styles.title}>{title}</Text>
        </TouchableHighlight>
    )
}
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        height:40,
        width:'25%',
        //backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5
    },
    title:{
        color:'#fff'
    },
    
})
