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

import FooterPage from '../Comman/FooterPage';
// import { TextInput } from 'react-native-paper';

class SubscriptionPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
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

          <View
            style={{
              padding: 10,
              marginTop: 50,
              alignItems: 'center',
              height: 500,
            }}>
            <Text
              style={{fontSize: 16, color: '#FFA500', fontFamily: 'Lato-Bold'}}>
              BEST SUBSCRIPTION PLAN FOR YOU
            </Text>

            <View style={{marginTop: 10}}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 12,
                  fontFamily: 'Lato-Regular',
                }}>
                {' '}
                "Dear customer we charge a small fee for the cost we incur to
                veirfy items we list. after paying this ammount you shall get
                the property you are looking for directly from the seller
                without further charges. We don't charge any brockerage fee.
                Most of our properties are listed at a negotiated price to make
                sure you gt the best deal"
              </Text>
            </View>

            {/* Rent Package View start */}
            <View
              style={{
                width: '100%',
                backgroundColor: '#fff',
                height: 250,
                borderRadius: 10,
                marginTop: 40,
                padding: 20,
              }}>
              <Text
                style={{
                  alignSelf: 'center',
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: '#c0c0c0',
                  fontFamily: 'Lato-Bold',
                }}>
                Rent Package
              </Text>

              <View style={styles.PointView}>
                <Image
                  source={require('../../assets/Icons/Righticon.png')}
                  style={{width: 15, height: 15}}
                />
                <Text style={styles.Point}>
                  The point you will get in this package -1500{' '}
                </Text>
              </View>
              <View style={styles.PointView}>
                <Image
                  source={require('../../assets/Icons/Righticon.png')}
                  style={{width: 15, height: 15}}
                />
                <Text style={styles.Point}>
                  Use of points: you can use points for searching the properties
                </Text>
              </View>
              <View style={styles.PointView}>
                <Image
                  source={require('../../assets/Icons/Righticon.png')}
                  style={{width: 15, height: 15}}
                />
                <Text style={styles.Point}>
                  The value of points: 1 point per minute
                </Text>
              </View>
              <Text
                style={{
                  color: '#FFA500',
                  fontFamily: 'Lato-Bold',
                  fontSize: 20,
                  marginTop: 20,
                }}>
                Lorem ipsum dolor sit amet,
              </Text>

              <TouchableOpacity style={styles.PayBtn}>
                <Text style={{fontFamily: 'Lato-Bold'}}>Pay $1500</Text>
              </TouchableOpacity>
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
    height: '100%',
    width: '100%',
    backgroundColor: '#0f0f0f',
  },
  HeaderView: {
    // height: 130,
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
  Backimage: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
    opacity: 0.6,
  },
  SaveFlipBtn: {
    height: 40,
    width: 130,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    borderRadius: 10,
    opacity: 1.5,
  },
  OpenFlipBookBtn: {
    height: 40,
    width: 130,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F6D600',
    borderRadius: 10,
    opacity: 1.5,
  },
  PointView: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  Point: {
    color: '#FFA500',
    fontSize: 12,
    left: 10,
    fontFamily: 'Lato-Regular',
  },
  PayBtn: {
    marginTop: 55,
    borderRadius: 20,
    height: 30,
    width: 120,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F6D600',
  },
});

export default SubscriptionPage;
