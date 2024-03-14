import React from "react"
import { View, Text, StyleSheet, TouchableHighlight } from "react-native"
import { Ionicons } from '@expo/vector-icons';

const BlogPost = (props)=>{
    return (
        <View style={[styles.container, props.index % 2 == 0 ? styles.par : styles.primo]}>
            <TouchableHighlight onPress={()=> props.ir.navigate("Web",  {uri: props.url})}>
                <View style={styles.basicContainer}>
                 {
                    props.index % 2 == 0 ? <Ionicons name="person-circle" size={24} color="black" /> :  <Ionicons name="person-circle-outline" size={24} color="white" />
                }
               <Text style={styles.title}>{props.title}</Text>                
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
        padding: 10
    },
    par: {
        backgroundColor: "#818FB4",
    },
    primo: {
        backgroundColor: "#435585",
        color: "white"
    }
})
export default BlogPost