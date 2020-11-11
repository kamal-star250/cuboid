import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, FlatList,AsyncStorage } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import  axios  from 'axios';

// import ImagePicker from 'react-native-image-crop-picker'
import ImagePicker from  'react-native-image-crop-picker';
import RNFS, { readFile } from 'react-native-fs';

import FooterPage from '../Comman/FooterPage';
// import { TextInput } from 'react-native-paper';

class PostProperties extends Component {
  constructor(props) {
    super(props)
    this.state = {
      "name": "",
      "email": "",
      "phonenumber": "",
      "address": "",
      "propertyDetails": "",
      "nationalidimage": "",
      "propertyimage": []

    }
  }
// function for pick multiple images
  pickMultiple() {
   ImagePicker.openPicker({
      multiple: true,
    })
    .then((images) => {
      
        images.map(async (item) => readFile(item.path,'base64').then(res => {this.setState( p => ({ ...p ,  propertyimage:[...p.propertyimage,`data:image/jpeg;base64,${res}`] })) })); 
      
    })


    .catch((e) => alert(e));
  }
  
  // function for pick  a image for national id 
  NationalIdImage=async()=> {
    ImagePicker.openPicker({
      multiple: true,
    })
    .then((images) => {
     images.map(async (i) => {
       RNFS.readFile(i.path,'base64').then(res=>{
         console.log(res)
         this.setState({ nationalidimage : `data:image/jpeg;base64,${res}` })
       })
     })
     

    })
    .catch((e) => alert(e));
  }

// make a function to post the details 
SubmitData=()=>{

console.log({
   "name":this.state.name,
            "email":this.state.email,
            "phonenumber":this.state.phonenumber,
            "propertyDetails":this.state.propertyDetails,
            "nationalidimage":this.state.nationalidimage,
            "propertyimage":this.state.propertyimage
})


  axios({
        method: 'post',
        url: 'http://54.164.209.42/api/property/post-property',
        data: {
            "name":this.state.name,
            "email":this.state.email,
            "phonenumber":this.state.phonenumber,
            "propertyDetails":this.state.propertyDetails,
            "nationalidimage":this.state.nationalidimage,
            "propertyimage":this.state.propertyimage
          },
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}



  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {/* Header Start */}
          <View style={styles.HeaderView}>
            <View style={styles.HeaderTextView}>
              <TouchableOpacity
              // onPress={() => this.props.navigation.goBack()}
              >
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



          <View style={{ paddingLeft: 15, paddingRight: 15 }}>
            {/* Detail Main View */}
            <View style={styles.DetailMainView}>
              <TextInput
                placeholder="Name"
                placeholderTextColor="#FFA500"
                onChangeText={(text) => { this.setState({ name: text }) }}
                style={styles.TextInputStyle}
              />
              <Text>  {this.state.name}</Text>
              <TextInput
                placeholder="Email"
                placeholderTextColor="#FFA500"
                onChangeText={(text) => { this.setState({ email: text }) }}
                style={styles.TextInputStyle}
              />
              <TextInput
                placeholder="Phone Number"
                placeholderTextColor="#FFA500"
                TextInputStyle={Number}
                onChangeText={(text) => this.setState({ phonenumber: text })}
                style={styles.TextInputStyle}
              />
              <TextInput
                placeholder="Address"
                placeholderTextColor="#FFA500"
                onChangeText={(text) => this.setState({ address: text })}
                style={styles.TextInputStyle}
              />
              {/* <Text>  {this.state.Address}</Text> */}
              <View style={styles.PropertyDetailView}>
                <Text style={{ color: '#FFA500' }}>Property Details</Text>
                <TextInput
                  onChangeText={(text) => this.setState({ propertyDetails: text })}
                  style={{ height: 60, color: "#FFA500" }}

                />
              </View>

              <View style={styles.PropertyDetailView}>
                <Text style={{ color: '#FFA500' }}>Upload national id</Text>
                <TouchableOpacity
                onPress={()=>this.NationalIdImage()}
                style={{ height: 40 }}>
                  <Image
                    style={{ width: 30, height: 30, top: 10 }}
                    source={require('../../assets/Icons/AddIcon.png')}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.PropertyDetailView}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text style={{ color: '#FFA500' }}>Upload Property images</Text>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 10,
                      fontFamily: 'Lato-Regular',
                    }}>
                    *minimum 5 images
                  </Text>
                </View>
                <View style={{ flexDirection: 'row', top: 10 }}>
                  {/* Show Images */}
                  <FlatList
                    data={this.state.propertyimage}
                    numColumns={5}
                    renderItem={({ item }) => (
                      <Image
                        source={{ uri: `data:image/jpeg;base64,${item}` }}
                        style={{ width: 50, height: 50 }}
                      />

                    )}
                  />
                  {/* set condition if image become in array then disable add btn */}

                  {
                    this.state.propertyimage.length === 0 && <TouchableOpacity
                      onPress={() => this.pickMultiple()}
                      style={styles.AddTuchableView}>
                      <Image
                        style={styles.Addicon}
                        source={require('../../assets/Icons/AddIcon.png')}
                      />
                    </TouchableOpacity>
                  }
                </View>
              </View>
              {/* Post btn  */}
              <TouchableOpacity
                style={styles.PostBtnView}
                onPress={()=>this.SubmitData()}
                // onPress={() => this.props.navigation.navigate('RegisterPage')}
                >
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 20,
                    fontFamily: 'Lato-Bold',
                  }}>
                  Post
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{ height: 80 }}></View>
          </View>
        </ScrollView>
        {/* Footer start */}
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
  },
  HeaderView: {
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
    // marginTop: 20,
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
  DetailMainView: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
    height: 600,
    marginTop: -15,
    bottom: 10,
  },
  TextInputStyle: {
    color: "#FFA500",
    height: 40,
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: '#000',
    paddingLeft: 10,
    fontFamily: 'Lato-Regular',
  },
  PropertyDetailView: {
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: '#000',
    padding: 10,
    height: 90,
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
  AddTuchableView: {
    height: 40,
    width: 40,
  },
  Addicon: {
    width: 30,
    height: 30,
    left: 10,
  },

  PostBtnView: {
    marginTop: 30,
    backgroundColor: '#F6D700',
    width: '100%',
    height: 40,
    borderRadius: 20,
    borderColor: '#FFA500',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PostProperties;
