//import liraries
import React, { Component } from 'react';
import { View,StyleSheet, TouchableOpacity, ImageBackground,Image, I18nManager , AsyncStorage,TextInput} from 'react-native';
import {Title, Button,Text,ActivityIndicator,Colors} from 'react-native-paper';
import {connect} from 'react-redux';
import { getPhotos, getArticles, getProduct} from './actions/Product.action';
import { getUsers } from './actions/User.action'
import { bindActionCreators } from 'redux';
import {  ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen'
import SafeAreaView from 'react-native-safe-area-view';
import RNRestart from 'react-native-restart'; 
import axios from 'axios';
const URL = `https://digimonk.co/medplus/admin/App-api`;
// create a component
class LoginScreen extends Component {

    constructor(props){
        super(props)
        this.state={
          
          mobileNo:"",
          Otp:"",
          loading:false
        }   
      }
  
    async componentDidMount(){
        
        var user=await AsyncStorage.getItem('userId')
        if(user!==null){
            this.props.navigation.navigate("Home")
        }

      
    }


   async RTL(){
        
        AsyncStorage.setItem('lang',"en")
       
       var value = await AsyncStorage.getItem('lang');

       if(value=="ar"){
        I18nManager.forceRTL(true);
        RNRestart.Restart();
       }
       else{
        I18nManager.forceRTL(false);
        RNRestart.Restart();
       }
        
    }


    LogIn=()=>{
        this.setState({
            loading:true
            })
        axios({
            method: 'post',
            url: URL+'/otp_sendtomobile_login',
            data: {
            mobile_number:this.state.mobileNo,
            // userType:"user"
            }
            }).then((response) => {
    
            console.log(response.data)
            var data=response.data
            if(data.message==1){
                // this.setState({
                //     Otp:data.opt_number,
                //     visibleModal: 'fancy' 
                // })
                this.props.navigation.navigate("OTPScreen",{OTP:data.opt_number,mobileNo:this.state.mobileNo, type:"login" })
                this.setState({
                    loading:false
                    })

            }
            else{
                alert(data.error_msg)
                this.setState({
                    loading:false
                    })
            }
            // this.setState( { data:response.data });
            
            }).catch((error) => {
            console.error(error);
            });
          }

          renderModalContent = () => (
            <View style={styles.content}>
              <Text style={styles.contentTitle}>OTP</Text>
              <View style={{width:"100%", marginLeft:20, marginRight:20, justifyContent:"center"}}>
                  <Text style={{fontSize:20, letterSpacing:5,fontFamily:"Raleway-Regular"}}>{this.state.Otp}</Text>
              <TouchableOpacity onPress={this.OtpScreen}><Text>
              OK</Text></TouchableOpacity>
              </View>
             
              
            </View>
          );
          
          OtpScreen=()=>{
            this.props.navigation.navigate("OTPScreen")
            this.setState({ visibleModal: null })
          }
          


    
    render() {
        return (

            <SafeAreaView style={{backgroundColor:"#e22034"}}>
                
                {
                    this.state.loading?<View style={{width:"100%",justifyContent:"center", alignItems:"center", height:"100%"}}>
                      <Image source={require('../../assets/Loader.gif')} style={{width:200, height:200, resizeMode:"contain"}} />
              </View>:<ImageBackground source={require('../../assets/screen_meds.png')} style={{width: '100%', height: '100%',resizeMode: 'cover', padding:20 }}>
             
                <View style={styles.container}>
                {/* <Title style={styles.title}>Sign In</Title> */}
                <ImageBackground source={require('../../assets/screen-2.png')} style={{width: "100%", height:"100%", resizeMode: 'contain', justifyContent:"center" }}>
                   
                <View style={styles.logincontainer}>
                       <View style={{width:"100%",flexDirection:"row", justifyContent:"space-between"}}>

                           <TouchableOpacity onPress={()=>this.props.navigation.navigate("Home")}>
                               <Text style={{color:"#e22034", fontFamily:"Raleway-Regular", fontSize:16}}>Skip</Text>
                           </TouchableOpacity>
                           <Image source={require('../../assets/LOFO.png')} style={{width:100, height:40, resizeMode:"contain"}} /> 


                       </View>  
                       <View style={{width:"100%", marginTop:10}}>
                           <Text style={{fontSize:38,fontFamily:"Raleway-Regular"}}>Login</Text>
                           <Text>Get Access your order, 
                               <Text style={{color:"#e22034",fontFamily:"Raleway-Regular"}}> medicine</Text> & 
                               <Text style={{color:"#e22034", fontFamily:"Raleway-Regular"}}>doctor consultation</Text>
                            </Text>
                            <View style={{width:"100%", marginTop:10}}>
                            <View style={[styles.inputContainer, {flexDirection:"row"}]}>
                                  <Text>+965</Text>
                                    <TextInput style={styles.input}
                                        placeholder="Mobile Number"
                                        keyboardType="email-address"
                                        underlineColorAndroid="transparent"
                                        onChangeText={(mobileNo) => this.setState({mobileNo})}/>
                            </View>
                            </View>
                            <View style={{flexDirection:"row", alignItems:"center", width:"100%", justifyContent:"center"}}>
                            <Text><Text style={{color:"#e22034",fontFamily:"Raleway-Regular"}}>Dont't Have An Account?</Text></Text>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate("Registration")} style={{marginLeft:5}}>
                                <Text>SignUp Now</Text>
                            </TouchableOpacity>
                            </View>
                         
                            <View style={{width:"100%", margin:10, justifyContent:"center", flexDirection:"row"}} >
                               <TouchableOpacity style={{width:40, height:40, margin:20}}
                               onPress={this.RTL} > 
                                  <Image source={require('../../assets/facebook.png')} style={{width:40, height:40 }} />
                               </TouchableOpacity>
                               <Image source={require('../../assets/twitter.png')} style={{width:40, height:40, margin:20 }} />
                               <Image source={require('../../assets/google.png')} style={{width:40, height:40, margin:20 }} />
                            </View>

                            <TouchableOpacity
                              style={{width:"100%"}}
                              onPress={this.LogIn}>
                                <Image source={require('../../assets/button.png')} style={{width:"100%", height:40, resizeMode:"contain"}} />
                            </TouchableOpacity >

                       </View>
                       

                    </View>

                </ImageBackground>
                {/* <Image source={require('../../assets/screen-2.png')} style={{width:"100%", height:"100%"}} /> */}
               
            </View>
 
                
            </ImageBackground>
                }
            </SafeAreaView>
            
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: '#ffffff',
        // padding:20,
        // height:"100%"
        width:"100%",
        height:"100%",
        borderRadius:20,
        // backgroundColor:"#000",
        overflow:"hidden"
    },
    logincontainer:{
        
        height:"100%",
        flex:1,
        margin:20,
        marginTop:65,
        padding:10
    },
    input:{

        height:45,
        // marginLeft:16,
        backgroundColor: '#FFFFFF',
        flex:1,
        marginLeft:10

    },
    inputContainer: {
        // borderBottomColor: '#F5FCFF',
        backgroundColor: '#fff',
        borderRadius:5,
        height:45,
        marginBottom:30,
        marginTop:20,
        flexDirection: 'row',
        alignItems:'center',
        borderBottomColor:"#e22034",
        borderBottomWidth:2
    },
    title:{
        alignItems:"flex-start",
        color:"#64d",
        fontWeight:"bold",
        fontSize:30
    },
    secondContainer:{
        margin:12,
    },
    loginbutton:{
        width:"100%",
        borderRadius:10,
        borderWidth:2
    },
    facebookbutton:{
        width:350,
        borderRadius:10,
        borderWidth:2
    },
    ortext:{
        marginTop:10,
        marginBottom:10,
        fontSize:20
    },
    thridContainer:{
        justifyContent:"center",
        alignItems:"center"
    }

});

function mapStateToProps(state){
    console.log(state)
    return {
        data:state.data
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({getPhotos, getArticles, getUsers, getProduct},dispatch);
}

//make this component available to the app
export default connect(mapStateToProps,mapDispatchToProps)(LoginScreen)