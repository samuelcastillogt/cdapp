import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Shop from '../pages/Shop';
import Map from '../pages/Map';
const Stack = createNativeStackNavigator()
const ShopStack = ()=>{
    return(
    <Stack.Navigator initialRouteName='Shop'>
      <Stack.Screen name="Shop" component={Shop} options={{headerShown: false}}/>
      <Stack.Screen name="Mapa" component={Map}/>
    </Stack.Navigator>   
    )

}
export default ShopStack