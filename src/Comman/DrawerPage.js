import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class Drawer extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Image style={{ width: 130, height: 130, marginTop: 30, marginBottom: 20 }} source={require('../../assets/Icons/Coboid.png')} />
        <View style={{ width: '100%' }}>

          <TouchableOpacity
           onPress={() =>this.props.navigation.navigate('FAQPage')}
          style={styles.FAQView}>

            <Text style={{ color: '#fff', fontFamily: 'Lato-Regular' }}>FAQ</Text>
            <Image source={require('../../assets/Icons/arrow.png')} style={{ height: 20, width: 20 }} />
          </TouchableOpacity>
          <TouchableOpacity
             onPress={() =>this.props.navigation.navigate('NeedHelp')}
          style={styles.FAQView}>
            <Text style={{ color: '#fff', fontFamily: 'Lato-Regular' }}>ABOUT APP</Text>
            <Image source={require('../../assets/Icons/arrow.png')} style={{ height: 20, width: 20 }} />
          </TouchableOpacity>
          <TouchableOpacity 
             onPress={() =>this.props.navigation.navigate('ContactUS')}
          style={styles.FAQView}>

            <Text style={{ color: '#fff', fontFamily: 'Lato-Regular' }}>CONTACT INFO</Text>
            <Image source={require('../../assets/Icons/arrow.png')} style={{ height: 20, width: 20 }} />
          </TouchableOpacity>
          <TouchableOpacity 
             onPress={() =>this.props.navigation.navigate('PostProperties')}
          style={styles.FAQView}>

            <Text style={{ color: '#fff', fontFamily: 'Lato-Regular' }}>POST PROPERTY</Text>
            <Image source={require('../../assets/Icons/arrow.png')} style={{ height: 20, width: 20 }} />
          </TouchableOpacity>
          <TouchableOpacity 
             onPress={() =>this.props.navigation.navigate('SavedFlipbook')}
          style={styles.FAQView}>

            <Text style={{ color: '#fff', fontFamily: 'Lato-Regular' }}>MY SAVED FLIPBOOKS</Text>
            <Image source={require('../../assets/Icons/arrow.png')} style={{ height: 20, width: 20 }} />
          </TouchableOpacity>
       

        </View>

        <View style={{ bottom: 10, position: 'absolute', width: '100%', height: 100, alignItems: 'center', padding: 15 }}>
          <Text style={{ color: '#fff', fontFamily: 'Lato-Regular' }}>Follow us on</Text>
          <View style={{ borderWidth: 1, borderColor: '#FFA500', width: '100%', marginTop: 5 }}></View>

          <View style={styles.FacebookView} >
            <TouchableOpacity style={{ padding: 10 }}>
              <Image style={styles.SocialIcons} source={require('../../assets/Icons/Facebook.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={{ padding: 10 }}>
              <Image style={styles.SocialIcons} source={require('../../assets/Icons/Twitter.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={{ padding: 10 }}>
              <Image style={styles.SocialIcons} source={require('../../assets/Icons/instagram.png')} />
            </TouchableOpacity>
          </View>


        </View>





      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  FAQView: {
    padding: 10,
    backgroundColor: '#191919',
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  FacebookView: {
    flexDirection: 'row',
    justifyContent: "center",

    padding: 10
  },
  SocialIcons: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    // marginRight: 15 

  }
});

export default Drawer;
