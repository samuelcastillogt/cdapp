
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View, Platform, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './stacks/HomeStack';
import ShopStack from './stacks/ShopStack';


///// auth
import * as WebBrowser from "expo-web-browser"
import * as Google from "expo-auth-session/providers/google"
import Trafico from './stacks/Trafico';
WebBrowser.maybeCompleteAuthSession()
// ios = 584037980083-elpcbei2utdi1quqi83ctk477avmdqs1.apps.googleusercontent.com
// android = 584037980083-itidperqsfcvctac7ttol51kamu3mmeh.apps.googleusercontent.com
const Tab = createBottomTabNavigator();
export default function App() {
  const [user, setUser] = useState()
  const [request, response, promptAsync] = Google.useAuthRequest({
    iosClientId: "584037980083-elpcbei2utdi1quqi83ctk477avmdqs1.apps.googleusercontent.com",
    androidClientId: "584037980083-itidperqsfcvctac7ttol51kamu3mmeh.apps.googleusercontent.com"
  })
  const getUserInfo = async(token)=>{
    if(!token) return
    try{
      const response = await fetch("https://www.googleapis.com/userinfo/v2/me", {
        headers: {
          Authorization:  `Bearer ${token}`
        }
      })
      const userInfo = await response.json()
      setUser(userInfo)
    }catch(err){
      console.log(err)
    }
  }
  useEffect(()=>{
    login()
  },[response])
  const login = async()=>{
    if(response?.type === "success"){
      getUserInfo(response.authentication.accessToken)
    }
  }
  return (
    <View style={styles.container}>
    {/* <Button title="login" onPress={()=> promptAsync()}/> */}
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Inicio" component={HomeStack} options={{
                                                              headerShown: false,
                                                              tabBarIcon:() => {return <FontAwesome5 name="newspaper" size={24} color="black" />}
                                                              }} />
      <Tab.Screen name="Tienda" component={ShopStack} options={{
                                                              headerShown: false,
                                                              tabBarIcon:() => {return <Fontisto name="shopping-store" size={24} color="black" />}
                                                            }} />
           <Tab.Screen name="Trafico" component={Trafico} options={{
                                                              headerShown: false,
                                                              tabBarIcon:() => {return <FontAwesome name="car" size={24} color="black" />}
                                                            }} />                                                       
    </Tab.Navigator>      
    </NavigationContainer>
    </View>
    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});
