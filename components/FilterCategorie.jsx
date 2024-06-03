import { Text, StyleSheet, View, ScrollView, TouchableHighlight } from 'react-native'
import React, { Component, useState } from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
const FilterCategorie = (props)=>{
    const {categories, filter} = props
    return (
        <ScrollView  horizontal showsVerticalScrollIndicator={false} style={{padding: 10, height: 200}}>
            {
                categories.map((item)=> <TouchableHighlight style={styles.option} onPress={()=> filter(item.value)} key={item.title}>
                    <>
                 <MaterialCommunityIcons name={item.icon} size={30} color="white" /> 
                 <Text style={{color: "white"}}>{item.title}</Text>                   
                    </>

             </TouchableHighlight>
                
                )
            }
        </ScrollView>
      )
}
export default FilterCategorie

const styles = StyleSheet.create({
    container: {
        
    },
    option: {
        width: 100,
        height: 100,
        borderRadius: "100%",
        backgroundColor: "#436850",
        justifyContent: "center",
        alignItems: "center",
        margin: 10
    }
})