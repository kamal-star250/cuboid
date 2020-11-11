import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    AsyncStorage,
    ActivityIndicator,
    ImageBackground,
} from 'react-native';
import { TouchableOpacity, ScrollView, TextInput } from 'react-native-gesture-handler';

import FooterPage from '../Comman/FooterPage';

class ProfilePage extends Component {

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={{marginBottom:20}}>
                    <View style={{ height: 150, backgroundColor: '#000' }}>
                    </View>
                    {/* <View style={{backgroundColor:'#fff'}}>
                   

                    </View> */}
                    <View style={styles.MainView}>


                        <View style={{ flexDirection: 'row', width: '100%', }} >
                            <View style={{ width: '85%', marginTop: -85, left: 30 }}>
                                <Image style={{ width: 200, height: 200, alignSelf: 'center' }} source={require('../../assets/Icons/UserProfile.png')} />
                            </View>
                            <View style={{ width: '15%' }}>
                                <TouchableOpacity>
                                    <Image style={{ width: 30, height: 30, alignSelf: 'flex-end', right: 20, top: 10 }} source={require('../../assets/Icons/ThreeDots.png')} />
                                </TouchableOpacity>
                            </View>
                        </View>


                       <View style={{height:410,backgroundColor:'RED'}}>
                       <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('EditProfile')}
                            style={styles.EditProfile}>
                            <Image style={styles.EditIcons} source={require('../../assets/Icons/EditProfile.png')} />
                            <Text style={{ left: 20,fontFamily: 'Lato-Regular' }}>Edit Profile</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('ChangePassword')}
                            style={styles.EditProfile}>
                            <Image style={styles.EditIcons} source={require('../../assets/Icons/ChangePassword.png')} />
                            <Text style={{ left: 20,fontFamily: 'Lato-Regular' }}>Change Password</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={() => this.props.navigation.navigate('SavedFlipbook')}
                        style={styles.EditProfile}>
                            <Image style={styles.EditIcons} source={require('../../assets/Icons/MySaved.png')} />
                            <Text style={{ left: 20,fontFamily: 'Lato-Regular' }}>My Saved Flipbooks</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={() =>this.props.navigation.navigate('MySubscriptionPage')}
                        style={styles.EditProfile}>
                            <Image style={styles.EditIcons} source={require('../../assets/Icons/MySubscriptions.png')} />
                            <Text style={{ left: 20,fontFamily: 'Lato-Regular' }}>My Subscription</Text>
                        </TouchableOpacity>

                        <View style={{ marginTop: 40,  }}>
                            <TouchableOpacity
                                style={styles.LoginBtnView}
                            // onPress={() => this.props.navigation.navigate('RegisterPage')}
                            >
                                <Text style={{ fontFamily: 'Lato-Bold', fontSize: 16 }}>LOG OUT</Text>
                            </TouchableOpacity>

                        </View>
                       </View>





                    </View>


                </ScrollView>
                <FooterPage
                    welcomePress={() => this.props.navigation.navigate('WelcomeScreen')}
                    subPress={() => this.props.navigation.navigate('SubscriptionPage')}
                    postPress={() => this.props.navigation.navigate('PostProperties')}
                    contPress={() => this.props.navigation.navigate('ContactUS')}
                    profilePress={() => this.props.navigation.navigate('ProfilePage')}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    EditProfile: {
        flexDirection:'row',
        width: '100%',
        padding: 10,
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginTop: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    
        elevation: 5,
    },
    MainView: {
        borderRadius: 30,
        paddingLeft: 20, paddingRight: 20,
        backgroundColor: '#f1f1f1',
        marginTop: -20
    },
    CircleView: {
        alignSelf: 'center',
        // right: 85,
        // marginTop: -70,
        height: 200,
        width: 200,
        borderRadius: 100 / 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    UserNameView: {
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center'
    },
    EditIcons: {
        width: 20, height: 20, resizeMode: 'contain'
    },


    LoginBtnView: {
        width: 200,
        backgroundColor: "#F6D700",
        alignItems: 'center',
        height: 40,
        justifyContent: 'center',
        borderRadius: 20,
        alignSelf:'center'
    },
    UpdateBtn: {
        height: 40,
        width: 100,
        backgroundColor: '#F6D700',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        alignSelf: 'flex-end'
    }

});

export default ProfilePage;
