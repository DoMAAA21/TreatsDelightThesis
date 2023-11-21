import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home/index'; 
import UserScreen from '../screens/user';
import AddUserScreen from '../screens/user/addUser';
import EditUserScreen from '../screens/user/editUser';
import UserInfo from '../screens/user/userInfo';
import StoreScreen from '../screens/store/index';
import AddStoreScreen from '../screens/store/addStore';
import EditStoreScreen from '../screens/store/editStore';
import StoreInfo from '../screens/store/storeInfo';
import EmployeeScreen from '../screens/employee/index';
import AddEmployeeScreen from '../screens/employee/addEmployee';
import EditEmployeeScreen from '../screens/employee/editEmployee';
import EmployeeInfo from '../screens/employee/employeeInfo';

const Stack = createStackNavigator();

const HomeStack = () => {
 
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#b4e373', } }} >
      <Stack.Screen name="Dashboard" component={HomeScreen} options={{ headerTitle: 'Dashboard' }} />
      <Stack.Screen name="Users" component={UserScreen} options={{ headerTitle: 'Users' }} />
      <Stack.Screen name="AddUser" component={AddUserScreen} options={{ headerTitle: 'Add User' }} />
      <Stack.Screen name="EditUser" component={EditUserScreen} options={{ headerTitle: 'Edit User' }} />
      <Stack.Screen name="UserInfo" component={UserInfo} options={{ headerTitle: 'User Information' }} />
      <Stack.Screen name="Stores" component={StoreScreen} options={{ headerTitle: 'Stores' }} />
      <Stack.Screen name="AddStore" component={AddStoreScreen} options={{ headerTitle: 'Add Store' }} />
      <Stack.Screen name="EditStore" component={EditStoreScreen} options={{ headerTitle: 'Edit Store' }} />
      <Stack.Screen name="StoreInfo" component={StoreInfo} options={{ headerTitle: 'Store Information' }} />
      <Stack.Screen name="Employees" component={EmployeeScreen} options={{ headerTitle: 'Employees' }} />
      <Stack.Screen name="AddEmployee" component={AddEmployeeScreen} options={{ headerTitle: 'Add Employee' }} />
      <Stack.Screen name="EditEmployee" component={EditEmployeeScreen} options={{ headerTitle: 'Edit Employee' }} />
      <Stack.Screen name="EmployeeInfo" component={EmployeeInfo} options={{ headerTitle: 'Employee Information' }} />
    </Stack.Navigator>
  );
};

export default HomeStack;