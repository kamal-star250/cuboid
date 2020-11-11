import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TextInput,
  ImageBackground,
} from 'react-native';
import Modal from 'react-native-modal';
import Carousel, { Pagination } from 'react-native-snap-carousel';

class VisitFlipbook extends Component {
  constructor (props) {
    super(props);
    this.state = {
      carouselItems: [
        'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      ],
      Reviews: [
        {
          username: 'John',
          review: 'very nice'
        },
        {
          username: 'John',
          review: 'very nice'
        }, {
          username: 'John',
          review: 'very nice'
        }, {
          username: 'John',
          review: 'very nice'
        },
      ],
      carousel_image_modal: false,
      virtual_toor_modal: false,
      message_seller_modal: false,
      review_modal: false,
      contact_seller_modal: false,
      poperty_neighbourhood_modal: false,
      property_detail_modal: false,
      three_D_image_modal: false,
    };
    this._renderItem = this._renderItem.bind(this);
    this.onPress = this.onPress.bind(this);
  }

  ////////////////////////// function fo carousel //////////////////////////////////
  _renderItem({ item, index }) {
    return (
      <TouchableOpacity onPress={this.onPress}>
        <Image
          source={{ uri: item }}
          style={{
            width: '100%',
            height: 80,
            resizeMode: 'cover',
          }}
        />
      </TouchableOpacity>
    );
  }

  onPress = () => {
    this.setState({ carousel_image_modal: true })
  }
  ///////////////// function for  carousel image in full view with modal //////////
  carousel_image = () => {
    this.setState({ carousel_image_modal: !this.state.carousel_image_modal });
  };
  ///////////////// function for  virtual toor modal //////////
  virtual_modal = () => {
    this.setState({ virtual_toor_modal: !this.state.virtual_toor_modal });
  };
  ///////////////// function for message to seller modal//////////
  message_to_seller = () => {
    this.setState({ message_seller_modal: !this.state.message_seller_modal });
  };
  ///////////////// function for  review modal //////////
  user_reviews = () => {
    this.setState({ review_modal: !this.state.review_modal });
  };
  ///////////////// function for contact seller modal//////////
  seller_info = () => {
    this.setState({ contact_seller_modal: !this.state.contact_seller_modal });
  };
  ///////////////// function for Neighbourhood properties//////////
  neighbourhood_property = () => {
    this.setState({ poperty_neighbourhood_modal: !this.state.poperty_neighbourhood_modal });
  };
  ///////////////// function for property Description//////////
  property_description = () => {
    this.setState({ property_detail_modal: !this.state.property_detail_modal });
  };
  ///////////////// function for property Description//////////
  three_d_modal = () => {
    this.setState({ three_D_image_modal: !this.state.three_D_image_modal });
  };

  render() {
    const {
      carousel_image_modal,
      virtual_toor_modal,
      message_seller_modal,
      Reviews
    } = this.state;
    return (
      <View style={{ height: '100%', width: '100%' }}>
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
          {/* banner view */}
          <View style={{ paddingVertical: '2%' }}>
            <View style={{ width: '100%', height: 250 }}>
              <Image
                source={require('../../assets/images/banner.jpeg')}
                style={{ width: '100%', height: '100%' }}
              />
            </View>
          </View>
          {/* carousel view */}
          <View style={{ width: '100%', paddingVertical: '1%' }}>
            <Carousel
              autoplay
              loop
              // autoplayDelay={1000}
              layout={'default'}
              ref={(ref) => (this.carousel = ref)}
              data={this.state.carouselItems}
              autoplayLoop={true}
              sliderWidth={360}
              itemWidth={100}
              onPress={() => alert('ok')}
              renderItem={this._renderItem}
            // onSnapToItem={(index) => this.setState({ activeIndex: index })}
            />
          </View>
          {/* Description view */}
          <View style={{ paddingVertical: '1%', paddingHorizontal: '2%' }}>
            <View>
              <Text style={{ fontFamily: 'Lato-Bold', fontSize: 18 }}>
                Description
              </Text>
            </View>
            <Text style={{ fontFamily: 'Lato-Regular' }}>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source.
            </Text>
          </View>
          {/* flipbook property btn's */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: '2%',
            }}>
            {/* 360 View */}
            <View style={styles.map_view}>
              <TouchableOpacity
                onPress={() => this.virtual_modal()}
                style={styles.map_view_btn}>
                <Image
                  style={styles.map_icons}
                  source={require('../../assets/Icons/Iconawes.png')}
                />
                <Text style={styles.map_text}>360 View</Text>
              </TouchableOpacity>
            </View>
            {/*Virtual Tour */}
            <View style={styles.map_view}>
              <TouchableOpacity
                onPress={() => this.virtual_modal()}
                style={styles.map_view_btn}>
                <Image
                  style={styles.map_icons}
                  source={require('../../assets/Icons/Iconmap.png')}
                />
                <Text style={styles.map_text}>Virtual Tour</Text>
              </TouchableOpacity>
            </View>
            {/*View Flor Plan  */}
            <View style={styles.map_view}>
              <TouchableOpacity
                onPress={() => this.virtual_modal()}
                style={styles.map_view_btn}>
                <Image
                  style={styles.map_icons}
                  source={require('../../assets/Icons/IconEye.png')}
                />
                <Text style={styles.map_text}>View Flor Plan</Text>
              </TouchableOpacity>
            </View>
            {/* Map View */}
            <View style={styles.map_view}>
              <TouchableOpacity
                onPress={() => this.virtual_modal()}
                style={styles.map_view_btn}>
                <Image
                  style={styles.map_icons}
                  source={require('../../assets/Icons/Icon-awesome.png')}
                />
                <Text style={styles.map_text}>Map View</Text>
              </TouchableOpacity>
            </View>
            {/* Similar Properties */}
            <View style={styles.map_view}>
              <TouchableOpacity
                onPress={() => this.virtual_modal()}
                style={styles.map_view_btn}>
                <Image
                  style={styles.map_icons}
                  source={require('../../assets/Icons/Group3482.png')}
                />
                <Text style={styles.map_text}>Similar Properties</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* bottom button's */}
          <View style={{ paddingVertical: '2%', paddingHorizontal: '1%' }}>
            <View style={styles.contact_seller_view}>
              <TouchableOpacity
                onPress={() => this.message_to_seller()}
                style={styles.contact_seller_btn}>
                <Text style={[styles.map_text, { fontSize: 14 }]}>
                  Send message to seller
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.user_reviews()}
                style={styles.contact_seller_btn}>
                <Text style={[styles.map_text, { fontSize: 14 }]}>Reviews</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.contact_seller_view}>
              <TouchableOpacity
                onPress={() => this.seller_info()}
                style={styles.contact_seller_btn}>
                <Text style={[styles.map_text, { fontSize: 14 }]}>
                  Contact seller
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.neighbourhood_property()}
                style={styles.contact_seller_btn}>
                <Text style={[styles.map_text, { fontSize: 14 }]}>
                  Properties in neighbourhood
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.contact_seller_view}>
              <TouchableOpacity
                onPress={() => this.property_description()}
                style={styles.contact_seller_btn}>
                <Text style={[styles.map_text, { fontSize: 14 }]}>
                  Propety details
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.three_d_modal()}
                style={styles.contact_seller_btn}>
                <Text style={[styles.map_text, { fontSize: 14 }]}>3D image</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* next page icon */}
          <View style={{ alignItems: 'center', paddingVertical: '5%' }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('ThanksPage')}
              style={styles.NextPageBtn}>
              <Image
                style={{ width: 30, height: 30, resizeMode: 'contain' }}
                source={require('../../assets/Icons/Rightarrow.png')}
              />
            </TouchableOpacity>
          </View>
          {/* modal for carousel image full view */}
          <Modal
            style={{ margin: 0 }}
            isVisible={this.state.carousel_image_modal}>
            <View
              style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000' }}>
              <View style={{ alignItems: 'flex-end', width: '100%', paddingHorizontal: 20 }}>
                <TouchableOpacity
                  style={{ height: 20, width: 20, }}
                  onPress={() => this.carousel_image()}>
                  {/* <Text style={{ color: "#fff" }}>Close</Text> */}
                  <Image style={[styles.HeaderRightIcon,]}
                    source={require('../../assets/Icons/close6.png')} />
                </TouchableOpacity>
              </View>

              <Image
                style={{ height: '80%', width: '100%', resizeMode: 'contain' }}
                source={{
                  uri:
                    'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                }}
              />
            </View>
          </Modal>
          {/* modal vitual toor  for property */}
          <Modal
            style={{ margin: 0 }}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            animationInTiming={400}
            isVisible={this.state.virtual_toor_modal}>
            <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
              {/* modal container */}
              <View style={styles.modal_container}>
                {/* modal title bar */}
                <View style={styles.modal_titlebar}>
                  <TouchableOpacity>
                    <Text style={styles.modal_title_text}>Virtual Toor</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.virtual_modal()}>
                    <Text style={styles.modal_title_text}>Close</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
          {/* modal for send a message to seller */}
          <Modal
            style={{ margin: 0 }}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            animationInTiming={400}
            isVisible={this.state.message_seller_modal}>
            <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
              {/* modal container */}
              <View style={styles.modal_container}>
                {/* modal title bar */}
                <View style={styles.modal_titlebar}>
                  <TouchableOpacity>
                    <Text style={styles.modal_title_text}>
                      Send a message to seller
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.message_to_seller()}>
                    <Text style={styles.modal_title_text}>Close</Text>
                  </TouchableOpacity>
                </View>
                {/*  */}
                <View style={{ paddingVertical: '5%', paddingHorizontal: '5%' }}>
                  <View style={{ paddingVertical: '2%' }}>
                    <Text style={{ fontFamily: 'Lato-Bold', fontSize: 18 }}>
                      Leave your message
                    </Text>
                  </View>
                  {/* input view */}
                  <View style={{ paddingVertical: '2%', width: '100%' }}>
                    <TextInput
                      multiline={true}
                      style={{
                        width: '100%',
                        height: 100,
                        borderWidth: 1,
                        borderRadius: 10,
                      }}
                    />
                  </View>
                  {/* send btn */}
                  <View style={{ paddingVertical: '5%' }}>
                    <TouchableOpacity
                      onPress={() => this.message_to_seller()}
                      style={styles.modal_send_btn}>
                      <Text style={styles.modal_title_text}>Send</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </Modal>
          {/* modal for reviews */}
          <Modal
            style={{ margin: 0 }}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            animationInTiming={400}
            isVisible={this.state.review_modal}>
            <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
              {/* modal container */}
              <View style={styles.modal_container}>
                {/* modal title bar */}
                <View style={styles.modal_titlebar}>
                  <TouchableOpacity>
                    <Text style={styles.modal_title_text}>
                      Reviews
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.user_reviews()}>
                    <Text style={styles.modal_title_text}>Close</Text>
                  </TouchableOpacity>
                </View>
                {/*  */}
                <View style={{ paddingVertical: '5%', paddingHorizontal: '5%' }}>
                  <View style={{ paddingVertical: '2%' }}>
                    <Text style={{ fontFamily: 'Lato-Bold', fontSize: 14 }}>
                      Write a review
                    </Text>
                  </View>
                  {/* input view */}
                  <View style={{ paddingVertical: '2%', width: '100%' }}>
                    <TextInput
                      multiline={true}
                      style={{
                        width: '100%',
                        height: 100,
                        borderWidth: 1,
                        borderRadius: 10,
                      }}
                    />
                  </View>
                  {/* send btn */}
                  <View style={{ paddingVertical: '5%' }}>
                    <TouchableOpacity
                      onPress={() => this.message_to_seller()}
                      style={styles.modal_send_btn}>
                      <Text style={styles.modal_title_text}>Save</Text>
                    </TouchableOpacity>
                  </View>
                  {/* Reviews */}
                  <View>
                    <ScrollView>
                      {
                        Reviews.map(item => {
                          return (

                            <View style={{ paddingVertical: '2%', borderBottomWidth: 1, borderColor: '#C1C1C1' }}>
                              <View style={{ paddingVertical: '1%' }}>
                                <Text style={styles.modal_title_text}>{item.username}</Text>
                              </View>
                              <View style={{ paddingVertical: '1%', flexDirection: 'row' }}>
                                <Image
                                  source={require('../../assets/Icons/star.png')}
                                  style={[styles.HeaderRightIcon, { left: 3 }]} />
                                <Image
                                  source={require('../../assets/Icons/star.png')}
                                  style={[styles.HeaderRightIcon, { left: 3 }]} />
                                <Image
                                  source={require('../../assets/Icons/star.png')}
                                  style={[styles.HeaderRightIcon, { left: 3 }]} />
                                <Image
                                  source={require('../../assets/Icons/star.png')}
                                  style={[styles.HeaderRightIcon, { left: 3 }]} />
                                <Image
                                  source={require('../../assets/Icons/star.png')}
                                  style={[styles.HeaderRightIcon, { left: 3 }]} />
                              </View>
                              <View style={{ paddingVertical: '1%' }}>
                                <Text style={styles.modal_title_text}>{item.review}</Text>
                              </View>
                            </View>

                          )
                        })
                      }
                    </ScrollView>
                  </View>
                </View>
              </View>
            </View>
          </Modal>
          {/* modal for contact seller */}
          <Modal
            style={{ margin: 0 }}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            animationInTiming={400}
            isVisible={this.state.contact_seller_modal}>
            <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
              {/* modal container */}
              <View style={styles.modal_container}>
                {/* modal title bar */}
                <View style={styles.modal_titlebar}>
                  <TouchableOpacity>
                    <Text style={styles.modal_title_text}>Contact Seller</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.seller_info()}>
                    <Text style={styles.modal_title_text}>Close</Text>
                  </TouchableOpacity>
                </View>
                {/* seller info. area */}
                <View style={{ paddingVertical: '5%', paddingHorizontal: '5%' }}>
                  <View style={{ paddingVertical: '3%', flexDirection: 'row', }}>
                    <View style={{ width: '50%' }}>
                      <Text style={styles.modal_title_text}>Seller contact number:</Text>
                    </View>
                    <View style={{ width: '50%' }}>
                      <Text style={[styles.modal_title_text]}>554544</Text>
                    </View>
                  </View>
                  {/*  */}
                  <View style={{ paddingVertical: '3%', flexDirection: 'row', }}>
                    <View style={{ width: '50%' }}>
                      <Text style={styles.modal_title_text}>Seller Alt number:</Text>
                    </View>
                    <View style={{ width: '50%' }}>
                      <Text style={[styles.modal_title_text]}>55454466</Text>
                    </View>
                  </View>
                  {/*  */}
                  <View style={{ paddingVertical: '3%', flexDirection: 'row', }}>
                    <View style={{ width: '50%' }}>
                      <Text style={styles.modal_title_text}>Seller Email:</Text>
                    </View>
                    <View style={{ width: '50%' }}>
                      <Text style={[styles.modal_title_text]}>Abc@gmail.com</Text>
                    </View>
                  </View>
                  {/*  */}
                  <View style={{ paddingVertical: '3%', flexDirection: 'row', }}>
                    <View style={{ width: '50%' }}>
                      <Text style={styles.modal_title_text}>Seller Alt Email:</Text>
                    </View>
                    <View style={{ width: '50%' }}>
                      <Text style={[styles.modal_title_text]}>Abc@gmail.com</Text>
                    </View>
                  </View>
                  {/*  */}
                  <View style={{ paddingVertical: '3%', flexDirection: 'row', }}>
                    <View style={{ width: '50%' }}>
                      <Text style={styles.modal_title_text}>Seller name:</Text>
                    </View>
                    <View style={{ width: '50%' }}>
                      <Text style={[styles.modal_title_text]}>john</Text>
                    </View>
                  </View>
                  {/*  */}
                  <View style={{ paddingVertical: '3%', flexDirection: 'row', }}>
                    <View style={{ width: '50%' }}>
                      <Text style={styles.modal_title_text}>Seller office addess:</Text>
                    </View>
                    <View style={{ width: '50%' }}>
                      <Text style={[styles.modal_title_text]}>Sell off Address</Text>
                    </View>
                  </View>
                  {/*  */}
                  <View style={{ paddingVertical: '3%', flexDirection: 'row', }}>
                    <View style={{ width: '50%' }}>
                      <Text style={styles.modal_title_text}>Seller Type:</Text>
                    </View>
                    <View style={{ width: '50%' }}>
                      <Text style={[styles.modal_title_text]}>Agent</Text>
                    </View>
                  </View>
                  {/*  */}
                  <View style={{ paddingVertical: '3%', flexDirection: 'row', }}>
                    <View style={{ width: '50%' }}>
                      <Text style={styles.modal_title_text}>Seller website:</Text>
                    </View>
                    <View style={{ width: '50%' }}>
                      <Text style={[styles.modal_title_text]}>Seller@s.com</Text>
                    </View>
                  </View>
                  {/*  */}
                </View>
              </View>
            </View>
          </Modal>
          {/* modal for contact seller */}
          <Modal
            style={{ margin: 0 }}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            animationInTiming={400}
            isVisible={this.state.property_detail_modal}>
            <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
              {/* modal container */}
              <View style={styles.modal_container}>
                {/* modal title bar */}
                <View style={styles.modal_titlebar}>
                  <TouchableOpacity>
                    <Text style={styles.modal_title_text}>Property Details</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.property_description()}>
                    <Text style={styles.modal_title_text}>Close</Text>
                  </TouchableOpacity>
                </View>
                {/* seller info. area */}
                <View style={{ paddingVertical: '5%', paddingHorizontal: '5%' }}>
                  <View style={{ paddingVertical: '3%', flexDirection: 'row', }}>
                    <View style={{ width: '50%' }}>
                      <Text style={styles.modal_title_text}>Propety name:</Text>
                    </View>
                    <View style={{ width: '50%' }}>
                      <Text style={[styles.modal_title_text]}>House prop2</Text>
                    </View>
                  </View>
                  {/*  */}
                  <View style={{ paddingVertical: '3%', flexDirection: 'row', }}>
                    <View style={{ width: '50%' }}>
                      <Text style={styles.modal_title_text}>Property Description:</Text>
                    </View>
                    <View style={{ width: '50%' }}>
                      <Text style={[styles.modal_title_text]}>House prop2</Text>
                    </View>
                  </View>
                  {/*  */}
                  <View style={{ paddingVertical: '3%', flexDirection: 'row', }}>
                    <View style={{ width: '50%' }}>
                      <Text style={styles.modal_title_text}>Property type:</Text>
                    </View>
                    <View style={{ width: '50%' }}>
                      <Text style={[styles.modal_title_text]}>House </Text>
                    </View>
                  </View>
                  {/*  */}
                  <View style={{ paddingVertical: '3%', flexDirection: 'row', }}>
                    <View style={{ width: '50%' }}>
                      <Text style={styles.modal_title_text}>Other Details:</Text>
                    </View>
                    <View style={{ width: '50%' }}>
                      <Text style={[styles.modal_title_text]}>House props2 </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </Modal>
          {/* modal for property neighbourhood*/}
          <Modal
            style={{ margin: 0 }}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            animationInTiming={400}
            isVisible={this.state.poperty_neighbourhood_modal}>
            <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
              {/* modal container */}
              <View style={styles.modal_container}>
                {/* modal title bar */}
                <View style={styles.modal_titlebar}>
                  <TouchableOpacity>
                    <Text style={styles.modal_title_text}>Property neighbourhood</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.neighbourhood_property()}>
                    <Text style={styles.modal_title_text}>Close</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ width: '100%', height: '90%', padding: 10 }}>
                  <ImageBackground
                    style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}
                    source={require('../../assets/images/LookHouse.jpg')} >

                    <TouchableOpacity style={{ width: '90%', alignItems: 'center', justifyContent: "center", height: 50, backgroundColor: "#FFD500", borderRadius: 10 }}>
                      <Text style={styles.modal_title_text}>Open flipbook</Text>
                    </TouchableOpacity>
                  </ImageBackground>

                </View>
              </View>
            </View>
          </Modal>
          {/* modal for property neighbourhood*/}
          <Modal
            style={{ margin: 0 }}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            animationInTiming={400}
            isVisible={this.state.three_D_image_modal}>
            <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
              {/* modal container */}
              <View style={styles.modal_container}>
                {/* modal title bar */}
                <View style={styles.modal_titlebar}>
                  <TouchableOpacity>
                    <Text style={styles.modal_title_text}>3D Image</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.three_d_modal()}>
                    <Text style={styles.modal_title_text}>Close</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ width: '100%', height: '90%', padding: 10 }}>
                  <Image
                    style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}
                    source={require('../../assets/images/LookHouse.jpg')} />


                </View>
              </View>
            </View>
          </Modal>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  HeaderView: {
    height: 80,
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
    fontWeight: 'bold',
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
  map_view: {
    width: '18%',
    marginHorizontal: '1%',
    height: 70,
  },
  map_view_btn: {
    width: '100%',
    height: 60,
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: '#F6D600',
    shadowColor: '#FFD700',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  map_icons: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  map_text: {
    fontFamily: 'Lato-Regular',
    fontSize: 8,
    textAlign: 'center',
  },
  contact_seller_view: {
    flexDirection: 'row',
    paddingVertical: '2%',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
  },
  contact_seller_btn: {
    width: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    height: 40,
  },
  NextPageBtn: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    backgroundColor: '#F6D600',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal_title_text: {
    fontFamily: 'Lato-Regular',
    fontSize: 16,
  },
  modal_container: {
    width: '100%',
    height: '80%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#fff',
    bottom: 0,
    position: 'absolute',
  },
  modal_titlebar: {
    paddingHorizontal: '5%',
    paddingVertical: '2%',
    borderBottomWidth: 1,
    borderColor: '#cccccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modal_send_btn: {
    alignSelf: 'flex-end',
    width: 100,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFD500',
    borderRadius: 10,
  },
});
export default VisitFlipbook;
