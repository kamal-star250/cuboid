// import the library
import React, { Component } from 'react';
import { View } from 'react-native';

//import Usable components
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

//Import Drawer Page
import DrawerPage from './src/Comman/DrawerPage';

// import Files
import SplashScreen from './src/Screens/SplashScreen';
import LoginPage from './src/Screens/LoginPage';
import ForgetPassword from './src/Screens/ForgetPassword';
import OTPPage from './src/Screens/OTPPage';
import OTPPage1 from './src/Screens/OTPPage1';
import RegisterPage from './src/Screens/RegisterPage';
import FooterPage from './src/Comman/FooterPage';
import WelcomeScreen from './src/Screens/WelcomeScreen';
import PostProperties from './src/Screens/PostProperties';
import ProfilePage from './src/Screens/ProfilePage';
import EditProfile from './src/Screens/EditProfile';
import SearchFlipbook from './src/Screens/SearchFlipbook';
import ChangePassword from './src/Screens/ChangePassword';
import SavedFlipbook from './src/Screens/SavedFlipbook';
import SubscriptionPage from './src/Screens/SubscriptionPage';
import LookingHouseSteps from './src/Screens/LookingHouseSteps';
import LookingLandSteps from './src/Screens/LookingLandSteps';
import LookingHotelSteps from './src/Screens/LookingHotelSteps';
import LookingWarehouseSteps from './src/Screens/LookingWarehouseSteps';
import VisitFlipbook from './src/Screens/VisitFlipbook';
import FlipbookDiscription from './src/Screens/FlipbookDiscription';
import ThanksPage from './src/Screens/ThanksPage';
import ContactUS from './src/Screens/ContactUS';
import FAQPage from './src/Screens/FAQPage';
import NeedHelp from './src/Screens/NeedHelp';
import MySubscriptionPage from './src/Screens/MySubscriptionPage';
import Test1 from './src/Screens/Test1';
import Test2 from './src/Screens/Test2';
// import Test3 from './src/Screens/Test3';
import Modal1 from './src/Screens/Modal1';
import Modal2 from './src/Screens/Modal2';

// import Tabs
import Tabs from './src/Comman/Tabs';
import OtherPropertyTabs from './src/Comman/OtherPropertyTabs';
import DiscriptionTab from './src/Comman/DiscriptionTab';

// Create Stacks form Drawer,Appavigator,Tabs Stack
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialTopTabNavigator();

function HomeScreenStack({ navigation }) {
  return (
    <Stack.Navigator headerMode={false} initialRouteName="SplashScreen">
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="FooterPage" component={FooterPage} />
      <Stack.Screen name="LoginPage" component={LoginPage} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="OTPPage" component={OTPPage} />
      <Stack.Screen name="OTPPage1" component={OTPPage1} />
      <Stack.Screen name="RegisterPage" component={RegisterPage} />
      <Stack.Screen name="PostProperties" component={PostProperties} />
      <Stack.Screen name="ProfilePage" component={ProfilePage} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="SearchFlipbook" component={SearchFlipbook} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="SavedFlipbook" component={SavedFlipbook} />
      <Stack.Screen name="SubscriptionPage" component={SubscriptionPage} />
      <Stack.Screen name="LookingHouseSteps" component={LookingHouseSteps} />
      <Stack.Screen name="LookingLandSteps" component={LookingLandSteps} />
      <Stack.Screen name="LookingHotelSteps" component={LookingHotelSteps} />
      <Stack.Screen
        name="LookingWarehouseSteps"
        component={LookingWarehouseSteps}
      />
      <Stack.Screen name="VisitFlipbook" component={VisitFlipbook} />
      <Stack.Screen
        name="FlipbookDiscription"
        component={FlipbookDiscription}
      />
      <Stack.Screen name="FAQPage" component={FAQPage} />
      <Stack.Screen name="NeedHelp" component={NeedHelp} />
      <Stack.Screen name="ThanksPage" component={ThanksPage} />
      <Stack.Screen name="MySubscriptionPage" component={MySubscriptionPage} />
      <Stack.Screen name="ContactUS" component={ContactUS} />
      <Stack.Screen name="Test1" component={Test1} />
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="Test2" component={Test2} />
      {/* <Stack.Screen name="Test3" component={Test3} /> */}
      <Stack.Screen name="Modal1" component={Modal1} />
      <Stack.Screen name="Modal2" component={Modal2} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerPage {...props} />}>
        <Drawer.Screen
          name="HomeScreenStack"
          options={{ drawerLabel: 'Home Screen Option' }}
          component={HomeScreenStack}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

function Tab_Pages() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="VisitFlipbook"
        component={VisitFlipbook}
        options={
          {
            // tabBarLabel: 'Explore Screen',
            // tabBarIcon: ({ color, size }) => (
            //   <MaterialCommunityIcons name="settings" color={color} size={size} />
            // ),
          }
        }
      />
      <Tab.Screen
        name="OtherPropertyTabs"
        component={OtherPropertyTabs}
        options={
          {
            // tabBarLabel: 'Home Screen',
            // tabBarIcon: ({ color, size }) => (
            //   <MaterialCommunityIcons name="home" color={color} size={size} />
            // ),
          }
        }
      />
      <Tab.Screen
        name="DiscriptionTab"
        component={DiscriptionTab}
        options={
          {
            // tabBarLabel: 'Explore Screen',
            // tabBarIcon: ({ color, size }) => (
            //   <MaterialCommunityIcons name="settings" color={color} size={size} />
            // ),
          }
        }
      />
    </Tab.Navigator>
  );
}

export default App;
