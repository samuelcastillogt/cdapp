import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
const data = [
    {
        title: "Primer jsjsjsjsj sjsjsjsjs",
    },
    {
        title: "Segundo",
    },
    {
        title: "Tercero",
    }
]
const Slider = ()=>{
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
            <MaterialIcons name="arrow-back-ios-new" size={24} color="black" onPress={back}/>
            <Text>{data[index].title}</Text>
            <MaterialIcons name="arrow-forward-ios" size={24} color="black" onPress={next}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: "90%",
        height: 150,
        backgroundColor: "red",
        margin: 5,
        borderRadius: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    }
})
export default Slider