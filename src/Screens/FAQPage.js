import React, { Component } from 'react';
import {StyleSheet,View,Text, Image} from 'react-native';
import { TouchableOpacity, ScrollView, TextInput } from 'react-native-gesture-handler';

import FooterPage from '../Comman/FooterPage';

class  FAQPage  extends Component {

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={{marginBottom:60}}>
                <View style={{ height: 220,backgroundColor:"#ffffff" ,padding:10}}>
                        <Image style={{width:200,height:200,resizeMode:'contain',alignSelf:'center'}} source={require('../../assets/Icons/FAQ_PAGE.png')} />
                    </View>
                
                    <View style={styles.MainView}>

                        <View style={{ padding: 10,top:10 }}>
                            <Text style={{fontFamily:'Lato-Regular'}} >FAQ</Text>
                            <View style={{ borderWidth: 1, top: 5 }}></View>
                        </View>
                       <View style={{top:10}}>
                       <TextInput
                            style={styles.EditProfile}
                            placeholder='Lorem ipsum dolor sit amet,conseteture'
                            placeholderTextColor='#000'

                        />
                       </View>
                       <View style={{top:10}}>
                       <TextInput
                            style={styles.EditProfile}
                            placeholder='Lorem ipsum dolor sit amet,conseteture'
                            placeholderTextColor='#000'

                        />
                        </View>
                         <View style={{top:10}}>
                       <TextInput
                            style={styles.EditProfile}
                            placeholder='Lorem ipsum dolor sit amet,conseteture'
                            placeholderTextColor='#000'

                        />
                        </View>
                        <View style={{top:10}}>
                       <TextInput
                            style={styles.EditProfile}
                            placeholder='Lorem ipsum dolor sit amet,conseteture'
                            placeholderTextColor='#000'

                        />
                        </View>
                        <View style={{top:10}}>
                       <TextInput
                            style={styles.EditProfile}
                            placeholder='Lorem ipsum dolor sit amet,conseteture'
                            placeholderTextColor='#000'

                        />
                        </View>

                        {/* <View style={{ padding: 10,marginTop:50}}>
                            <TouchableOpacity style={styles.UpdateBtn}>
                                <Text style={{fontFamily: 'Lato-Regular'}}>Update</Text>
                            </TouchableOpacity>
                        </View> */}
                        

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
        width: '100%',
        padding: 10,
        height: 40,
        fontFamily: 'Lato-Regular',
        backgroundColor: '#fff',
        borderRadius: 10,
        marginTop: 20,
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
        height:450,
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
        borderRadius: 20
    },
    UpdateBtn:{
        height: 40, 
        width: 100,
        backgroundColor: '#F6D700', 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 20,
        // alignSelf:'flex-end'
        marginLeft:'70%'
    }

});

export default FAQPage;
