import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import { connect } from 'react-redux'
import Item from './Item'

const ListItem=({items})=> {
    
    return (
        <View style={styles.container}>
            {items.map((item,i)=>{
                   return <Item key={item.id} title={item.title} id={item.id} selected={item.completed} />
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