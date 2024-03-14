import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, StatusBar, Button, ScrollView } from "react-native";
import Slider from "../components/Slider";
import BussinesCard from "../components/BussinesCard";
import { getAllData } from "../services/business";
import Loader from "../components/Loader"
const Shop = ({navigation})=>{
    const [data, setData] = useState()
    const [loading, setLoading] =useState(true)
    const getData = async()=>{
        const response = await getAllData()
        setData(response.data)
        setLoading(false)
    }
    useEffect(()=>{
        getData()
    },[])
    return(
        <View style={styles.container}>
            <Text style={styles.mainTitle}>Mercadito Digital</Text>
            <Slider navigation={navigation}/>
            <Button title="Explorar Mapa" color={"#363062"} onPress={()=> navigation.navigate("Mapa", {uri: "https://www.google.com/maps/d/u/0/edit?mid=1QYi5aabzXOIiaPXmiODiRikOQFkcMMc&ll=14.698233839692445%2C-90.57712591882917&z=16"})}/>
            <ScrollView>
                {
                    data && data.length > 0 && data.map(item => <BussinesCard navigation={navigation} key={item.id} data={item}/>)
                }
                {
                    loading == true && <Loader />
                }
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
        color:"#363062"
    },
    cardContainer: {
        justifyContent: "center",
        alignItems: "center"
    }
})
export default Shop