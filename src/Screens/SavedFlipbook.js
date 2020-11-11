import {Separator} from 'native-base';
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  AsyncStorage,
  ActivityIndicator,
  ImageBackground,
  FlatList,
  Dimensions,
} from 'react-native';
import {
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native-gesture-handler';

import FooterPage from '../Comman/FooterPage';

const height = Dimensions.get('window');
const width = Dimensions.get('window');
class SavedFlipbook extends Component {
  state = {
    Data: [
      {
        id: 0,
        name: 'Flipbook1',
        FlipImage: require('../../assets/images/Group4.png'),
        DeleteImage: require('../../assets/Icons/delete.png'),
      },
      {
        id: 1,
        name: 'Flipbook2',
        FlipImage: require('../../assets/images/Group4.png'),
        DeleteImage: require('../../assets/Icons/delete.png'),
      },
      {
        id: 3,
        name: 'Flipbook3',
        FlipImage: require('../../assets/images/Group4.png'),
        DeleteImage: require('../../assets/Icons/delete.png'),
      },
      {
        id: 4,
        name: 'Flipbook4',
        FlipImage: require('../../assets/images/Group4.png'),
        DeleteImage: require('../../assets/Icons/delete.png'),
      },
      // {
      //   id: 2,
      //   name: 'Flipbook3',
      //   FlipImage: require('../../assets/images/Group4.png'),
      //   DeleteImage: require('../../assets/Icons/delete.png'),
      // },
    ],
  };
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

            <View style={{padding: 10}}>
              <Text>My saved flipbooks</Text>
              <View style={{borderWidth: 1, top: 5}}></View>
            </View>

            <FlatList
              style={{paddingBottom: 70}}
              Separator
              data={this.state.Data}
              numColumns={2}
              renderItem={({item, index, separators}) => (
                <View
                  style={{
                    width: '50%',
                    // backgroundColor: '#fff',
                    // height: 200,
                    padding: 10,
                    height: 220,

                    // backgroundColor: 'red',
                    // marginTop: 10,
                  }}>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('SearchFlipbook')
                    }>
                    <ImageBackground
                      borderRadius={5}
                      style={{
                        width: '100%',
                        height: 200,
                        resizeMode: 'contain',
                      }}
                      source={item.FlipImage}
                      // source={require('../../assets/images/Group4.png')}
                    >
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'flex-end',
                          padding: 15,
                        }}>
                        <TouchableOpacity
                          style={{
                            height: 30,
                            width: 30,
                            borderRadius: 5,
                            backgroundColor: '#fff',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <Image
                            source={item.DeleteImage}
                            style={{width: 15, height: 15}}
                          />
                        </TouchableOpacity>
                      </View>
                      <View
                        style={{
                          // alignItems: 'center',
                          width: '100%',
                          bottom: 20,
                          position: 'absolute',
                        }}>
                        <Text
                          style={{
                            textAlign: 'center',
                            color: '#fff',
                            // fontFamily: 'Leto-Bold',
                            fontSize: 16,
                          }}>
                          {item.name}
                        </Text>
                      </View>
                    </ImageBackground>
                  </TouchableOpacity>
                  {/* <View
                    style={{
                      height: 50,
                      alignItems: 'center',
                      // justifyContent: 'center',
                      backgroundColor: '#fff',
                    }}>
                    <Text style={{top: 10}}>{item.name}</Text>
                  </View> */}
                </View>
              )}
            />

            {/* <View style={{ padding: 10, marginTop: 50 }}>
                            <TouchableOpacity style={styles.UpdateBtn}>
                                <Text>Update</Text>
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
    // alignSelf: 'flex-end'
    marginLeft: '70%',
  },
});

export default SavedFlipbook;
