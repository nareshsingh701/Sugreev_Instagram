 import * as React from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import { createDrawerNavigator } from '@react-navigation/native'
 import { TabView, SceneMap } from 'react-native-tab-view'

import Splash from '../screens/splash';
import Login from '../screens/login/login';
import LanguageList from '../screens/unitedState/languageList';
import LoginHelp from '../screens/getHelpLogging/loginHelp';
import AccessYourAccount from '../screens/findYourAccount/accessYourAccount';
import SignUp from '../screens/signup';
import NameAndPassword from '../screens/signup/namePassword/nameAndPassword';
import AddYourBirthday from '../screens/addYourBirthday';

 const Stack = createNativeStackNavigator();
 const Navigation = () => {
     return (
         <NavigationContainer>
             <Stack.Navigator initialRouteName='Splash'>
                 <Stack.Screen  name="Login" component={Login}/> 
                 <Stack.Screen  name="Splash" component={Splash}/>
                 <Stack.Screen name="languageList" component={LanguageList}/>
                 <Stack.Screen  name="loginHelp" component={LoginHelp}/> 
                 <Stack.Screen options={{title: "Access your account"}} name="accessYourAccount" component={AccessYourAccount}/> 
                 <Stack.Screen  name={"SignUp"} component ={SignUp} />
                 <Stack.Screen  name={"NameAndPassword"} component ={NameAndPassword} />
                 <Stack.Screen  name={"AddYourBirthday"} component ={AddYourBirthday} />
            </Stack.Navigator>
         </NavigationContainer>
     );
 }

 export default Navigation;