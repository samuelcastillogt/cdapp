import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
const BussinesCard = (props)=>{
    const {navigation, data} = props
    return(
        <View style={styles.container}>
            <Image   source={{uri: data.data.imagen}}
  style={{width: 100, height: 100, position: "absolute", top: -30, left: "30%", borderRadius: 100}}/>
            <View style={styles.details}>
              <Text style={styles.title}>{data.data.nombre}</Text>
            <Button title="Ver detalles" onPress={()=> navigation.navigate("Detalles", {data: data})} color={"#436850"}/>              
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 180,
        borderWidth: 1,
        borderColor: "#363062",
        borderRadius: 10,
        marginTop: 40,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ADBC9F"
    },
    title: {
        padding: 10,
        fontSize: 20,
        fontWeight: "bold"
    },
    details:{
        position: "absolute",
        bottom: 0,
        padding: 10
    }
})
export default BussinesCard