import React from "react"
import { View, Text, StyleSheet, TouchableHighlight } from "react-native"
import { Ionicons } from '@expo/vector-icons';
import { constans } from "../constans";

const BlogPost = (props)=>{
    return (
        <View style={[styles.container, props.index % 2 == 0 ? styles.par : styles.primo]}>
            <TouchableHighlight onPress={()=> props.ir.navigate("Web",  {uri: props.url})}>
                <View style={styles.basicContainer}>
                 {
                    props.index % 2 == 0 ? <Ionicons name="person-circle" size={24} color={constans.colors.primary} /> :  <Ionicons name="person-circle-outline" size={24} color={constans.colors.white} />
                }
               <Text style={[styles.title, props.index % 2 == 0 ? styles.parText : styles.primoText]}>{props.title}</Text>                
                </View>

            </TouchableHighlight>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: "90%",
        padding: 10,
        margin: 10,
        borderRadius: 10,
        justifyContent: "space-around",
        alignItems: "center"
    },
    basicContainer:{
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row"
    },
    title: {
        fontWeight: "bold",
        padding: 10,
    },
    par: {
        backgroundColor: "#ADBC9F",
    },
    primo: {
        backgroundColor: "#436850",
        color: "white"
    },
    primoText:{
        color: constans.colors.white 
    },
    parText:{
        color: constans.colors.primary
    }
})
export default BlogPost