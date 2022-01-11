import React,{useState} from 'react'
import { View, Text,StyleSheet,TextInput, ScrollView} from 'react-native'
import Button from '../components/Button'
import ListItem from '../components/ListItem'

export default function Home() {
    const[itemLabel,setItemLabel]=useState({id:'',label:''});
    const[items,setItems]=useState([]);
  
    const addItem=()=>{
       setItems([...items,itemLabel])
    }
    return (
        <ScrollView>
        <View style={styles.container}>
            <Text style={styles.headerTitle}>My ToDo List</Text>
            <TextInput style={styles.searchInput} 
            onChangeText={(itemLabel,index)=>setItemLabel({id:index,label:itemLabel})} 
            defaultValue={itemLabel}/>
            <Button title='Submit' backgroundColor='#037dff' onPress={addItem}/>
            <ListItem items={items}/>   
            <Text style={styles.result}>Total Complete Items: {items.length}</Text>
        </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        height:'100%',
        width:'100%',
        marginTop:60,
        paddingHorizontal:20,
        alignContent:'center'
    },
    headerTitle:{
      marginBottom:10,
      fontSize:30,
      fontWeight:'bold',
      color:'#000'
    },
    searchInput:{
      borderRadius:10,
      borderWidth:1,
      borderColor:'#dddddd',
      height:60,
      width:'95%',
      backgroundColor:'#fff', 
      marginBottom:20,
      paddingHorizontal:20,
      fontSize:16
    },
    ListItem:{
    
    },
    result:{
        marginTop:20,
        marginBottom:20,
        fontSize:20,
        fontWeight:'bold',   
    }
})