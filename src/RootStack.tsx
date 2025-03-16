import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './screens/Splash';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import Home from './screens/Home';
import Details from './screens/Details';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {faAdd, faGear, faHome} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Settings from './screens/Settings.tsx';
import AddCredentials from './screens/AddCredentials.tsx';
import {Header} from './components';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName = faHome;
          if (route.name === 'Home') {
            iconName = faHome;
          } else if (route.name === 'AddCredentials') {
            iconName = faAdd;
          } else if (route.name === 'Settings') {
            iconName = faGear;
          }
          // @ts-ignore
          return <FontAwesomeIcon icon={iconName} size={size} color={color} />;
        },
        tabBarStyle: {backgroundColor: '#000'}, // Dark theme tab bar
        tabBarActiveTintColor: '#007bff', // Active tab color
        tabBarInactiveTintColor: 'gray', // Inactive tab color
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          header: () => <Header title={'Home'} onProfilePress={() => {}} />,
        }}
      />
      <Tab.Screen name="AddCredentials" component={AddCredentials} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={HomeTabs}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}

export default RootStack;
