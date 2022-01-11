import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import { connect } from 'react-redux'
import Item from './Item'

const ListItem=({items})=> {
    
    return (
        <View style={styles.container}>
            {items.map((item)=>{
                   return <Item key={item.id} title={item.label} />
            })}
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


export default ListItem