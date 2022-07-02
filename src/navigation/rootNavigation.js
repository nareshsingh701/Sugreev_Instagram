 import * as React from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

 import { createDrawerNavigator } from '@react-navigation/native'
 import { TabView, SceneMap } from 'react-native-tab-view'

import Splash from '../screens/splash';
import Login from '../screens/login/login';
import LanguageList from '../screens/unitedState/languageList';
import LoginHelp from '../screens/getHelpLogging/loginHelp';
import AccessYourAccount from '../screens/findYourAccount/accessYourAccount';
import SignUp from '../screens/signup';
import NameAndPassword from '../screens/signup/namePassword/nameAndPassword';
import AddYourBirthday from '../screens/addBirthday/addYourBirthday';
import ResetPassword from '../screens/resetYourPassword/resetPassword';
import Instagram from '../screens/home/instagram';
import Gallery from '../screens/yourStory/gallery';
import NewGroup from '../screens/add/newGroup';
import Message from '../screens/messenger/message';


 const Stack = createNativeStackNavigator();
 const Navigation = () => {
     return (
         <NavigationContainer>
             <Stack.Navigator initialRouteName='Instagram'>
                 <Stack.Screen  name="Login" component={Login}/> 
                 <Stack.Screen  name="Splash" component={Splash}/>
                 <Stack.Screen name="languageList" component={LanguageList}/>
                 <Stack.Screen  name="loginHelp" component={LoginHelp}/> 
                 <Stack.Screen options={{title: "Access your account"}} name="accessYourAccount" component={AccessYourAccount}/> 
                 <Stack.Screen  name={"SignUp"} component ={SignUp} />
                 <Stack.Screen  name={"NameAndPassword"} component ={NameAndPassword} />
                 <Stack.Screen  name={"AddYourBirthday"} component ={AddYourBirthday} />
                 <Stack.Screen  name={"ResetPassword"} component ={ResetPassword} />
                 <Stack.Screen options={{headerShown:false}} name={"Instagram"} component ={Instagram} />
                 <Stack.Screen options={{headerShown:false}}  name={"Gallery"} component ={Gallery} />
                 <Stack.Screen  name={"NewGroup"} component ={NewGroup} />
                 <Stack.Screen  name={"Message"} component ={Message} />
                 
            </Stack.Navigator>
         </NavigationContainer>
     );
 }

 export default Navigation;