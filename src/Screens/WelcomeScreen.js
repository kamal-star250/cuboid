import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import FooterPage from '../Comman/FooterPage';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class WelcomeScreen extends Component {
  state = {
    mainimage: [
      {
        index: 'house',
        imageurl: require('../../assets/images/LookFurnished.jpg'),
        content: 'Looking for a house to let,\n    buy or Fullyfurnished? ',
      },
      {
        index: 'hotel',
        imageurl: require('../../assets/images/LookHotel.jpg'),
        content: 'Looking for a Hotel?',
      },
      {
        index: 'land',
        imageurl: require('../../assets/images/LookHouse.jpg'),
        content: 'Looking for Land and Plot?',
      },
      {
        index: 'warehouse',
        imageurl: require('../../assets/images/WareHouse.jpeg'),
        content:
          'Looking for a Commercial  space\n     or a  go-down/warehouse?',
      },
    ],
  };
  GoNextPage = (value) => {
    // console.log(index);
    if (value == 'hotel') {
      this.props.navigation.navigate('LookingHotelSteps');
    }
    if (value == 'house') {
      this.props.navigation.navigate('LookingHouseSteps');
    }
    if (value == 'land') {
      this.props.navigation.navigate('LookingLandSteps');
    }
    if (value == 'warehouse') {
      this.props.navigation.navigate('LookingWarehouseSteps');
    }
  };
  render() {
    
    return (
      <View style={styles.container}>
        {/* Header View */}
        
        <View
          style={{
            height: '10%',
            width: '100%',
            backgroundColor: '#000',
            flexDirection: 'row',
            padding: 20,
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
          }}>
          <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
            <Image
              style={{height: 20, width: 20, resizeMode: 'contain'}}
              source={require('../../assets/Icons/Drawer1.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('RegisterPage')}
            style={{alignItems: 'center'}}>
            <Image
              style={{height: 20, width: 20, resizeMode: 'contain'}}
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
        <View
          style={{
            height: '90%',
          }}>
          <FlatList
            // persistentScrollbar={true}
            showsVerticalScrollIndicator={true}
            data={this.state.mainimage}
            numColumns={1}
            renderItem={({item}) => (
              <View style={{paddingHorizontal: 10}}>
                <TouchableOpacity
                  onPress={() => this.GoNextPage(item.index)}
                  style={{marginTop: 10}}>
                  <ImageBackground
                    borderTopLeftRadius={10}
                    borderTopRightRadius={10}
                    source={item.imageurl}
                    style={{
                      height: windowHeight - 120,
                      width: '100%',
                      overflow: 'hidden',
                    }}>
                    <View
                      style={{
                        position: 'absolute',
                        bottom: 100,
                        width: '100%',
                      }}>
                      <Text
                        style={{
                          textAlign: 'center',
                          color: '#fff',
                          fontSize: 22,
                          fontFamily: 'Lato-Bold',
                          alignSelf: 'center',
                        }}>{
                          this.state.Token
                        }
                        {item.content}
                      </Text>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>

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
    backgroundColor: '#f2f2f2',
  },
  DrawerIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginTop: 10,
  },
  HeaderText: {
    color: '#FFA500',
    fontSize: 20,
    fontFamily: 'Lato-Bold',
    marginTop: 20,
  },
  HeaderView: {
    height: 80,
    padding: 20,
    backgroundColor: '#000',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  FooterView: {
    height: '10%',
    bottom: 0,
    position: 'absolute',
    backgroundColor: '#fff',
    padding: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});

export default WelcomeScreen;
