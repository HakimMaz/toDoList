import React,{useState} from 'react'
import { View, Text,StyleSheet} from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import Button from './Button';
import { connect } from 'react-redux';
import {removeItem} from '../actions/todosActions'
 const Item=(props)=>{
    const [toggleCheckBox, setToggleCheckBox] = useState(props.selected);
    const deleteItem=()=>{
        props.removeItem(props.id)
    }
    return (
        <View style={styles.container} >
            <View style={styles.leftSide}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={(newValue) => setToggleCheckBox(newValue)}
            />
                <Text style={styles.title}> {props.title}</Text>
            </View>
            <Button  title='Delete' backgroundColor='red' onPress={()=>deleteItem(props.id)}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        backgroundColor:'#fff',
        borderColor:'#dddddd',
        borderWidth:1,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:20,
        paddingVertical:20,
        justifyContent:'space-around'
    },
    leftSide:{
       flexDirection:'row',
    },
    title:{
        marginLeft:10,
        alignSelf:'center',
        fontSize:16,
        fontWeight:'bold',
        flex:1,
        flexWrap:'wrap',
        maxWidth:'70%'
    },
    rightSide:{
        flexDirection:'row',
        height:40,
        width:'25%',
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5
    },
    action:{
        color:'#fff'
    },
    checkbox: {
        alignSelf: "center",
      },
})
const mapStateToProps=(state)=>({
})
export default connect(mapStateToProps,{removeItem})(Item)