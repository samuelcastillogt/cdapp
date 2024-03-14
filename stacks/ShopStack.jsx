import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Shop from '../pages/Shop';
import Map from '../pages/Map';
import Bussines from '../pages/Bussines';
const Stack = createNativeStackNavigator()
const ShopStack = ()=>{
    return(
    <Stack.Navigator initialRouteName='Shop'>
      <Stack.Screen name="Shop" component={Shop} options={{headerShown: false}}/>
      <Stack.Screen name="Mapa" component={Map}/>
      <Stack.Screen name="Detalles" component={Bussines}/>
    </Stack.Navigator>   
    )

}
export default ShopStack