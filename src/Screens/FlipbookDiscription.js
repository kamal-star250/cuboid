import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TextInput,
  ImageBackground,
  ScrollView,
  TouchableOpacity
} from 'react-native';


class FlipbookDiscription extends Component {
  state = {
    value: null,
    Flipbook: [
      {
        category_name: 'Bedroom',
        category_data: 'None Specified'
      },
      {
        category_name: 'Sub Category',
        category_data: 'gated'
      },
      {
        category_name: 'Property Status',
        category_data: 'Completed'
      },
      {
        category_name: 'Location',
        category_data: 'None Specified'
      },
      {
        category_name: 'Cost',
        category_data: '0-2100000K'
      },
      {
        category_name: 'Bedroom',
        category_data: 'None Specified'
      },
      {
        category_name: 'Sub Category',
        category_data: 'gated'
      },
      {
        category_name: 'Property Status',
        category_data: 'Completed'
      },
      {
        category_name: 'Location',
        category_data: 'None Specified'
      },
      {
        category_name: 'Cost',
        category_data: '0-2100000K'
      },
    ]
  };

  render() {
    const { Flipbook } = this.state;
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
              style={{ alignItems: 'center' }}>
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
        {/* Flipbook  */}
        <View style={{ padding: 20, height: '75%' }}>
          <View style={styles.Flipbook_title}>
            <Text style={{ fontFamily: "Lato-Regular" }}>Flipbook For a (House) to (buy)</Text>
          </View>
          <View style={{ paddingVertical: '5%' }}>
            <Text style={{ fontFamily: 'Lato-Bold', }}>Features</Text>
          </View>
          {/* User Selected data  List  */}
          <FlatList
            data={Flipbook}
            renderItem={({ item }) => (
              <View style={styles.Flipbook_category_main_View}>
                <View style={styles.category_view}>
                  <Text style={{ fontFamily: 'Leto_Regular' }}>{item.category_name}:</Text>
                </View>
                <View style={{ padding: 10 }}>
                  <Text style={{ fontFamily: 'Leto_Regular' }}>{item.category_data}</Text>
                </View>
              </View>
            )}


          />



        </View>

        <View style={{ height: '23%', alignItems: 'center' }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('VisitFlipbook')}
            style={styles.NextPageBtn}>
            <Image
              style={{ width: 30, height: 30, resizeMode: 'contain' }}
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
    flex: 1,
  },
  HeaderView: {
    width: '100%',
    // height: 80,
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
  Flipbook_title: {
    alignItems: 'center', width: '100%', alignSelf: 'center', padding: 10, backgroundColor: '#FFD500'
  },
  Flipbook_category_main_View: {
    flexDirection: 'row', paddingVertical: '2%', alignItems: 'center'
  },
  category_view: {
    backgroundColor: '#FFD500', padding: 10, width: '50%'
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

export default FlipbookDiscription;
