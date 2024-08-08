import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, StatusBar, Button, ScrollView } from "react-native";
import Slider from "../components/Slider";
import {Picker} from '@react-native-picker/picker';
import BussinesCard from "../components/BussinesCard";
import { getAllData } from "../services/business";
import Loader from "../components/Loader"
import FilterCategorie from "../components/FilterCategorie";
import DontDataToShow from "../components/DontDataToShow";
const categories = [{title:"Todos", value:"todos", icon:"google-my-business"}, 
                    {title:"Musicos", value:"Musicos", icon: "guitar-acoustic"}, 
                    {title:"Transporte", value:"Transporte", icon:"car"},
                    {title:"Restaurante", value:"Restaurante", icon:"food-variant"},
                    {title:"Servicios", value:"Servicios", icon:"tools"},
                    {title:"Mercado", value:"Mercado", icon:"shopping-outline"}
                ]

const Shop = ({navigation})=>{
    const [data, setData] = useState()
    const [filter, setFilter] = useState([])
    const [loading, setLoading] =useState(true)
    const [categorie, setCategorie] = useState("todos");
    const getData = async()=>{
        const response = await getAllData()
        setData(response.data)
        setLoading(false)
    }
    useEffect(()=>{
        getData()
    },[])
    const handleChangeCategorie = (itemValue)=>{
            setCategorie(itemValue)
            const newData = data.filter(item => item.data.categoria == itemValue)
            setFilter(newData)
    }
    return(
        <View style={styles.container}>
            <Text style={styles.mainTitle}>Mercadito Digital</Text>
<FilterCategorie filter={handleChangeCategorie} categories={categories}/>
            {/* <Button title="Explorar Mapa" color={"#436850"} onPress={()=> navigation.navigate("Mapa", {uri: "https://www.google.com/maps/d/u/0/edit?mid=1QYi5aabzXOIiaPXmiODiRikOQFkcMMc&ll=14.698233839692445%2C-90.57712591882917&z=16"})}/> */}
            <ScrollView>
                {
                    data && data.length > 0 && categorie == "todos" && data.map(item => <BussinesCard navigation={navigation} key={item.id} data={item}/>)
                }
                                {
                    data && data.length > 0 && categorie != "todos" && filter.map(item => <BussinesCard navigation={navigation} key={item.id} data={item}/>)
                }
                                                {
                    data && data.length > 0 && categorie != "todos" && filter.length == 0 && <DontDataToShow />
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
        paddingTop: StatusBar.currentHeight,
        backgroundColor: "#ffff"
    },
    mainTitle: {
        fontSize: 30,
        fontWeight: "bold",
        color:"#ADBC9F",
        margin: 10
    },
    cardContainer: {
        justifyContent: "center",
        alignItems: "center"
    }
})
export default Shop