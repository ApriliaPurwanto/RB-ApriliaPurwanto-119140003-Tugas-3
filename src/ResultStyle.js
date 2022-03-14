import React from 'react';
import {
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    header:{
        backgroundColor:'#FF7F50',
        height:45,
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    title:{
        backgroundColor:'#FF7F50',
        height:90,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        color:'white',
    },
    textTitle:{
        color:'white',
        fontSize:25,
        fontWeight:'bold',
    },
    card:{
        flexDirection:'row',
        padding:10,
    },
    flexView:{
        flex:1,
    },
    copyright:{
        color:'#FF7F50', 
        paddingTop:300,
        paddingLeft:90,
    },
    notfound:{
        flexDirection:'row',
        padding:10,
        justifyContent:'center',
    },
    flexdetail:{
        flex:1,
    }
});

export default styles;