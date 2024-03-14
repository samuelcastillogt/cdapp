import React from "react";
import {View, Text, StyleSheet, Image, Dimensions} from "react-native"

const Bussines = ({navigation, route})=>{
    const {data} = route.params
    return(
        <View style={styles.container}>
            <Image source={{uri:data.data.imagen}} style={styles.imagen}/>
            <Text style={styles.title}>{data.data.nombre}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "absolute",
        bottom: 0,
        height: Dimensions.get("screen").height /1.3,
        marginTop: 20,
        backgroundColor: "#435585",
        alignItems: "center",
        padding: 20,
        width: "100%",
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        
    },
    imagen: {
        width: 200,
        height: 200,
    },
    title:{
        fontSize: 30,
        fontWeight: "bold",
        color: "white"
    }
})
export default Bussines