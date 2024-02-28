import React from "react";
import { WebView } from 'react-native-webview'
import { StyleSheet } from "react-native";
import Loader from "../components/Loader";
const Map = ({route, navigation})=>{
    const {uri} = route.params
    return(
        <WebView
        style={styles.container}
        source={{ uri: uri }}
        renderLoading={()=> Loader}
      />
  
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1
    }
})
export default Map