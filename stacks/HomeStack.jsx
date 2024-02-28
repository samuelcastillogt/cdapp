import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import Web from '../pages/Web';
const Stack = createNativeStackNavigator()
const HomeStack = ()=>{
    return(
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
      <Stack.Screen name="Web" component={Web} />
    </Stack.Navigator>   
    )

}
export default HomeStack