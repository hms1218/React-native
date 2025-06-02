import { StyleSheet } from "react-native";

export const viewStyles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'
    }
})

export const textStyles = StyleSheet.create({
    text:{
        padding:10,
        fontSize:26,
        fontWeight:'600',
        color:'black'
    },
    error:{
        fontWeight:'400',
        color:'red'  
    }
})

export const box_styles = StyleSheet.create({
    container : {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding : 20,
        backgroundColor : '#f5f5f5'
    },
    title:{
        fontSize:18,
        marginBottom:20
    },
    box_container : {
        width:200,
        height:200,
        backgroundColor:'#ddd',
        alignItems:'center',
        justifyContent:'center',
        marginBottom:20,
    },
    box:{
        width:50,
        height:50,
        backgroundColor:'#3498db',
        alignItems:'center',
        justifyContent:'center',
        margin: 5,
    },
    boxText:{
        color:'#fff',
        fontSize:18,
    },
    buttons:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%'
    }
})