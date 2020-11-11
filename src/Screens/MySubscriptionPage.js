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
import Carousel from 'react-native-snap-carousel';
import FooterPage from '../Comman/FooterPage';

class MySubscriptionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ8q7-JkdBxysHT6BAkySV4btSwn2OQ6mpP9A&usqp=CAU',
          rent: 'RENT',
          value: '750',
          month: 'PER MONTH',
        },
        {
          image:
            'data:image/png;base64,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',
          rent: 'RENT',
          value: '750',
          month: 'PER MONTH',
        },
      ],
    };
  }
  _renderItem({item, index}) {
    return (
      <View style={{padding: 10}}>
        <View
          style={{
            backgroundColor: '#fff',
            // position:'absolute',
            alignItems: 'center',
            fontFamily: 'Lato-Regular',
            height: 250,
            width: '100%',
            borderRadius: 10,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 2,
          }}>
          <Image
            source={{uri: item.image}}
            style={{width: 40, height: 40, marginTop: 30, resizeMode: 'cover'}}
          />
          <Text
            style={{
              marginTop: 40,
              color: '#FFA500',
              fontSize: 10,
              fontFamily: 'Leto-Regular',
            }}>
            {item.rent}
          </Text>
          <Text
            style={{
              marginTop: 20,
              color: '#FFA500',
              fontSize: 30,
              fontFamily: 'Leto-Boldss',
            }}>
            ${item.value}
          </Text>
          <Text
            style={{
              marginTop: 30,
              color: '#FFA500',
              fontSize: 10,
              fontFamily: 'Leto-Regular',
            }}>
            {item.month}
          </Text>

          {/* <View style={{width:30,height:30,borderRadius:30/2,backgroundColor:'#fff',borderWidth:1,marginTop:35}}>

                </View> */}
        </View>
      </View>
    );
  }

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

          <View style={{height: 520}}>
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
                    fontWeight: 'bold',
                    left: 5,
                    marginTop: -20,
                  }}>
                  John Doe
                </Text>
              </View>

              <View style={{padding: 10}}>
                <Text>My Subscriptions</Text>
                <View style={{borderWidth: 1, top: 5}}></View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  padding: 10,
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{color: '#F6D700', fontFamily: 'Lato-Bold'}}>
                    {' '}
                    Total Points:
                  </Text>
                  <Text style={{fontFamily: 'Lato-Regular'}}>1500</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{color: '#F6D700', fontFamily: 'Lato-Bold'}}>
                    {' '}
                    Used Points:
                  </Text>
                  <Text style={{fontFamily: 'Lato-Regular'}}>750</Text>
                </View>
              </View>

              <Carousel
                autoplay
                // autoplayDelay={1000}
                layout={'default'}
                ref={(ref) => (this.carousel = ref)}
                data={this.state.carouselItems}
                sliderWidth={300}
                itemWidth={200}
                renderItem={this._renderItem}
                onSnapToItem={(index) => this.setState({activeIndex: index})}
              />

              {/* <View style={{ padding: 10,marginTop:50}}>
    <TouchableOpacity style={styles.UpdateBtn}>
        <Text>Update</Text>
    </TouchableOpacity>
</View> */}
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
    alignSelf: 'flex-end',
  },
});

export default MySubscriptionPage;
