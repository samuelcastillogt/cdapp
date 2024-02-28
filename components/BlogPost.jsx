import React from "react"
import { View, Text, StyleSheet, TouchableHighlight } from "react-native"

const BlogPost = (props)=>{
    return (
        <View style={styles.container}>
            <TouchableHighlight onPress={()=> props.ir.navigate("Web",  {uri: props.url})}>
               <Text style={styles.title}>{props.title}</Text> 
            </TouchableHighlight>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: "80%",
        padding: 10,
        backgroundColor: "#7FC7D9",
        margin: 10,
        borderRadius: 10
    },
    title: {
        color: "white",
        fontWeight: "bold",
        padding: 10
    }
})
export default BlogPost