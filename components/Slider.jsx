import React, { useState } from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableHighlight } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
const data = [
    {
        title: "Anunciate Aqui",
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-RFril7o28C8wJuXshqBnSLDDMiJjutW9uw&usqp=CAU",
        url: "https://cdquetzalmanager.firebaseapp.com/registro"
    },
    {
        title: "Imprenta en Ciudad Quetzal",
        uri: "https://marketincloud.com/wp-content/uploads/2015/02/8283313605_278727bf2b_k.jpg",
        url: "https://imprentaenguatemala.blogspot.com/"
    },
    {
        title: "Mariachi Cristiano",
        uri: "https://mariachis-evangelicos.github.io/assets/marichi-cristiano-cumplea%C3%B1os.jpg",
        url: "https://mariachis-evangelicos.github.io/"
    }
]
const Slider = (props)=>{
    const {navigation} = props
    const [index, setIndex] = useState(0)
    const back = ()=>{
        if(index == 0){
            setIndex(data.length -1)
        }else{
            setIndex(index -1)
        }
    }
    const next = ()=>{
        if(index == data.length -1){
            setIndex(0)
        }else{
            setIndex(index +1)
        }
    }
    return(
        <View style={styles.container}> 
        <MaterialIcons name="arrow-back-ios-new" size={24} color="#363062" onPress={back}/>
        <TouchableHighlight onPress={()=> navigation.navigate("Web",  {uri: data[index].url})} style={styles.touch}>
        <ImageBackground source={{uri: data[index].uri}} resizeMode="cover" style={styles.image}>
            
            <Text style={styles.title}>{data[index].title}</Text>
            
        </ImageBackground>            
        </TouchableHighlight>

        <MaterialIcons name="arrow-forward-ios" size={24} color="#363062" onPress={next}/>
         </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: "90%",
        height: 150,
        margin: 5,
        borderRadius: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    title: {
        fontWeight: "bold",
        backgroundColor: "rgba(245, 232, 199, 0.8)",
        padding: 10,
        color: "#363062"
      },
      image: {
        flex: 1,
        justifyContent: 'space-around',
        flexDirection: "row",
        alignItems: "center",
        height: 150,
        borderRadius: 100
      },
      touch: {
        width: 500,
        flex: 1
      }
})
export default Slider