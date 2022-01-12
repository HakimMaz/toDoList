import React,{useState} from 'react'
import { View, Text,StyleSheet,TextInput, ScrollView, Keyboard} from 'react-native'
import Button from '../components/Button'
import ListItem from '../components/ListItem'
import {connect} from 'react-redux'
const  Home=(props)=> {

    const[item,setItem]=useState('');
  
    const addItem=()=>{
      Keyboard.dismiss();
      if(item.length!=0){
        props.dispatch({type:'ADD_ITEM',item})
        setItem('')
      }
     
      else 
       alert('You can not add an empty item.')
    }

    return (
        <ScrollView>
        <View style={styles.container}>
            <Text style={styles.headerTitle}>My ToDo List</Text>
            <TextInput 
            style={styles.searchInput} 
            onChangeText={(item)=>setItem(item)} 
            value={item}
            />
            <Button title='Submit' backgroundColor='#037dff' onPress={addItem}/>
            <ListItem items={props.items}/>   
            <Text style={styles.result}>Total Complete Items: {props.items.length}</Text>
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
const mapStateToProps=(state)=>({
    items: state.todos.items
})
export default connect(mapStateToProps)(Home)