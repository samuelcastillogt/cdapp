import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
const BussinesCard = (props)=>{
    const {navigation} = props
    return(
        <View style={styles.container}>
            <Image   source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn6vtIG9hBURhuA4ltCviUMzw51xYdJs5hQ2cgfrSyGoWeOwq0Ya12lKQ2L_zxE-VwTE8&usqp=CAU'}}
  style={{width: 100, height: 100, position: "absolute", top: -30, left: "30%", borderRadius: 100}}/>
            <View>
              <Text style={styles.title}>Nombre</Text>
            <Button title="Ver detalles" onPress={()=> navigation.navigate("Detalles")}/>              
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: "90%",
        height: 150,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 10,
        marginTop: 40,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        padding: 10,
        fontSize: 20,
        fontWeight: "bold"
    }
})
export default BussinesCard