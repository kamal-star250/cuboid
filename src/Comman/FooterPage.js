import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import PropTypes from 'prop-types';

// import {withNavigation} from 'react-navigation'
import soundImg from '../../assets/Icons/Home.png';
import muteImg from '../../assets/Icons/Home1.png';

class FooterPage extends Component {
  constructor() {
    super();
    this.state = {showSoundImg: true};
  }
  renderImage = () => {
    var imgSource = this.state.showSoundImg ? soundImg : muteImg;
    return <Image style={{height: 25, width: 25}} source={imgSource} />;
  };
  render() {
    return (
      <View>
        <View style={styles.FooterView}>
          {/* <TouchableOpacity
            onPress={() =>
              this.setState({showSoundImg: !this.state.showSoundImg})
            }>
            {this.renderImage()}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              this.setState({showSoundImg: !this.state.showSoundImg})
            }>
            <View style={{alignItems: 'center'}}>
              {this.renderImage()}
              <Text
                style={{
                  color: '#FFA500',
                  fontFamily: 'Lato-Regular',
                  fontSize: 12,
                }}>
                Home
              </Text>
            </View>
          </TouchableOpacity> */}
          <TouchableOpacity onPress={this.props.welcomePress}>
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../../assets/Icons/Home.png')}
                style={{width: 25, height: 25}}
              />
              <Text style={{fontFamily: 'Lato-Regular', fontSize: 12}}>
                Home
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.props.subPress}>
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../../assets/Icons/Subscription.png')}
                style={{width: 25, height: 25}}
              />
              <Text style={{fontFamily: 'Lato-Regular', fontSize: 12}}>
                Subscription
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.props.postPress}>
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../../assets/Icons/PostIcon.png')}
                style={{width: 25, height: 25, resizeMode: 'contain'}}
              />
              <Text style={{fontFamily: 'Lato-Regular', fontSize: 12}}>
                Post
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.props.contPress}>
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../../assets/Icons/Contactus.png')}
                style={{width: 25, height: 25}}
              />
              <Text style={{fontFamily: 'Lato-Regular', fontSize: 12}}>
                Contact us
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            // onPress={() => alert('hello')}
            onPress={this.props.profilePress}>
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../../assets/Icons/Profile.png')}
                style={{width: 25, height: 25}}
              />
              <Text style={{fontFamily: 'Lato-Regular', fontSize: 12}}>
                Profile
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  FooterView: {
    height: 60,
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

FooterPage.PropTypes = {
  welcomePress: PropTypes.func,
  subPress: PropTypes.func,
  postPress: PropTypes.func,
  contPress: PropTypes.func,
  profilePress: PropTypes.func,
};

export default FooterPage;
