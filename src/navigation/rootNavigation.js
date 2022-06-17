 import * as React from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import { createDrawerNavigator } from '@react-navigation/native'
 import { TabView, SceneMap } from 'react-native-tab-view'

import Splash from '../screens/splash';
import Login from '../screens/login';
import LanguageList from '../screens/unitedState/languageList';
import LoginHelp from '../screens/getHelpLogging/loginHelp';
import AccessYourAccount from '../screens/findYourAccount/accessYourAccount';
import SignUp from '../screens/signup';

 const Stack = createNativeStackNavigator();
 const Navigation = () => {
     return (
         <NavigationContainer>
             <Stack.Navigator initialRouteName='Splash'>
                 <Stack.Screen options={{headerShown: false}} name="Login" component={Login}/> 
                 <Stack.Screen options={{headerShown: false}} name="Splash" component={Splash}/>
                 <Stack.Screen name="languageList" component={LanguageList}/>
                 <Stack.Screen options={{headerShown: false}} name="loginHelp" component={LoginHelp}/> 
                 <Stack.Screen options={{title: "Access your account"}} name="accessYourAccount" component={AccessYourAccount}/> 
                 <Stack.Screen options={{headerShown: false}} name={"SignUp"} component ={SignUp} />
            </Stack.Navigator>
         </NavigationContainer>
     );
 }

 export default Navigation;