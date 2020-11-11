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

class SplashScreen extends Component {
  componentDidMount = () => {
    setTimeout(() => {
      this.props.navigation.navigate('WelcomeScreen');
    }, 2000);
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../../assets/images/SplashScreen1.png')}
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {/* <Image
            style={{width: 150, height: 150}}
            source={require('../../assets/Icons/Coboid.png')}
          /> */}

          <ActivityIndicator
            style={{position: 'absolute', bottom: 20}}
            size="large"
            color="#fff"
          />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen;
