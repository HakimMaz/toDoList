import React from 'react'
import { View, Text,StyleSheet,TextInput} from 'react-native'
import Button from '../components/Button'
import ListItem from '../components/ListItem'

export default function Home() {
    return (
        <View style={styles.container}>
            <TextInput style={styles.searchInput}/>
            <Button title='Submit' backgroundColor='#037dff'/>
            <View style={styles.ListItem}>
            <ListItem/>
            </View>     
            <Text style={styles.result}>Total Complete Items: 3</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        height:'100%',
        width:'100%',
        marginTop:100,
        paddingHorizontal:20,
        alignContent:'center'
    },
    searchInput:{
      borderRadius:10,
      borderWidth:1,
      borderColor:'#dddddd',
      height:60,
      width:'95%',
      backgroundColor:'#fff', 
      marginBottom:20
    },
    ListItem:{
    
    },
    result:{
        marginTop:20,
        fontSize:20,
        fontWeight:'bold',   
    }
})