// import the library
import React, { Component } from 'react';
import { View } from 'react-native';

//import Usable components
import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';


//Import Drawer Page
import DrawerPage from './src/Comman/DrawerPage';

// import Files
import SplashScreen from './src/Screens/SplashScreen';
import LoginPage from './src/Screens/LoginPage';
import ForgetPassword from './src/Screens/ForgetPassword';
import OTPPage from './src/Screens/OTPPage';
import OTPPage1 from './src/Screens/OTPPage1'
import RegisterPage from './src/Screens/RegisterPage';
import FooterPage from './src/Comman/FooterPage';
import WelcomeScreen from './src/Screens/WelcomeScreen';
import PostProperties from './src/Screens/PostProperties';
import ProfilePage from './src/Screens/ProfilePage';
import EditProfile from './src/Screens/EditProfile'
import Modal1 from './src/Screens/Modal1';
import Modal2 from './src/Screens/Modal2';
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

// import PropertyNeighbourhood1 from './src/Screens/PropertyNeighbourhood1';
import MySubscriptionPage from './src/Screens/MySubscriptionPage';
import Test1 from './src/Screens/Test1'

// import Tabs
import Tabs from './src/Comman/Tabs';






//Create main navigator
const AppNavigator = createStackNavigator(
  {
    // Define the Screens
    SplashScreen: {
      screen: SplashScreen,
      navigationOptions: {
        headerShown: false,
        // gesturesEnabled: true
      }
    },
    RegisterPage:{
      screen:RegisterPage,
      navigationOptions:{
        headerShown:false
      }
    },
    LoginPage:{
      screen:LoginPage,
      navigationOptions:{
        headerShown:false
      }
    },
    ForgetPassword:{
      screen:ForgetPassword,
      navigationOptions:{
        headerShown:false
      }
    },
    OTPPage:{
      screen:OTPPage,
      navigationOptions:{
        headerShown:false
      }
    },
    OTPPage1:{
      screen:OTPPage1,
      navigationOptions:{
        headerShown:false
      }
    },
    FooterPage:{
      screen:FooterPage,
      navigationOptions:{
        headerShown:false
      }
    },
    WelcomeScreen:{
      screen:WelcomeScreen,
      navigationOptions:{
        headerShown:false
      }
    },
    PostProperties:{
      screen:PostProperties,
      navigationOptions:{
        headerShown:false
      }
    },
    ProfilePage:{
      screen:ProfilePage,
      navigationOptions:{
        headerShown:false
      }
    },
    EditProfile:{
      screen:EditProfile,
      navigationOptions:{
        headerShown:false
      }
    },
    Modal1:{
      screen:Modal1,
      navigationOptions:{
        headerShown:false
      }
    },
    Modal2:{
      screen:Modal2,
      navigationOptions:{
        headerShown:false
      }
    },
    SearchFlipbook:{
      screen:SearchFlipbook,
      navigationOptions:{
        headerShown:false
      }
    },
    ChangePassword:{
      screen:ChangePassword,
      navigationOptions:{
        headerShown:null
      }
    },
    SavedFlipbook:{
      screen:SavedFlipbook,
      navigationOptions:{
        headerShown:false
      }
    },
    SubscriptionPage:{
      screen:SubscriptionPage,
      navigationOptions:{
        headerShown:false
      }
    },
   LookingHouseSteps:{
      screen:LookingHouseSteps,
      navigationOptions:{
        headerShown:false
      }
    },
    LookingLandSteps:{
      screen:LookingLandSteps,
      navigationOptions:{
        headerShown:false
      }
    },
    LookingHotelSteps:{
      screen:LookingHotelSteps,
      navigationOptions:{
        headerShown:false
      }
    },

    LookingWarehouseSteps:{
      screen:LookingWarehouseSteps,
      navigationOptions:{
        headerShown:false
      }
    },
    VisitFlipbook:{
      screen:VisitFlipbook,
      navigationOptions:{
        headerShown:false
      }
    },
    FlipbookDiscription:{
      screen:FlipbookDiscription,
      navigationOptions:{
        headerShown:false
      }
    },
    ThanksPage:{
      screen:ThanksPage,
      navigationOptions:{
        headerShown:false
      }
    },
    ContactUS:{
      screen:ContactUS,
      navigationOptions:{
        headerShown:false
      }
    },
    FAQPage:{
      screen:FAQPage,
      navigationOptions:{
        headerShown:false
      }
    },
    NeedHelp:{
      screen:NeedHelp,
      navigationOptions:{
        headerShown:false
      }
    },
   
    Tabs:{
      screen:Tabs,
      navigationOptions:{
        headerShown:false
      }
    },
    MySubscriptionPage:{
      screen:MySubscriptionPage,
      navigationOptions:{
        headerShown:false
      }
    },
    Test1:{
      screen:Test1,
      navigationOptions:{
        headerShown:false
      }
    }
   
  },


//set the root for open the first screeen
  {
    initialRouteName: 'SplashScreen'

  });

  // Define Drawer 

const DrawerStack = createDrawerNavigator(
  {
    Main: AppNavigator
  },
  {
    drawerPosition: 'left',
    drawerType: 'slide',
    initialRouteName: 'Main',
    drawerWidth: 280,
    //Drawer page path
    contentComponent: DrawerPage
  }
);



export default createAppContainer(DrawerStack);


