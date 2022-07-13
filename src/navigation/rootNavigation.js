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
import Follow from '../screens/follow/index';
import Settings from '../screens/myProfile/settings';
import EditProfile from '../screens/myProfile/editProfile';
import UserName from '../screens/myProfile/userName';
import Bio from '../screens/myProfile/bio';
import FollowAndInviteFriends from '../screens/myProfile/followAndInviteFriends';
import Privacy from '../screens/myProfile/privacy';
import Security from '../screens/myProfile/security';
import Notifications from '../screens/myProfile/notifications';
import Ads from '../screens/myProfile/ads';
import Account from '../screens/myProfile/account';
import Help from '../screens/myProfile/help';
import About from '../screens/myProfile/about';
import SetTheme from '../screens/myProfile/setTheme';
import SwitchAccount from '../screens/myProfile/switchAccount';
import CreateNewAccount from '../screens/myProfile/createNewAccount';
import IndexOne from '../screens/storiesArchive/indexOne';
import YourActivity from '../screens/myProfile/yourActivity';
import Seved from '../screens/myProfile/seved';
import CloseFriends from '../screens/myProfile/closeFriends';


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
                 <Stack.Screen  name={"Settings"} component ={Settings} />
                 <Stack.Screen  name={"EditProfile"} component ={EditProfile} />
                 <Stack.Screen  name={"UserName"} component ={UserName} />
                 <Stack.Screen  name={"Bio"} component ={Bio} />
                 <Stack.Screen  name={"FollowAndInviteFriends"} component ={FollowAndInviteFriends} />
                 <Stack.Screen  name={"Privacy"} component ={Privacy} />
                 <Stack.Screen  name={"Security"} component ={Security} />
                 <Stack.Screen  name={"Notifications"} component ={Notifications} />
                 <Stack.Screen  name={"Ads"} component ={Ads} />
                 <Stack.Screen  name={"Account"} component ={Account} />
                 <Stack.Screen  name={"Help"} component ={Help} />
                 <Stack.Screen  name={"About"} component ={About} />
                 <Stack.Screen  name={"SetTheme"} component ={SetTheme} />
                 <Stack.Screen  name={"SwitchAccount"} component ={SwitchAccount} />
                 <Stack.Screen  name={"CreateNewAccount"} component ={CreateNewAccount} />
                 <Stack.Screen  name={"IndexOne"} component ={IndexOne} />
                 <Stack.Screen  name={"YourActivity"} component ={YourActivity} />
                 <Stack.Screen  name={"Seved"} component ={Seved} />
                 <Stack.Screen  name={"CloseFriends"} component ={CloseFriends} />



            </Stack.Navigator>
         </NavigationContainer>
     );
 }

 export default Navigation;