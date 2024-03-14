import { View, Text, StyleSheet, StatusBar } from 'react-native'
import {WebView} from "react-native-webview"
import React from 'react'
const Trafico = () => {
  return (
    <WebView
    style={styles.container}
    source={{ uri: "https://ul.waze.com/ul?ll=14.67266161%2C-90.57356800&navigate=yes&zoom=17&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location" }}
    renderLoading={()=> Loader}
    originWhitelist={['*']}
  />
  )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: StatusBar.currentHeight
    }
})
export default Trafico