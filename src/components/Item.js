import React,{useState} from 'react'
import { View, Text,StyleSheet} from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import Button from './Button';
import { connect } from 'react-redux';

 const Item=({title,id,dispatch})=>{
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    const deleteItem=()=>{
        dispatch({type:'REMOVE_ITEM',id})
    }
    return (
        <View style={styles.container} >
            <View style={styles.leftSide}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={(newValue) => setToggleCheckBox(newValue)}
            />
                <Text style={styles.title}> {title}</Text>
            </View>
            <Button title='Delete' backgroundColor='red' onPress={(id)=>deleteItem(id)}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        height:100,
        width:'100%',
        backgroundColor:'#fff',
        borderColor:'#dddddd',
        borderWidth:1,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:20,
        justifyContent:'space-between'
    },
    leftSide:{
       flexDirection:'row',
       //justifyContent:'space-between'
    },
    title:{
        marginLeft:10,
        alignSelf:'center',
        fontSize:16,
        fontWeight:'bold'
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
export default connect()(Item)