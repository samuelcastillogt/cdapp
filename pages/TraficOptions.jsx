import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, StatusBar, Button, ScrollView, TouchableHighlight } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {routes} from "../services/traficOption"
const TaficOption = ({navigation})=>{
    return(
        <View style={styles.container}>
            <Text style={styles.mainTitle}>Estado del trafico en tiempo real</Text>

            
            <ScrollView>
                {
                    routes.map(item => <TouchableHighlight key={item.nombre} onPress={()=> navigation.navigate("Mapa", {uri: item.uri})} style={styles.button}><Text style={styles.text}><MaterialCommunityIcons name="map-marker" size={24} color="#F5E8C7" /> Hacia {item.nombre}</Text></TouchableHighlight>)
                }
            </ScrollView>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: "#F5E8C7"
    },
    mainTitle: {
        fontSize: 30,
        fontWeight: "bold",
        color:"#363062",
        marginBottom: 20
    },
    cardContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    button:{
        margin: 10,
        padding: 10,
        backgroundColor: "#435585",
        borderRadius: 10,
        height: 100,
        alignItems: "center",
        justifyContent: "center"
    },
    text:{
        color: "#F5E8C7",
        fontSize: 20,
        fontWeight: "bold"
    }
})
export default TaficOption