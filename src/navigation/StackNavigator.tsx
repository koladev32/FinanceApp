import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import {icon, primary1} from "../helpers/colors";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MyTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused}) => {
                    let iconName: string;
                    let colorName: string;
                    if (route.name === 'Home') {
                        iconName = 'ios-home-sharp';
                        colorName = !focused ? icon : primary1;
                    } else if (route.name === 'Profile') {
                        iconName = 'md-person';
                        colorName = !focused ? icon : primary1;
                    } else if (route.name === 'Chart') {
                        iconName = 'stats-chart';
                        colorName = !focused ? icon : primary1;
                    } else if (route.name === 'Wallet') {
                        iconName = 'ios-card';
                        colorName = !focused ? icon : primary1;
                    }

                    // You can return any component that you like here!
                    return <Icon name={iconName} color={colorName} type={'ionicon'} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: primary1,
                inactiveTintColor: icon,
                style: { borderTopColor: 'white', paddingVertical: '3%' },
            }}
        >
            <Tab.Screen options={{ title: `` }} name="Home" component={HomeScreen} />
            <Tab.Screen options={{ title: `` }} name="Chart" component={HomeScreen} />
            <Tab.Screen options={{ title: `` }} name="Wallet" component={HomeScreen} />
            <Tab.Screen options={{ title: `` }} name="Profile" component={HomeScreen} />
        </Tab.Navigator>
    );
};

const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{
                    title: ``,
                    headerStyle: {
                        height: 0,
                        borderBottomWidth: 0.5,
                        borderBottomColor: 'black',
                        borderStyle: 'solid',
                    },
                }}
                name="Tabs"
                component={MyTabs}
            />
        </Stack.Navigator>
    );
};

export default StackNavigator;
