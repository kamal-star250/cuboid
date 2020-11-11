import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TextInput, ImageBackground } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';



class OTPPage1 extends Component {



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
                                <Text style={styles.LogoText}>Create a new password</Text>
                            </View>
                            {/* form area */}
                            <View style={{ width: "100%", marginTop: 100, padding: 10, }}>
                                <TextInput
                                    style={styles.LoginTextArea}
                                    placeholder='Enter new password'
                                    placeholderTextColor='#fff'
                                /><View style={styles.LoginTextBorder}></View>
                                <TextInput
                                    style={styles.LoginTextArea}
                                    placeholder='Confirm new password '
                                    placeholderTextColor='#fff'
                                /><View style={styles.LoginTextBorder}></View>


                                <TouchableOpacity
                                    style={styles.LoginBtnView}
                                onPress={() => this.props.navigation.navigate('LoginPage')}
                                >
                                    <Text style={{ fontFamily: 'Lato-Bold', fontSize: 20 }}>NEXT</Text>
                                </TouchableOpacity>


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
        marginTop: '20%',
        backgroundColor: '#F6D700',
        width: 150,
        height: 40,
        borderRadius: 20,
        marginLeft: '55%',
        // borderColor: '#FFA500',
        alignItems: 'center',
        justifyContent: 'center'
    },



});

export default OTPPage1;
