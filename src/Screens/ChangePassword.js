import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  AsyncStorage,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';
import {
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native-gesture-handler';

import FooterPage from '../Comman/FooterPage';

class ChangePassword extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{height: 150, backgroundColor: '#000'}}>
            <View style={{flexDirection: 'row', padding: 15}}>
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    marginTop: 10,
                    resizeMode: 'contain',
                  }}
                  source={require('../../assets/Icons/backarrow.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          {/* <View style={{backgroundColor:'#fff'}}>
                   

                    </View> */}
          <View style={styles.MainView}>
            <View style={{flexDirection: 'row', width: '100%'}}>
              <View style={{width: '85%', marginTop: -85, left: 30}}>
                <Image
                  style={{width: 200, height: 200, alignSelf: 'center'}}
                  source={require('../../assets/Icons/UserProfile.png')}
                />
              </View>
              <View style={{width: '15%'}}>
                <TouchableOpacity>
                  <Image
                    style={{
                      width: 30,
                      height: 30,
                      alignSelf: 'flex-end',
                      right: 20,
                      top: 10,
                    }}
                    source={require('../../assets/Icons/ThreeDots.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.UserNameView}>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'Lato-Bold',
                  left: 5,
                  marginTop: -20,
                }}>
                John Doe
              </Text>
            </View>

            <View style={{height: 420}}>
              <View style={{padding: 10}}>
                <Text>Change Password</Text>
                <View style={{borderWidth: 1, top: 5}}></View>
              </View>
              <TextInput
                style={styles.EditProfile}
                placeholder="Current Password"
                placeholderTextColor="#000"
              />
              <TextInput
                style={styles.EditProfile}
                placeholder="New Password"
                placeholderTextColor="#000"
              />
              <TextInput
                style={styles.EditProfile}
                placeholder="Confirm New Password"
                placeholderTextColor="#000"
              />
              {/* <TextInput
                            style={styles.EditProfile}
                            placeholder='John@deo.in'
                            placeholderTextColor='#000'

                        /> */}

              <View style={{padding: 10, marginTop: 50}}>
                <TouchableOpacity style={styles.UpdateBtn}>
                  <Text style={{fontFamily: 'Lato-Regular'}}>Update</Text>
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
    width: '100%',
    padding: 10,
    height: 40,
    fontFamily: 'Lato-Regular',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 30,
    shadowColor: '#000',
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
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#f1f1f1',
    marginTop: -20,
  },
  CircleView: {
    alignSelf: 'center',
    // right: 85,
    // marginTop: -70,
    height: 200,
    width: 200,
    borderRadius: 100 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  UserNameView: {
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
  },
  EditIcons: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },

  LoginBtnView: {
    width: 200,
    backgroundColor: '#F6D700',
    alignItems: 'center',
    height: 40,
    justifyContent: 'center',
    borderRadius: 20,
  },
  UpdateBtn: {
    height: 40,
    width: 100,
    backgroundColor: '#F6D700',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    // alignSelf:'flex-end'
    marginLeft: '70%',
  },
});

export default ChangePassword;
