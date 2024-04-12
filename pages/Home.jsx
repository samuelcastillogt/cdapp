import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, FlatList, ScrollView, StatusBar } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { getAllData } from "../services/blog";
import Loader from "../components/Loader";
import BlogPost from "../components/BlogPost";
import Slider from "../components/Slider";
import {AdManager} from 'react-native-admob-native-ads';
import { AdView } from "../components/AdView";


const Home = ({ navigation })=>{
    ////
    const [currentRoute, setCurrentRoute] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const init = async () => {
  
  
        // await AdManager.setRequestConfiguration({
        //   trackingAuthorized: true,
        // });
  
        setLoading(false);
      };
  
      init();
    }, []);
    /////
    const [posts, setPosts] = useState()
    const data = async()=>{
       const list=  await getAllData()
       setPosts(list)
    }

    useEffect(()=>{
        data()

    },[])
    // console.log(TestIds.BANNER)
    return(
        <View style={styles.container}>
            <Slider navigation={navigation}/>
            <ScrollView >
            {posts && posts.length >0 && posts.map((item, index )=> <BlogPost url={item.url} title={item.title} ir={navigation} key={item.url} index={index}/>)  }            
            </ScrollView>
            {/* <AdView  type="image" media={false} /> */}
            {/* <BannerAd unitId="ca-app-pub-5314398130823639~6785887471" /> */}
{/* 
            <View style={styles.addButon} >
            <MaterialIcons name="add-to-photos" size={40} color="#365486" onPress={()=> console.log("lalalal")}/>
            </View> */}
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