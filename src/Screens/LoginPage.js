import Axios from 'axios';
import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TextInput, ImageBackground, AsyncStorage } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios'

import { Checkbox } from 'react-native-paper';


// const [checked, setChecked] = React.useState(false);

class LoginPage extends Component {

  constructor() {
    super()
    this.state = {
      data:'',
      isSelected: false,
      setSelection: true,
      checked: false,

    "email": "",  
    "password": ""


    }
  }

  LoginIn = async () => {
   
    
    // console.log({
    // "email": this.state.email,  
    // "password": this.state.password
    // })

    Axios.post('http://192.168.0.148:4000/api/users/login',
    {
    "email": this.state.email,  
    "password": this.state.password
    }
    ).then(async (response)=>{
      // console.log(response)
      const fulldata = response.data
      const status = fulldata.status
      const token = fulldata.token

   

      /////  TERIEVE TOKEN FROM ASYNCSTORAGE ///////
// try { const token =  await AsyncStorage.getItem('token') ; console.log(token) } catch(e){console.log(e)}

      /////  TERIEVE TOKEN FROM ASYNCSTORAGE ///////


      console.log(status,'Api is running')

      if(status=='success'){
           try { await AsyncStorage.setItem('token', token) } catch(e){console.log(e)}
        this.props.navigation.navigate('WelcomeScreen',)
      }
else{
  alert('page not found')
}

      // var data = response;
      // console.log(data.status)

    }).catch(function(error){
      console.log(error)
    })

    
  }
 

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={{ width: '100%', height: '100%', }}
          source={require('../../assets/images/SplashScreen.png')}>

          <View style={{ width: '100%', height: '100%', }}>
            <ScrollView>
              <View style={{ width: '100%', }}>
                <Image style={styles.Logo} source={require('../../assets/Icons/Coboid.png')} />
                <Text style={styles.LogoText}>Login with us</Text>
              </View>
              {/* form area */}
              <View style={{ width: "100%", marginTop: 50, padding: 10, }}>
                <TextInput
                  onChangeText={(text) => this.setState({ email: text })}
                  style={styles.LoginTextArea}
                  placeholder='Email or Phone number'
                  placeholderTextColor='#fff'
                /><View style={styles.LoginTextBorder}></View>

                <TextInput
                  onChangeText={(text) => this.setState({ password: text })}
                  style={styles.LoginTextArea}
                  placeholder='Password'
                  placeholderTextColor='#fff'
                  secureTextEntry={true}
                /><View style={styles.LoginTextBorder}></View>
                <View style={{ flexDirection: 'row', marginTop: 15, alignItems: 'center' }}>
                  <Text style={{ color: '#fff', fontFamily: 'Lato-Regular' }}>Remember Me</Text>
                  <Checkbox
                    uncheckedColor='#fff'
                    status={this.state.checked ? 'checked' : 'unchecked'}
                    onPress={() => {
                      this.setState({ checked: !this.state.checked })
                    }}
                  />
                </View>
                <TouchableOpacity
                  style={styles.LoginBtnView}
                  onPress={()=>this.LoginIn()}
                  // onPress={() => this.props.navigation.navigate('WelcomeScreen')}
                >
                  <Text style={{ fontFamily: 'Lato-Bold', fontSize: 20 }}>LOGIN</Text>
                </TouchableOpacity>
                {/* <View style={{ flexDirection: 'row', alignItems:'center',justifyContent:'center', marginTop:10,width:'100%'}}>

                  <Text style={{ color: '#fff', fontFamily: 'Lato-Regular' }}>Don't have an account? </Text>

                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('RegisterPage')}
                  >
                    <Text style={{ color: '#fff', fontFamily: 'Lato-Regular' }}>SIGN UP NOW</Text>

                  </TouchableOpacity>
                </View> */}
                <View style={{ marginTop: '5%', alignItems: 'center', }}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('ForgetPassword')}
                  >
                    <Text style={{ color: '#fff', fontFamily: 'Lato-Regular' }}>Forgot Password</Text>


                  </TouchableOpacity>
                  <View style={styles.OrView}>
                    <View style={styles.DashLink}></View>
                    <Text style={{ color: "#fff", fontFamily: 'Lato-Regular' }}>  OR   </Text>
                    <View style={styles.DashLink}></View>

                  </View>
                </View>
                {/* Social Icons */}
                <View style={styles.FacebookView} >
                  <TouchableOpacity
                    style={{ padding: 10 }}
                  //  onPress={() =>this.props.navigation.navigate('RegisterPage')}
                  >
                    <Image style={styles.SocialIcons} source={require('../../assets/Icons/Facebook1.png')} />
                  </TouchableOpacity>
                  <TouchableOpacity style={{ padding: 10 }}>
                    <Image style={styles.SocialIcons} source={require('../../assets/Icons/Gmail.png')} />
                  </TouchableOpacity>
                </View>
              </View>

            </ScrollView>
          </View>



        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Logo: {
    width: 140,
    height: 140,
    marginTop: 30,
    alignSelf: 'center'
  },
  LogoText: {
    fontSize: 30,
    fontFamily: 'Lato-Bold',
    color: '#FFA500',
    // fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 30
  },
  LoginTextArea: {
    color: '#fff',
    marginTop: 10,
    fontFamily: 'Lato-Regular'
  },
  LoginTextBorder: {
    width: '100%',
    borderWidth: 0.5,
    borderColor: '#fff',
    marginTop: -5
  },
  LoginBtnView: {
    marginTop: '10%',
    backgroundColor: '#F6D700',
    width: '100%',
    height: 40,
    borderRadius: 20,
    // borderColor: '#FFA500',
    alignItems: 'center',
    justifyContent: 'center'
  },
  OrView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '5%',
    alignItems: 'center'
  },
  DashLink: {
    borderWidth: 1,
    borderColor: '#fff',
    width: 50, height: 1
  },
  FacebookView: {
    flexDirection: 'row',
    justifyContent: "center",
    padding: 10
  },
  SocialIcons: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    // marginRight: 15 

  }


});

export default LoginPage;
