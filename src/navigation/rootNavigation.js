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
import Chat from '../screens/newMessage/chat';
import Search from '../screens/myHome/search';
import Recent from '../screens/myHome/recent';
import SearchHistory from '../screens/myHome/searchHistory';
import Activity from '../screens/myLike/activity';
import Discover from '../screens/myLike/discover';
import FollowRequests from '../screens/myLike/followRequests';
import Profile from '../screens/myProfile/profile';
import Follow from '../screens/follow/index'

 const Stack = createNativeStackNavigator();
 const Tab =createBottomTabNavigator();





 const Navigation = () => {
     return (
         <NavigationContainer>
             <Stack.Navigator initialRouteName='Profile'>
                 <Stack.Screen  name="Login" component={Login}/> 
                 <Stack.Screen  name="Splash" component={Splash}/>
                 <Stack.Screen name="languageList" component={LanguageList}/>
                 <Stack.Screen  name="loginHelp" component={LoginHelp}/> 
                 <Stack.Screen options={{title: "Access your account"}} name="accessYourAccount" component={AccessYourAccount}/> 
                 <Stack.Screen  name={"SignUp"} component ={SignUp} />
                 <Stack.Screen  name={"NameAndPassword"} component ={NameAndPassword} />
                 <Stack.Screen  name={"AddYourBirthday"} component ={AddYourBirthday} />
                 <Stack.Screen  name= {"ResetPassword"} component ={ResetPassword} />
                 <Stack.Screen options={{headerShown:false}} name={"Instagram"} component ={Instagram} />
                 <Stack.Screen options={{headerShown:false}}  name={"Gallery"} component ={Gallery} />
                 <Stack.Screen  name={"NewGroup"} component ={NewGroup} />
                 <Stack.Screen  name={"Message"} component ={Message} />
                 <Stack.Screen  name={"Chat"} component ={Chat} />
                 <Stack.Screen  name={"Search"} component ={Search} />
                 <Stack.Screen  name={"Recent"} component ={Recent} />
                 <Stack.Screen  name={"SearchHistory"} component ={SearchHistory} /> 
                 <Stack.Screen  name={"Activity"} component ={Activity} />
                 <Stack.Screen  name={"Discover"} component ={Discover} />
                 <Stack.Screen  name={"FollowRequests"} component ={FollowRequests} />
                 <Stack.Screen  name={"Profile"} component ={Profile} />
                 <Stack.Screen  name={"Follow"} component ={Follow} />

            </Stack.Navigator>
         </NavigationContainer>
     );
 }

 export default Navigation;