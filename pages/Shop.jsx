import React from "react";
import { View, Text, StyleSheet, StatusBar, Button, ScrollView } from "react-native";
import Slider from "../components/Slider";
import BussinesCard from "../components/BussinesCard";

const Shop = ({navigation})=>{
    return(
        <View style={styles.container}>
            <Text style={styles.mainTitle}>Mercadito Digital</Text>
            <Slider />
            <Button title="Explorar Mapa" onPress={()=> navigation.navigate("Mapa", {uri: "https://www.google.com/maps/d/u/0/edit?mid=1QYi5aabzXOIiaPXmiODiRikOQFkcMMc&ll=14.698233839692445%2C-90.57712591882917&z=16"})}/>
            <ScrollView>
               <BussinesCard navigation={navigation}/> 
               <BussinesCard /> 
            </ScrollView>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        paddingTop: StatusBar.currentHeight
    },
    mainTitle: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#0F1035"
    },
    cardContainer: {
        justifyContent: "center",
        alignItems: "center"
    }
})
export default Shop