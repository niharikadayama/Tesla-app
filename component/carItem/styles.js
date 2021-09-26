import { StyleSheet,Dimensions } from "react-native";

const styles = StyleSheet.create({
    carContainer:{
        width:'100%',
        height:Dimensions.get('window').height,
        
      },
      titles:{
        marginTop: '30%',
        width:'100%',
        alignItems:'center',
      },
      title:{
        fontSize:40,
        fontWeight:'500'
      },
      subTitles:{
        fontSize:16,
        color:'#5c5e62'
      },
      imagee:{
        width:'100%',
        height:'100%',
        resizeMode:'cover',
        position:'absolute'
      },
      buttonContainer:{
        position:'absolute',
        bottom:50,
        width: '100%'
      },
      subTitlesCta:{
        fontWeight:'500',
        textDecorationLine:'underline'
      }
})

export default styles;