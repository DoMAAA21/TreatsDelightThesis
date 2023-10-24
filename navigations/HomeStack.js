import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home/index'; 


const Stack = createStackNavigator();

const HomeStack = () => {
 
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#b4e373', } }} >
      <Stack.Screen name="Dashboard" component={HomeScreen} options={{ headerTitle: 'Dashboard' }} />
  
      
      
      
    </Stack.Navigator>
  );
};

export default HomeStack;