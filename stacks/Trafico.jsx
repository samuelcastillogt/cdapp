import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TraficOptions from '../pages/TraficOptions';
import Trafic from '../pages/Trafico';
const Stack = createNativeStackNavigator()
const Trafico = ()=>{
    return(
    <Stack.Navigator initialRouteName='Inicio'>
      <Stack.Screen name="Inicio" component={TraficOptions} options={{headerShown: false}}/>
      <Stack.Screen name="Mapa" component={Trafic} options={{headerShown: false}}/>
    </Stack.Navigator>   
    )

}
export default Trafico