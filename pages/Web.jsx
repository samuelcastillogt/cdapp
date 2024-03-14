import React from "react";
import { WebView } from 'react-native-webview'
import { StyleSheet } from "react-native";
import Loader from "../components/Loader";
const Web = ({route, navigation})=>{
    const {uri} = route.params
    return(
        <WebView
        style={styles.container}
        source={{ uri: uri.replace("http:", "https:") }}
        renderLoading={()=> Loader}
        originWhitelist={['*']}
      />
  
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1
    }
})
export default Web