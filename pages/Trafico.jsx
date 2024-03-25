import { View, Text, StyleSheet, StatusBar } from 'react-native'
import {WebView} from "react-native-webview"
import React from 'react'
const Trafico = ({navigation, route}) => {
  const {uri} = route.params
  return (
    <WebView
    style={styles.container}
    source={{ uri: uri }}
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