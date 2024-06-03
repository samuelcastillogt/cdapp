import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DontDataToShow = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>No existen negocios para esta categoria</Text>
    </View>
  )
}

export default DontDataToShow

const styles = StyleSheet.create({
    container:{
        height: 300,
        backgroundColor: "#436850",
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        borderRadius: 10,
        padding: 10
    },
    title:{
        fontSize: 30,
        color: "white",
        textAlign: "center"
    }
})