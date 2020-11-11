import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';

import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { ScrollView } from 'react-native-gesture-handler';

import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
  FlatList,
} from 'accordion-collapse-react-native';
// import Slider from '@react-native-community/slider';
import RangeSlider from 'rn-range-slider';
import Modal from 'react-native-modal';
import BatchedBridge from 'react-native/Libraries/BatchedBridge/BatchedBridge';
import { max, min } from 'react-native-reanimated';

class LookingHouseSteps extends Component {
  constructor () {
    super();
    this.state = {
      // rangeHigh:100,
      // rangeLow:50,
      "cost": {
        "max": 100,
        "min": 50
      },
      "area": "4000",
      "mainCategory": "",
      "subCategory": "",
      "propertyStatus": "",
      "location": '',
      "bedroom": '',
      "balcony": false,
      "borehole": false,
      "cctv": false,
      "disabilityfeature": false,
      "fireplace": false,
      "maturegarden": false,
      "opticalfiber": false,
      "partyarea": false,

      AreaName: '',
      featurename: '',
      featurearray: [],
      index: 0,
      isModalVisible: false,
      isModalVisible1: false,
      BathroomCounter: 0,
      TotalBathrooms: '',
      WeSelect: '',
      AreaSelect: '',



      MainCategory: [
        {
          index: '0',
          imageurl: require('../../assets/Icons/Buy.png'),
          name: 'Buy',
        },
        {
          index: '1',
          imageurl: require('../../assets/Icons/Rent.png'),
          name: ' Rent',
        },
        {
          index: '2',
          imageurl: require('../../assets/Icons/FullyFurnished1.png'),
          name: 'Fully Furnished',
        },
      ],
      SubCategory: [
        {
          index: '0',
          imageurl: require('../../assets/Icons/Gated.png'),
          name: 'Geted',
        },
        {
          index: '1',
          imageurl: require('../../assets/Icons/Own.png'),
          name: ' Own Compound',
        },
        {
          index: '2',
          imageurl: require('../../assets/Icons/Apartment1.png'),
          name: 'Apartment',
        },
      ],
      Bedrooms: [
        {
          index: '0',
          name: ' Any ',
        },
        {
          index: '1',
          name: ' 1 ',
        },
        {
          index: '2',
          name: '2',
        },
        {
          index: '3',
          name: '3',
        },
        {
          index: '4',
          name: 'more then three',
        },
      ],
      PropertyStatus: [
        {
          index: '0',
          imageurl: require('../../assets/Icons/Completed.png'),
          name: 'Completed',
        },
        {
          index: '1',
          imageurl: require('../../assets/Icons/Offplan.png'),
          name: '  Off plan',
        },
        {
          index: '2',
          imageurl: require('../../assets/Icons/Refurbished.png'),
          name: '  Refurbished',
        },
      ],
      Select_More_Featurs: [
        {
          index: '0',
          imageurl: require('../../assets/Icons/OpticalFiber.png'),
          name: 'Optical Fiber',
          key: 'opticalfiber'
        },
        // {
        //   index: '1',
        //   imageurl: require('../../assets/Icons/SwimingPool.png'),
        //   name: 'Swiming',
        //   key:''
        // },
        {
          index: '1',
          imageurl: require('../../assets/Icons/FirePlace.png'),
          name: '  Fire Place',
          key: 'fireplace'
        },
        // {
        //   index: '3',
        //   imageurl: require('../../assets/Icons/PetAllow.png'),
        //   name: ' Pet Allow',
        // },
        // {
        //   index: '4',
        //   imageurl: require('../../assets/Icons/SolarWater.png'),
        //   name: 'Solar Water',
        // },
        // {
        //   index: '5',
        //   imageurl: require('../../assets/Icons/WaterFront.png'),
        //   name: ' Water Front',
        // },
        {
          index: '2',
          imageurl: require('../../assets/Icons/CCTV.png'),
          name: 'CCTV',
          key: 'cctv'
        },
        {
          index: '3',
          imageurl: require('../../assets/Icons/BoreHole.png'),
          name: '   Bore Hole',
          key: 'borehole'
        },
        {
          index: '4',
          imageurl: require('../../assets/Icons/Disability.png'),
          name: ' Disability',
          key: 'disabilityfeature'
        },
        // {
        //   index: '9',
        //   imageurl: require('../../assets/Icons/MatureGarden.png'),
        //   name: 'CCTV',
        // },
        {
          index: '5',
          imageurl: require('../../assets/Icons/MatureGarden.png'),
          name: 'Mature  Garden',
          key: 'maturegarden'
        },
        {
          index: '6',
          imageurl: require('../../assets/Icons/Balcony.png'),
          name: 'Balcony',
          key: 'balcony'
        },
        {
          index: '7',
          imageurl: require('../../assets/Icons/PartyArea.png'),
          name: '   Party Area',
          key: 'partyarea'
        },
      ],
      Select_Services: [
        {
          index: '0',
          imageurl: require('../../assets/Icons/Bathrooms.png'),
          name: 'Bathrooms ',
          area: false,
        },
        {
          index: '1',
          imageurl: require('../../assets/Icons/SteamBath.png'),
          name: 'SteamBath',
          area: false,
        },
        {
          index: '2',
          imageurl: require('../../assets/Icons/Lift.png'),
          name: 'Lift',
          area: false,
        },
        {
          index: '3',
          imageurl: require('../../assets/Icons/BathTub.png'),
          name: 'BathTub',
          area: false,
        },
        {
          index: '4',
          imageurl: require('../../assets/Icons/Parking.png'),
          name: 'Parking',
          area: false,
        },
        {
          index: '5',
          imageurl: require('../../assets/Icons/GYM.png'),
          name: 'GYM',
          area: false,
        },
        {
          index: '6',
          imageurl: require('../../assets/Icons/LivingArea.png'),
          name: 'LivingArea',
          area: true,
        },
        {
          index: '7',
          imageurl: require('../../assets/Icons/Kitchen.png'),
          name: 'Kitchen Area',
          area: true,
        },
        {
          index: '8',
          imageurl: require('../../assets/Icons/Garden.png'),
          name: ' Garden Area',
          area: true,
        },
      ],
    };
  }

  //////////////// Change Search Step ////////////

  GoNextStep = () => {
    this.setState({
      index: this.state.index + 1,
    });
  };
  //////////////// Change Search Step ////////////

  //////////////// Previous Search Step ////////////
  GoPreviousStep = () => {
    this.setState({
      index: this.state.index - 1,
    });
    if (this.state.index == 0) {
      this.props.navigation.navigate('WelcomeScreen');
    }
  };
  //////////////// Previous Search Step ////////////


  //////////////// Counter Function's ////////////
  AddBathroom = () => {
    this.setState({ BathroomCounter: this.state.BathroomCounter + 1 });
  };
  SubtaractBathroom = () => {
    this.setState({ BathroomCounter: this.state.BathroomCounter - 1 });
  };
  //////////////// Counter Function's ////////////


  closemodal = () => {

    console.log(this.state.WeSelect)
    console.log(this.state.BathroomCounter)
    console.log(this.state.AreaSelect)
    console.log(this.state.rangeLow, this.state.rangeHigh)
    // console.log(this.state.featurename)
    // if (this.state.featurename == 'Bathrooms') {
    //   alert("right")

    // } else {
    //   alert('Wronge')
    // }
    // console.log(this.state.TotalBathrooms)
    // const counter = this.state.BathroomCounter;
    // const featurename = this.state.featurename;
    // const blankarray = this.state.featurearray;
    // const min = this.state.rangeLow;
    // const max = this.state.rangeHigh;
    // const AreaName = this.state.AreaName

    // blankarray.push({ name: featurename, count: counter, Area: { min: min, max: max }, AreaName: AreaName });

    this.setState({
      isModalVisible: false,
      // featurearray: blankarray,
      isModalVisible1: false,
    });
  };


  toggleModal = (name, area) => {
    if (area == false) {
      this.setState({
        isModalVisible: !this.state.isModalVisible,
        WeSelect: name,

      });
    } else {
      this.setState({
        isModalVisible1: !this.state.slidermodal1,
        AreaSelect: name,
      });
    }
  };



  //////////////// //////////////////////  SEARCH FLIPBOOK WITH STEP 1 DATA ////////////////////////////////////////////
  Step1Search = () => {
    const URL = 'http://192.168.0.103:4000/api/search/house-search-1'
    axios({
      method: 'post',
      url: URL,
      data: {

        "cost": {
          "max": this.state.max,
          "min": this.state.min
        },
        "attributes": {
          "area": "4000",
          "mainCategory": this.state.mainCategory,
          "subCategory": this.state.subCategory,
          "propertyStatus": this.state.propertyStatus,
          "location": this.state.location,
          "bedroom": this.state.bedroom,
          "balcony": this.state.balcony,
          "borehole": this.state.borehole,
          "cctv": this.state.cctv,
          "disabilityfeature": this.state.disabilityfeature,
          "fireplace": this.state.fireplace,
          "maturegarden": this.state.maturegarden,
          "opticalfiber": this.state.opticalfiber,
          "partyarea": this.state.partyarea,
        }
      }
    })
      /////////////////////////////////// AFTER RUN THE API FIND THE RESPONSE OF API/////////////////////////////////////
      .then((response) => {
        console.log(response)
        const data = response.data;
        // console.log(data);
        const status = data.status;
        // console.log(status)

        if (status == "success") {
          // alert('ok')
          var Alldata = {

            "cost": {
              "max": this.state.max,
              "min": this.state.min
            },
            "attributes": {
              "area": "4000",
              "mainCategory": this.state.mainCategory,
              "subCategory": this.state.subCategory,
              "propertyStatus": this.state.propertyStatus,
              "location": this.state.location,
              "bedroom": this.state.bedroom,
              "balcony": this.state.balcony,
              "borehole": this.state.borehole,
              "cctv": this.state.cctv,
              "disabilityfeature": this.state.disabilityfeature,
              "fireplace": this.state.fireplace,
              "maturegarden": this.state.maturegarden,
              "opticalfiber": this.state.opticalfiber,
              "partyarea": this.state.partyarea,
            }
          }
          // console.log(Alldata);
          this.props.navigation.navigate('SearchFlipbook', { data: Alldata },)

        } else {
          alert('Page Not Found')
        }
      })
      /////////////////////////////////// ERROR ALERT API NOT RUN ///////////////////////////////////////////////////
      .catch(function (error) {
        console.log(error);
      });
  }

  //////////////// //////////////////////  SEARCH FLIPBOOK WITH STEP 2 DATA ////////////////////////////////////////////
  SearchStep2 = () => {
    console.log({

      "cost": {
        "max": this.state.max,
        "min": this.state.min
      },
      "attributes": {
        "area": "4000",
        "mainCategory": this.state.mainCategory,
        "subCategory": this.state.subCategory,
        "propertyStatus": this.state.propertyStatus,
        "location": this.state.location,
        "bedroom": this.state.bedroom,
        "balcony": this.state.balcony,
        "borehole": this.state.borehole,
        "cctv": this.state.cctv,
        "disabilityfeature": this.state.disabilityfeature,
        "fireplace": this.state.fireplace,
        "maturegarden": this.state.maturegarden,
        "opticalfiber": this.state.opticalfiber,
        "partyarea": this.state.partyarea,
      },
      "livingsize": {
        "minliv": this.state.rangeLow,
        "maxliv": this.state.rangeLow,
      },
      "kitchensize": {
        "minkit": 10,
        "maxkit": 500
      },
      "gardensize": {
        "mingarden": 10,
        "maxgarden": 500
      }
    })
    this.props.navigation.navigate('SearchFlipbook')

    // const URL = 'http://192.168.0.103:4000/api/search/house-search-2'
    // axios({
    //   method: 'post',
    //   url: URL,
    //   data: {

    //     "cost": {
    //       "max": this.state.max,
    //       "min": this.state.min
    //     },
    //     "attributes": {
    //       "area": "4000",
    //       "mainCategory": this.state.mainCategory,
    //       "subCategory": this.state.subCategory,
    //       "propertyStatus": this.state.propertyStatus,
    //       "location": this.state.location,
    //       "bedroom": this.state.bedroom,
    //       "balcony": this.state.balcony,
    //       "borehole": this.state.borehole,
    //       "cctv": this.state.cctv,
    //       "disabilityfeature": this.state.disabilityfeature,
    //       "fireplace": this.state.fireplace,
    //       "maturegarden": this.state.maturegarden,
    //       "opticalfiber": this.state.opticalfiber,
    //       "partyarea": this.state.partyarea,
    //     },
    //     "livingArea": {
    //       "min": this.state.rangeLow,
    //       "max": this.state.rangeLow,
    //     },
    //     "kitchenArea": {
    //       "min": 1,
    //       "max": 1500
    //     },
    //     "gardenArea": {
    //       "min": 1,
    //       "max": 1500
    //     }

    //   }
    // })
    //   /////////////////////////////////// AFTER RUN THE API FIND THE RESPONSE OF API/////////////////////////////////////
    //   .then((response) => {
    //     console.log(response)
    //     const data = response.data;
    //     // console.log(data);
    //     const status = data.status;
    //     // console.log(status)

    //     if (status == "success") {
    //       // alert('ok')


    //       var Alldata = {

    //         "cost": {
    //           "max": this.state.max,
    //           "min": this.state.min
    //         },
    //         "attributes": {
    //           "area": "4000",
    //           "mainCategory": this.state.mainCategory,
    //           "subCategory": this.state.subCategory,
    //           "propertyStatus": this.state.propertyStatus,
    //           "location": this.state.location,
    //           "bedroom": this.state.bedroom,
    //           "balcony": this.state.balcony,
    //           "borehole": this.state.borehole,
    //           "cctv": this.state.cctv,
    //           "disabilityfeature": this.state.disabilityfeature,
    //           "fireplace": this.state.fireplace,
    //           "maturegarden": this.state.maturegarden,
    //           "opticalfiber": this.state.opticalfiber,
    //           "partyarea": this.state.partyarea,
    //         },
    //         "livingArea": {
    //           "min": 1,
    //           "max": 1500
    //         },
    //         "kitchenArea": {
    //           "min": 1,
    //           "max": 1500
    //         },
    //         "gardenArea": {
    //           "min": 1,
    //           "max": 1500
    //         }
    //       }
    //       // console.log(Alldata);
    //       this.props.navigation.navigate('SearchFlipbook', { data: Alldata }, console.log(Alldata))

    //     } else {
    //       alert('Page Not Found')
    //     }



    //   })
    //   /////////////////////////////////// ERROR ALERT API NOT RUN ///////////////////////////////////////////////////
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  }

  render() {
    console.log(this.state.featurearray);
    const progressStepsStyle = {
      activeStepIconBorderColor: '#000', //Active step ,numbers border color
      activeLabelColor: '#000',
      activeStepNumColor: '#FFA500', //Numbers color in processbar
      //   activeStepIconBackgroundColor='#000',
      //   activeStepIconColor: '#F5F5F5',                 // Current active step color
      completedStepIconColor: '#000', //After complete the step change the step color
      completedProgressBarColor: '#000', //line Borders
      completedCheckColor: '#fff',
      height: 50,
      width: 100,
      borderRadius: 20,
    };

    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ bottom: 10 }}>
          {/*/////////////////////////////////////////  Header Start //////////////////////////////*/}
          <View style={styles.HeaderView}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 10,
              }}>
              <TouchableOpacity onPress={this.GoPreviousStep}>
                <Image
                  style={styles.BackIcon}
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

          {/*/////////////////////////////////////// / Header end //////////////////////////////////// */}
          <View style={{ width: '100%' }}>
            {/* ////////////////////////////// Main ProcessSteps start Here  /////////////////////////  */}
            <ProgressSteps
              {...progressStepsStyle}
              activeStep={this.state.index}>
              {/* //////////////////////////////////////// FirstStep Start Here ////////////////////////////////////////// */}
              <ProgressStep
                gravity="true"
                // container={width=30,height=30}
                activeLabelColor="#000"
                label="Step 1"
                onNext={this.onPaymentStepComplete}
                onPrevious={this.onPrevStep}
                scrollViewProps={this.defaultScrollViewProps}
                removeBtnRow={true}>
                <View style={{ top: 20 }}>
                  {/* ///////////////////////////////////// Choose Main One Category /////////////////////////////////// */}
                  <Collapse>
                    <CollapseHeader disabled style={{ height: 50 }}>
                      <View style={styles.CallHeaderMainView}>
                        <Text style={{ left: 10, fontFamily: 'Lato-Regular' }}>
                          Choose one main category
                        </Text>
                        <Image
                          style={styles.Downarrow}
                          source={require('../../assets/Icons/Downarrow.png')}
                        />
                      </View>
                      <View style={styles.BottomBorder}></View>
                    </CollapseHeader>

                    <CollapseBody>
                      <AccordionList
                        data={this.state.MainCategory}
                        numColumns={3}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                          <View
                            style={{
                              padding: 10,
                              justifyContent: 'space-between',
                              width: '33%',
                            }}>
                            <TouchableOpacity
                              onPress={() => this.setState({ mainCategory: item.name })}
                              style={{
                                width: 100,
                                height: 100,
                                borderRadius: 100 / 2,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: this.state.mainCategory == item.name ? '#F6D700' : '#f2f2f2',
                                shadowColor: '#000',
                                shadowOffset: { width: 2, height: 2 },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.84,
                                elevation: 5,
                              }}>
                              <Image
                                source={item.imageurl}
                                style={{
                                  height: 45,
                                  width: 45,
                                  resizeMode: 'contain',
                                }}
                              />
                              <Text style={{ fontSize: 12 }}>{item.name}</Text>
                            </TouchableOpacity>
                          </View>
                        )}
                      />
                    </CollapseBody>
                  </Collapse>
                  {/* ///////////////////////////////////// Bathrooms /////////////////////////////////// */}
                  <Collapse>
                    <CollapseHeader disabled style={{ height: 50 }}>
                      <View style={styles.CallHeaderMainView}>
                        <Text style={{ left: 10, fontFamily: 'Lato-Regular' }}>
                          Bedrooms
                        </Text>
                        <Image
                          style={styles.Downarrow}
                          source={require('../../assets/Icons/Downarrow.png')}
                        />
                      </View>
                      <View style={styles.BottomBorder}></View>
                    </CollapseHeader>

                    <CollapseBody style={{ height: 60 }}>
                      <AccordionList
                        data={this.state.Bedrooms}
                        numColumns={5}
                        renderItem={({ item }) => (
                          <TouchableOpacity
                            // onPress={() => alert(item.name)}
                            onPress={() => this.setState({ bedroom: item.name })}
                            style={{
                              height: 25,
                              borderRadius: 12.5,
                              paddingHorizontal: 10,
                              backgroundColor: this.state.bedroom == item.name ? '#F6D700' : '#f2f2f2',
                              shadowColor: '#000',
                              shadowOffset: { width: 2, height: 2 },
                              shadowOpacity: 0.25,
                              shadowRadius: 3.84,
                              elevation: 5,
                              marginLeft: 10,
                              marginBottom: 10,
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}>
                            <Text >{item.name}</Text>
                          </TouchableOpacity>
                        )}


                      />

                    </CollapseBody>
                  </Collapse>
                  {/* ///////////////////////////////////// Choose sub Category /////////////////////////////////// */}
                  <Collapse>
                    <CollapseHeader disabled style={{ height: 50 }}>
                      <View style={styles.CallHeaderMainView}>
                        <Text style={{ left: 10, fontFamily: 'Lato-Regular' }}>
                          Choose sub category
                        </Text>
                        <Image
                          style={styles.Downarrow}
                          source={require('../../assets/Icons/Downarrow.png')}
                        />
                      </View>
                      <View style={styles.BottomBorder}></View>
                    </CollapseHeader>

                    <CollapseBody>
                      <AccordionList
                        data={this.state.SubCategory}
                        numColumns={3}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                          <View
                            style={{
                              padding: 10,
                              justifyContent: 'space-between',
                              width: '33%',
                            }}>
                            <TouchableOpacity
                              onPress={() => this.setState({ subCategory: item.name })}
                              style={{
                                width: 100,
                                height: 100,
                                borderRadius: 100 / 2,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: this.state.subCategory == item.name ? '#F6D700' : '#f2f2f2',
                                shadowColor: '#000',
                                shadowOffset: { width: 2, height: 2 },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.84,
                                elevation: 5,
                              }}>
                              <Image
                                source={item.imageurl}
                                style={{
                                  height: 45,
                                  width: 45,
                                  resizeMode: 'contain',
                                }}
                              />
                              <Text style={{ fontSize: 12 }}>{item.name}</Text>
                            </TouchableOpacity>
                          </View>
                        )}
                      />
                    </CollapseBody>
                  </Collapse>
                  {/* /////////////////////////////////////Property Status /////////////////////////////////// */}
                  <Collapse>
                    <CollapseHeader disabled style={{ height: 50 }}>
                      <View style={styles.CallHeaderMainView}>
                        <Text style={{ left: 10, fontFamily: 'Lato-Regular' }}>
                          Search property status
                        </Text>
                        <Image
                          style={styles.Downarrow}
                          source={require('../../assets/Icons/Downarrow.png')}
                        />
                      </View>
                      <View style={styles.BottomBorder}></View>
                    </CollapseHeader>

                    <CollapseBody>
                      <AccordionList
                        data={this.state.PropertyStatus}
                        numColumns={3}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                          <View
                            style={{
                              padding: 10,
                              justifyContent: 'space-between',
                              width: '33%',
                            }}>
                            <TouchableOpacity
                              onPress={() => this.setState({ propertyStatus: item.name })}
                              style={{
                                width: 100,
                                height: 100,
                                borderRadius: 100 / 2,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: this.state.propertyStatus == item.name ? '#F6D700' : '#f2f2f2',
                                shadowColor: '#000',
                                shadowOffset: { width: 2, height: 2 },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.84,
                                elevation: 5,
                              }}>
                              <Image
                                source={item.imageurl}
                                style={{
                                  height: 45,
                                  width: 45,
                                  resizeMode: 'contain',
                                }}
                              />
                              <Text style={{ fontSize: 12 }}>{item.name}</Text>
                            </TouchableOpacity>
                          </View>
                        )}
                      />
                    </CollapseBody>
                  </Collapse>
                  {/* ///////////////////////////////////// Enter location or sub urb town /////////////////////////////////// */}
                  <Collapse>
                    <CollapseHeader style={{ height: 50 }}>
                      <View style={styles.CallHeaderMainView}>
                        <Text style={{ left: 10, fontFamily: 'Lato-Regular' }}>
                          Enter location suburb town
                        </Text>
                        <Image
                          style={styles.Downarrow}
                          source={require('../../assets/Icons/Downarrow.png')}
                        />
                      </View>
                      <View style={styles.BottomBorder}></View>
                    </CollapseHeader>

                    <CollapseBody>
                      <View style={{ padding: 20 }}>
                        <View
                          style={{
                            width: '100%',
                            flexDirection: 'row',
                            borderWidth: 1,
                            height: 40,
                            borderColor: '#C0C0C0',
                            borderRadius: 20,
                            alignItems: 'center',
                          }}>
                          <Image
                            style={{ width: 20, height: 20, left: 20 }}
                            source={require('../../assets/Icons/SearchIcon.png')}
                          />
                          <TextInput
                            placeholderTextColor="#000"
                            placeholder="Enter address city or neighboard"
                            onChangeText={(text) => this.setState({ location: text })}
                            style={{ left: 20, fontFamily: 'Lato-Regular' }}
                          />
                        </View>
                      </View>
                    </CollapseBody>
                  </Collapse>
                  {/* ///////////////////////////////////// Cost slider /////////////////////////////////// */}
                  <Collapse>
                    <CollapseHeader>
                      <View style={styles.CallHeaderMainView}>
                        <Text style={{ left: 10, fontFamily: 'Lato-Regular' }}>
                          Cost
                        </Text>
                        <Image
                          style={styles.Downarrow}
                          source={require('../../assets/Icons/Downarrow.png')}
                        />
                      </View>
                      <View style={styles.BottomBorder}></View>
                    </CollapseHeader>

                    <CollapseBody>
                      <View style={{ padding: 10, height: 100 }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                          }}>

                          <Text>KWD {this.state.min}</Text>
                          <Text>-{this.state.max}</Text>
                        </View>
                        <RangeSlider
                          // elevation={2}
                          style={{ width: '100%', height: 70 }}
                          gravity={'center'}
                          gravity="top"
                          min={100}
                          max={500}
                          step={50}
                          handleBorderWidth={1}
                          handleBorderColor="#F6D700"
                          selectionColor="#F6D700"
                          blankColor="#808080"
                          onValueChanged={(low, high) => {
                            this.setState({ min: low, max: high });
                          }}
                        />
                      </View>
                    </CollapseBody>
                  </Collapse>

                  {/* Apply btn */}
                  <View style={styles.ApplyView}>
                    <TouchableOpacity
                      onPress={() => this.Step1Search()}
                      // onPress={() => alert("Step 1 pressed")}
                      style={styles.ApplyBtn}>
                      <Text style={{ fontFamily: 'Lato-Regular' }}>Search</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      // onPress={() => this.props.navigation.navigate('SearchHouseStep2')}
                      onPress={this.GoNextStep}
                      style={styles.ApplyBtn}>
                      <Text style={{ fontFamily: 'Lato-Regular' }}>Next </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </ProgressStep>
              {/*//////////////////////////////////// Second Sept ///////////////////////////////////////////*/}
              <ProgressStep
                label="Step 2"
                removeBtnRow={true}
                onNext={this.onNextStep}
                onPrevious={this.onPrevStep}
                scrollViewProps={this.defaultScrollViewProps}>
                <View style={{ top: 20 }}>
                  {/* ///////////////////////////////////// Select more featrus/////////////////////////////////// */}
                  <Collapse>
                    <CollapseHeader disabled style={{ height: 50 }}>
                      <View style={styles.CallHeaderMainView}>
                        <Text style={{ left: 10, fontFamily: 'Lato-Regular' }}>
                          Select more features
                        </Text>
                        <Image
                          style={styles.Downarrow}
                          source={require('../../assets/Icons/Downarrow.png')}
                        />
                      </View>
                      <View style={styles.BottomBorder}></View>
                    </CollapseHeader>

                    <CollapseBody>
                      <AccordionList
                        data={this.state.Select_More_Featurs}
                        numColumns={3}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                          <View
                            style={{
                              padding: 10,
                              justifyContent: 'space-between',
                              width: '33%',
                            }}>
                            <TouchableOpacity
                              // onPress={()=>this.setState({})}
                              onPress={() => this.setState(prev => ({ ...prev, [item.key]: !prev[item.key] }))}
                              style={{
                                width: 100,
                                height: 100,
                                borderRadius: 50,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: this.state[item.key] ? '#F6D700' : '#f2f2f2',
                                // backgroundColor:this.state.opticalfiber == true ? '#F6D700' : '#f2f2f2',
                                shadowColor: '#000',
                                shadowOffset: { width: 2, height: 2 },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.84,
                                elevation: 5,
                              }}>
                              <Image
                                source={item.imageurl}
                                style={{
                                  height: 45,
                                  width: 45,
                                  resizeMode: 'contain',
                                }}
                              />
                              <Text style={{ fontSize: 12 }}>{item.name}</Text>
                            </TouchableOpacity>
                          </View>
                        )}
                      />
                    </CollapseBody>
                  </Collapse>

                  {/* Apply Btn's */}
                  <View style={styles.ApplyView}>
                    <TouchableOpacity
                      onPress={() => this.SearchStep2()}
                      // onPress={() => alert("Step 2 pressed")}
                      style={styles.ApplyBtn}>
                      <Text style={{ fontFamily: 'Lato-Regular' }}>Search</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={this.GoNextStep}
                      style={styles.ApplyBtn}>
                      <Text style={{ fontFamily: 'Lato-Regular' }}>Next </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </ProgressStep>
              {/* ///////////////////////////////////// Third Step/////////////////////////////////// */}
              <ProgressStep
                label="Step 3"
                removeBtnRow={true}
                onNext={this.onNextStep}
                onPrevious={this.onPrevStep}
                scrollViewProps={this.defaultScrollViewProps}>
                <View style={{ top: 20 }}>
                  {/* ///////////////////////////////////// Slelect More Featurs /////////////////////////////////// */}
                  <Collapse>
                    <CollapseHeader disabled style={{ height: 50 }}>
                      <View style={styles.CallHeaderMainView}>
                        <Text style={{ left: 10, fontFamily: 'Lato-Regular' }}>
                          Select more features
                        </Text>
                        <Image
                          style={styles.Downarrow}
                          source={require('../../assets/Icons/Downarrow.png')}
                        />
                      </View>
                      <View style={styles.BottomBorder}></View>
                    </CollapseHeader>

                    <CollapseBody>
                      {/* Select more featurs   */}

                      <AccordionList
                        data={this.state.Select_Services}
                        numColumns={3}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                          <View
                            style={{
                              padding: 10,
                              justifyContent: 'space-between',
                              width: '33%',
                            }}>
                            <TouchableOpacity
                              // onPress={this.ChangeColor(item.index)}
                              onPress={() =>
                                this.toggleModal(item.name, item.area)
                              }
                              // onPress={() => this.openModals(item.name)}
                              style={{
                                width: 100,
                                height: 100,
                                borderRadius: 100 / 2,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#f2f2f2',
                                // backgroundColor: this.state.index == item.index ? 'red' : 'green',
                                shadowColor: '#000',
                                shadowOffset: { width: 2, height: 2 },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.84,
                                elevation: 5,
                              }}>
                              <Image
                                source={item.imageurl}
                                style={{
                                  height: 45,
                                  width: 45,
                                  resizeMode: 'contain',
                                }}
                              />
                              <Text style={{ fontSize: 12 }}>{item.name}</Text>
                            </TouchableOpacity>
                          </View>
                        )}
                      />
                    </CollapseBody>
                  </Collapse>

                  {/* Apply Btn's */}
                  <View style={styles.ApplyView}>
                    {/* <TouchableOpacity style={styles.ApplyBtn}>
                                            <Text style={{fontFamily: 'Lato-Regular'}}>Apply</Text>
                                        </TouchableOpacity> */}
                    <View></View>
                    <TouchableOpacity
                      onPress={() => this.SearchStep2()}
                      style={styles.ApplyBtn}>
                      <Text style={{ fontFamily: 'Lato-Regular' }}>Search</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </ProgressStep>
            </ProgressSteps>
          </View>

          {/* Bathroom Modal */}

          <Modal
            style={{ margin: 0 }}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            animationInTiming={500}
            isVisible={this.state.isModalVisible}>
            <View
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                alignItems: 'center',
              }}>
              <View
                style={{
                  borderTopRightRadius: 20,
                  borderTopLeftRadius: 20,
                  height: 400,
                  width: '100%',
                  bottom: 0,
                  position: 'absolute',
                  backgroundColor: '#fff',
                  // alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 10,
                  }}>
                  <Text>{this.state.WeSelect}</Text>
                  <TouchableOpacity onPress={() => this.closemodal()}>
                    <Text>Close</Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    width: '100%',
                    height: 1,
                    backgroundColor: '#cccccc',
                  }}></View>
                <View style={{ padding: 20, top: 40 }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity
                      disabled={this.state.BathroomCounter == 0}
                      onPress={() => this.SubtaractBathroom()}
                      style={styles.LeftClickView}>
                      <Text style={{ fontWeight: 'bold', fontSize: 30 }}>-</Text>
                    </TouchableOpacity>

                    <View style={styles.TotalCountView}>
                      <Text style={{ fontWeight: 'bold', fontSize: 30 }}>
                        {this.state.BathroomCounter}
                      </Text>
                    </View>
                    <TouchableOpacity
                      disabled={this.state.BathroomCounter == 10}
                      onPress={() => this.AddBathroom()}
                      style={styles.LeftClickView}>
                      <Text style={{ fontWeight: 'bold', fontSize: 30 }}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </Modal>

          {/* Living Area Modal */}
          <Modal
            style={{ margin: 0 }}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            animationInTiming={500}
            isVisible={this.state.isModalVisible1}>
            <View
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                alignItems: 'center',
              }}>
              <View
                style={{
                  borderTopRightRadius: 20,
                  borderTopLeftRadius: 20,
                  height: 400,
                  width: '100%',
                  bottom: 0,
                  position: 'absolute',
                  backgroundColor: '#fff',
                  // alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 10,
                  }}>
                  <Text>{this.state.AreaSelect}</Text>
                  <TouchableOpacity onPress={() => this.closemodal()}>
                    <Text>Close</Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    width: '100%',
                    height: 1,
                    backgroundColor: '#cccccc',
                  }}></View>
                <View style={{ padding: 20, top: 40 }}>
                  <View
                    style={{
                      justifyContent: 'space-around',
                      alignItems: 'center',
                    }}>
                    <View style={styles.TotalCountView}>
                      <Text style={{ fontSize: 20, fontFamily: 'Lato-Bold' }}>
                        {this.state.rangeLow}
                      </Text>
                      <Text style={{ fontSize: 20, fontFamily: 'Lato-Bold' }}>
                        -{this.state.rangeHigh}sq/ft
                      </Text>
                    </View>

                    <RangeSlider
                      // elevation={2}
                      style={{ width: '100%', height: 70 }}
                      gravity={'center'}
                      // thumbRadius={10}
                      gravity="top"
                      min={50}
                      max={500}
                      step={50}
                      handleBorderWidth={1}
                      handleBorderColor="#F6D700"
                      selectionColor="#F6D700"
                      blankColor="#808080"
                      onValueChanged={(low, high) => {
                        this.setState({ rangeLow: low, rangeHigh: high });
                      }}
                    />
                  </View>
                </View>
              </View>
            </View>
          </Modal>

          {/* Slider Modal */}
          <Modal
            style={{ margin: 0 }}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            animationInTiming={500}
            isVisible={this.state.isModalVisible1}>
            <View
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                alignItems: 'center',
              }}>
              <View
                style={{
                  borderTopRightRadius: 20,
                  borderTopLeftRadius: 20,
                  height: 400,
                  width: '100%',
                  bottom: 0,
                  position: 'absolute',
                  backgroundColor: '#fff',
                  // alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 10,
                  }}>
                  <Text>{this.state.AreaSelect}</Text>
                  <TouchableOpacity onPress={() => this.closemodal()}>
                    <Text>Close</Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    width: '100%',
                    height: 1,
                    backgroundColor: '#cccccc',
                  }}></View>
                <View style={{ padding: 20, top: 40 }}>
                  <View
                    style={{
                      justifyContent: 'space-around',
                      alignItems: 'center',
                    }}>
                    <View style={styles.TotalCountView}>
                      <Text style={{ fontSize: 20, fontFamily: 'Lato-Bold' }}>
                        {this.state.rangeLow}
                      </Text>
                      <Text style={{ fontSize: 20, fontFamily: 'Lato-Bold' }}>
                        -{this.state.rangeHigh}sq/ft
                      </Text>
                    </View>

                    <RangeSlider
                      // elevation={2}
                      style={{ width: '100%', height: 70 }}
                      gravity={'center'}
                      // thumbRadius={10}
                      gravity="top"
                      min={50}
                      max={500}
                      step={50}
                      handleBorderWidth={1}
                      handleBorderColor="#F6D700"
                      selectionColor="#F6D700"
                      blankColor="#808080"
                      onValueChanged={(low, high) => {
                        this.setState({ rangeLow: low, rangeHigh: high });
                      }}
                    />
                  </View>
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
  container: {
    backgroundColor: '#ffffff',
    height: '100%',
    width: '100%',
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 3,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,

    // elevation: 2,
  },
  HeaderView: {
    height: 80,
    width: '100%',
    padding: 20,
    backgroundColor: '#000',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  HeaderTextView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
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
  Backimage: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
    opacity: 0.6,
  },
  CallHeaderMainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  BottomBorder: {
    borderWidth: 0.5,
    width: '100%',
    top: 5,
    borderColor: '#c0c0c0',
  },

  Downarrow: {
    width: 15,
    height: 15,
    right: 20,
    resizeMode: 'contain',
  },
  ApplyView: {
    marginTop: 20,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: 10,
  },
  ApplyBtn: {
    backgroundColor: '#F6D700',
    padding: 10,
    height: 40,
    width: 150,
    borderRadius: 20,
    alignItems: 'center',
  },
  TouchBTN: {
    marginLeft: 10,
    padding: 10,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 1,
  },
  TotalCountView: {
    height: 70,
    width: '45%',
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  LeftClickView: {
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
export default LookingHouseSteps;
