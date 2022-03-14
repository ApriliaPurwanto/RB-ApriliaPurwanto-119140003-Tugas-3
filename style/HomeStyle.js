import {
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    header:{
        backgroundColor:'#FF7F50',
        height:30,
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    background:{
        backgroundColor:'#FF7F50',
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        height:630,
    },
    title:{
        color:'white',
        paddingBottom:40,
        fontSize:25,
        fontWeight:'bold',
    },
    box:{
        backgroundColor:'white',
        borderRadius:20,
        width:'80%',
        height:400,
        color:'black',
        paddingBottom:40,
        paddingLeft:20,
    },
    text:{
        fontSize:15,
        paddingBottom:10,
        paddingTop:15,
        fontWeight:'bold',
        color:'black',
    },
    TextInput:{
        borderWidth:1,
        width:'93%',
        borderRadius:20,
        color:'black',
        padding:10,
    },
    cari:{
        color:'white',
        width:'93%',
        paddingTop:35,
        borderRadius:20,
    },
    copyright:{
        color:'white', 
        paddingTop:70,
    },
});

export default styles;