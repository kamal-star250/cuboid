import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ImageBackground,
} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

class ThanksPage extends Component {
  state = {
    value: null,
  };

  render() {
    return (
      <View style={styles.container}>
        {/* Header Start */}
        <View style={styles.HeaderView}>
          <View style={styles.HeaderTextView}>
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

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('RegisterPage')}
              style={{alignItems: 'center'}}>
              <Image
                style={styles.HeaderRightIcon}
                source={require('../../assets/Icons/UserIcon.png')}
              />
              <Text
                style={{
                  color: '#FFA500',
                  fontSize: 10,
                  fontFamily: 'Lato-Regular',
                }}>
                Sign up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Header end */}

        <View style={styles.LogoMainView}>
          <Image
            style={{height: 200, width: 200, resizeMode: 'contain'}}
            source={require('../../assets/Icons/Coboid.png')}
          />
        </View>
        <View
          style={{
            alignItems: 'center',
            height: '10%',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              fontFamily: 'Lato-Bold',
            }}>
            Thanks for watching
          </Text>
          <Text style={{marginTop: 10, fontFamily: 'Lato-Regular'}}>
            See you again
          </Text>
        </View>
        <View
          style={{
            height: '18%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('SearchFlipbook')}
            style={styles.NextPageBtn}>
            <Image
              style={{width: 30, height: 30, resizeMode: 'contain'}}
              source={require('../../assets/Icons/Rightarrow.png')}
            />
          </TouchableOpacity>
        </View>

        {/* <Footer /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    height: '100%',
    width: '100%',
  },
  HeaderView: {
    width: '100%',
    height: '12%',
    padding: 20,
    backgroundColor: '#000',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  HeaderTextView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginTop: 20
  },
  HeaderText: {
    color: '#FFA500',
    fontSize: 20,
    fontFamily: 'Lato-Bold',
  },
  HeaderRightIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  BackIcon: {
    width: 20,
    height: 20,
    marginTop: 10,
    resizeMode: 'contain',
  },
  LogoMainView: {
    height: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  NextPageBtn: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    backgroundColor: '#F6D600',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ThanksPage;
