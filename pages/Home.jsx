import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, FlatList, ScrollView, StatusBar } from "react-native";
import { getAllData } from "../services/blog";
import BlogPost from "../components/BlogPost";
import Slider from "../components/Slider";


const Home = ({ navigation })=>{
  
    const [posts, setPosts] = useState()
    const data = async()=>{
       const list=  await getAllData()
       setPosts(list)
    }

    useEffect(()=>{
        data()

    },[])
    return(
        <View style={styles.container}>
            <Slider navigation={navigation}/>
            <ScrollView >
            {posts && posts.length >0 && posts.map((item, index )=> <BlogPost url={item.url} title={item.title} ir={navigation} key={item.url} index={index}/>)  }            
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 10,
        justifyContent: "center",
        paddingTop: StatusBar.currentHeight,
        backgroundColor: "#12372A"
    },
    texto: {
        color: "#0F1035",
        padding: 20,
        fontWeight: "bold",
        fontSize: 25
    },
    buton: {
        width: "80%"
    },
    addButon:{
        position: "absolute",
        bottom: 20,
        right: 10
    }
})
export default Home