import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TextInput, ImageBackground, } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import axios from 'axios';
const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
class RegisterPage extends Component {
    state = {
      "firstname": "",
    "lastname":"",
    "email": "",
    "mobilenumber":'',    
    "password": "",
    "passwordConfirm": "" 

    }

    // make a function for Submit a form 
    Submit = () => {
     

        axios.post('http://192.168.137.1:4000/api/users/signup',
         {
      "firstname": this.state.firstname,
    "lastname":this.state.lastname,
    "email":this.state.email,
    "mobilenumber":this.state.mobilenumber,    
    "password": this.state.password,
    "passwordConfirm": this.state.passwordConfirm
  })
  .then((response)=>{
      console.log(response)
       const data=response.data;
    const status=data.status
    if(status == "success")
    {
        this.props.navigation.navigate('LoginPage')
    }else{
        alert('page not find')
    }
  })
  .catch(function (error) {
    console.log(error);
  });




    }

    emailValidate = () => {
        if (this.state.Email == '') {
            this.setState({ emailError: 'Email can not be empty' })
        }
        else {
            this.setState({ emailError: '' })
        }
    }


    render() {

        return (
            <View style={styles.container}>

                <ImageBackground
                    source={require('../../assets/images/SplashScreen.png')}
                    style={{
                        width: '100%',
                        height: '100%',
                        alignItems: 'center',
                    }}>



                    <ScrollView style={{ width: '100%' }}>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.LogoText}>Register with us</Text>
                        </View>
                        {/* Login area start */}
                        <View style={{ padding: 15, width: '100%' }}>

                            <TextInput
                                onChangeText={(text) => this.setState({ firstname: text })}
                                style={styles.LoginTextArea}
                                placeholder='First Name'
                                placeholderTextColor='#fff'

                            /><View style={styles.LoginTextBorder}></View>

                            {/* <Text> {this.state.First_Name}</Text> */}

                            <TextInput
                                onChangeText={(text) => this.setState({ lastname: text })}
                                style={styles.LoginTextArea}
                                placeholder='Last Name'
                                placeholderTextColor='#fff'
                            /><View style={styles.LoginTextBorder}></View>

                            <TextInput
                                onChangeText={(text) => this.setState({ mobilenumber: text })}
                                style={styles.LoginTextArea}
                                keyboardType='number-pad'
                                // maxLength={10}
                                placeholder='Phone Number'
                                placeholderTextColor='#fff'
                            /><View style={styles.LoginTextBorder}></View>
                            <TextInput
                                onChangeText={(text) => this.setState({ email: text })}
                                onBlur={() => this.emailValidate()}
                                style={styles.LoginTextArea}
                                require='@'
                                placeholder='Email'
                                keyboardType='email-address'
                                placeholderTextColor='#fff'
                            /><View style={styles.LoginTextBorder}></View>
                            <Text style={{ color: '#fff' }}>{this.state.emailError}</Text>


                            <TextInput
                                onChangeText={(text) => this.setState({ password: text })}
                                style={styles.LoginTextArea}
                                placeholder='Password'
                                placeholderTextColor='#fff'
                                secureTextEntry={true}
                            /><View style={styles.LoginTextBorder}></View>

                            <TextInput
                                onChangeText={(text) => this.setState({ passwordConfirm: text })}
                                style={styles.LoginTextArea}
                                placeholder='Confirm Password'
                                placeholderTextColor='#fff'
                                secureTextEntry={true}
                            /><View style={styles.LoginTextBorder}></View>





                            {/* Submit btn */}
                            <TouchableOpacity
                                style={styles.LoginBtnView}
                                onPress={() => this.Submit()}

                            >
                                <Text style={{ fontWeight: 'bold', fontSize: 20, fontFamily: 'Lato-Regular' }}>SIGNUP</Text>
                            </TouchableOpacity>

                            <View style={{ marginTop: 10, alignItems: 'center', }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                                    <Text style={{ color: '#fff', fontFamily: 'Lato-Regular' }}>Already have an account? </Text>

                                    <TouchableOpacity
                                        onPress={() => this.props.navigation.navigate('LoginPage')}
                                    >
                                        <Text style={{ color: '#fff', fontFamily: 'Lato-Regular' }}>LOG IN NOW</Text>

                                    </TouchableOpacity>
                                </View>


                                <View style={styles.OrView}>
                                    <View style={styles.DashLink}></View>
                                    <Text style={{ color: "#fff", fontFamily: 'Lato-Regular' }}>  OR   </Text>
                                    <View style={styles.DashLink}></View>

                                </View>
                            </View>
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
                        {/* End Login area */}





                    </ScrollView>


                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Logo: {
        width: 140,
        height: 140,
        marginTop: 20
    },
    LogoText: {
        fontSize: 30,
        fontFamily: 'Lato-Bold',
        color: '#FFA500',

        marginTop: '20%'
    },
    LoginTextArea: {
        color: '#fff',
        marginTop: 18,
        fontFamily: 'Lato-Regular'
    },
    LoginTextBorder: {
        width: '100%',
        borderWidth: 0.5,
        borderColor: '#fff',
        marginTop: -5
    },
    LoginBtnView: {
        marginTop: '15%',
        backgroundColor: '#F6D700',
        width: '100%',
        height: 40,
        borderRadius: 20,
        borderColor: '#FFA500',
        alignItems: 'center',
        justifyContent: 'center'
    },
    OrView: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
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
        marginTop: 10,

    },
    SocialIcons: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
        // marginRight: 15 

    }


});

export default RegisterPage;
