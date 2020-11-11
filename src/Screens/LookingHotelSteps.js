import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, FlatList } from 'react-native';

import Slider from '@react-native-community/slider';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
} from 'accordion-collapse-react-native';

import RangeSlider from 'rn-range-slider';

class LookingHotelSteps extends Component {
  constructor() {
    super();
    this.state = {

      "bedbreakfastcost":
      {
        "min": 2,
        "max": 15
      },
      "attributes":
      {
        "class": "worldclass",
        "locality": "airport"
      },
      "conferenceroom": 5,
      "kmfromtarmac": 15,
      "area": "delhi",
      "Hotel": "LandMark Hotel",





      index: 0,
      Cost: null,
      KMS: null,
      ConferenceCount: null,
      Sizearea: null,
      ShopDist: null,
      NeighbourDist: null,
      TarmacDist: null,
      WaterDist: null,
      ElectricityDist: null,
      Class_Data: [
        {
          index: '0',
          imageurl: require('../../assets/Icons/worldClass.png'),
          name: 'World class',
        },
        {
          index: '1',
          imageurl: require('../../assets/Icons/MidRange.png'),
          name: 'Mid Range',
        },
        {
          index: '2',
          imageurl: require('../../assets/Icons/Budget.png'),
          name: 'Budget',
        },
      ],
      Locality_Data: [
        {
          index: '0',
          imageurl: require('../../assets/Icons/city.png'),
          name: 'City',
        },
        {
          index: '1',
          imageurl: require('../../assets/Icons/Airport.png'),
          name: ' Airport',
        },
        {
          index: '2',
          imageurl: require('../../assets/Icons/Outskirts.png'),
          name: 'Outskirts',
        },
        {
          index: '3',
          imageurl: require('../../assets/Icons/GameHotel.png'),
          name: 'Game Hotel',
        },
      ],
      Select_More_Featurs: [
        {
          index: '0',
          imageurl: require('../../assets/Icons/carpark.png'),
          name: 'Car Parks',
        },
        {
          index: '1',
          imageurl: require('../../assets/Icons/aircon.png'),
          name: 'Aircon',
        },
        {
          index: '2',
          imageurl: require('../../assets/Icons/spa.png'),
          name: 'SPA',
        },
        {
          index: '3',
          imageurl: require('../../assets/Icons/freshoutdoor.png'),
          name: 'Fresh outdoor',
        },
        {
          index: '4',
          imageurl: require('../../assets/Icons/indoorpool.png'),
          name: 'Indoor Pool',
        },
        {
          index: '5',
          imageurl: require('../../assets/Icons/Disability.png'),
          name: 'Disability Access',
        },
        {
          index: '6',
          imageurl: require('../../assets/Icons/barlounge.png'),
          name: 'Bar lounge',
        },
        {
          index: '7',
          imageurl: require('../../assets/Icons/hairsaloon.png'),
          name: 'Hair Salon',
        },
        {
          index: '8',
          imageurl: require('../../assets/Icons/petsallowed.png'),
          name: 'Pet Allowed',
        },
        {
          index: '9',
          imageurl: require('../../assets/Icons/MatureGarden.png'),
          name: 'Mature Garden',
        },
      ],
    };
  }
  GoNextStep = () => {
    this.setState({
      index: this.state.index + 1,
    });
  };
  GoPreviousStep = () => {
    this.setState({
      index: this.state.index - 1,
    });
    if (this.state.index == 0) {
      this.props.navigation.navigate('WelcomeScreen');
    }
  };


  SearchStep1 = () => {
    //////////////// //////////////////////  SEARCH WITH STEP ONE DATA  ////////////////////////////////////////////
    console.log({

      data: {

        "bedbreakfastcost": {
          "min": this.state.Min_Breakfast_Cost,
          "max": this.state.Max_Breakfast_Cost
        },
        "attributes": {
          "class": this.state.class,
          "locality": this.state.locality
        },
        "conferenceroom": this.state.Max_Rooms,
        "kmfromtarmac": this.state.Max_Tarmac_Dist,
        "area": this.state.area,
        "Hotel": this.state.Hotel


      }
    })


    // const URL = 'http://192.168.137.1:4000/api/search/house-search-2'
    // axios({
    //   method: 'post',
    //   url: URL,
    //   data: {

    //     "bedbreakfastcost": {
    //       "min": this.state.Min_Breakfast_Cost,
    //       "max": this.state.Max_Breakfast_Cost
    //     },
    //     "attributes": {
    //       "class": this.state.class,
    //       "locality": this.state.locality
    //     },
    //     "conferenceroom": this.state.Max_Rooms,
    //     "kmfromtarmac": this.state.Max_Tarmac_Dist,
    //     "area": this.state.area,
    //     "Hotel": this.state.Hotel


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
    //       this.props.navigation.navigate('SearchFlipbook', { name: 'pawan', url: URL, opticalfiber: this.state.opticalfiber })
    //     } else {
    //       alert('Bad luck')
    //     }

    //   })
    //   /////////////////////////////////// ERROR ALERT API NOT RUN ///////////////////////////////////////////////////
    //   .catch(function (error) {
    //     console.log(error);
    //   });

  }


  render() {
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
          {/*//////////////////////////////////////  Header Start ///////////////////////////// */}
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
          {/* /////////////////// /////////////////// Header end  /////////////// */}
          <View style={{ width: '100%' }}>
            {/* /////////////////////// ProcessSteps Start Here /////////////////////////////////// */}
            <ProgressSteps
              {...progressStepsStyle}
              activeStep={this.state.index}>
              {/* ////////////////////// First Step Start Here //////////////////////////// */}
              <ProgressStep
                activeLabelColor="#000"
                label="Step 1"
                onNext={this.onPaymentStepComplete}
                onPrevious={this.onPrevStep}
                scrollViewProps={this.defaultScrollViewProps}
                removeBtnRow={true}>
                <View style={{ top: 20 }}>
                  {/*///////////////////////////////////  Class   ///////////////////////////// */}
                  <Collapse>
                    <CollapseHeader style={{ height: 50 }}>
                      <View style={styles.CallHeaderMainView}>
                        <Text style={{ left: 10, fontFamily: 'Lato-Regular' }}>
                          Class
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
                        data={this.state.Class_Data}
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
                              onPress={() => this.setState({ class: item.name })}
                              style={{
                                width: 100,
                                height: 100,
                                borderRadius: 50,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#f2f2f2',
                                backgroundColor: this.state.class == item.name ? '#F6D700' : '#f2f2f2',
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
                  {/* ///////////////////////////////////////// Locality  ////////////////////////*/}
                  <Collapse>
                    <CollapseHeader style={{ height: 50 }}>
                      <View style={styles.CallHeaderMainView}>
                        <Text style={{ left: 10, fontFamily: 'Lato-Regular' }}>
                          Locality
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
                        data={this.state.Locality_Data}
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
                              onPress={() => this.setState({ locality: item.name })}
                              style={{
                                width: 100,
                                height: 100,
                                borderRadius: 50,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#f2f2f2',
                                backgroundColor: this.state.locality == item.name ? '#F6D700' : '#f2f2f2',
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

                  {/* /////////////////////////////////////////////  Enter a location suburb or town ///////////////////////////////  */}
                  <Collapse>
                    <CollapseHeader style={{ height: 60 }}>
                      <View style={{ paddingHorizontal: 20 }}>
                        <View
                          style={{
                            width: '100%',
                            flexDirection: 'row',
                            borderWidth: 1,
                            height: 40,
                            borderColor: '#C0C0C0',
                            // backgroundColor: 'red',
                            borderRadius: 20,
                            alignItems: 'center',
                          }}>
                          <Image
                            style={{ width: 20, height: 20, left: 20 }}
                            source={require('../../assets/Icons/SearchIcon.png')}
                          />
                          <TextInput
                            placeholderTextColor="#000"
                            placeholder="Enter a loccation suburb or town"
                            style={{ left: 20, fontFamily: 'Lato-Regular' }}
                            onChangeText={(text) => this.setState({ area: text })}
                          />
                        </View>
                      </View>
                    </CollapseHeader>
                  </Collapse>

                  {/* /////////////////////////////////////////////   Bed  breadfast cost  ///////////////////////////////  */}
                  <Collapse>
                    <CollapseHeader style={{ height: 50 }}>
                      <View style={styles.CallHeaderMainView}>
                        <Text style={{ left: 10, fontFamily: 'Lato-Regular' }}>

                          Bed breadfast cost
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
                            marginTop: -20,
                          }}>
                          <Text>${this.state.Min_Breakfast_Cost}</Text>
                          <Text>-{this.state.Max_Breakfast_Cost}</Text>
                        </View>
                        <RangeSlider
                          // elevation={2}
                          style={{ width: '100%', height: 70 }}
                          gravity={'center'}
                          min={50}
                          max={500}
                          step={50}
                          handleBorderWidth={0.5}
                          handleBorderColor="#F6D700"
                          selectionColor="#F6D700"
                          blankColor="#808080"
                          onValueChanged={(
                            Min_Breakfast_Cost,
                            Max_Breakfast_Cost,
                          ) => {
                            this.setState({
                              Min_Breakfast_Cost: Min_Breakfast_Cost,
                              Max_Breakfast_Cost: Max_Breakfast_Cost,
                            });
                          }}
                        />
                      </View>
                    </CollapseBody>
                  </Collapse>
                  {/* /////////////////////////////////////////////  Hotel name ///////////////////////////////  */}
                  <Collapse>
                    <CollapseHeader style={{ height: 60 }}>
                      <View style={{ paddingHorizontal: 20 }}>
                        <View
                          style={{
                            width: '100%',
                            flexDirection: 'row',
                            borderWidth: 1,
                            height: 40,
                            borderColor: '#C0C0C0',
                            // backgroundColor: 'red',
                            borderRadius: 20,
                            alignItems: 'center',
                          }}>
                          <Image
                            style={{ width: 20, height: 20, left: 20 }}
                            source={require('../../assets/Icons/SearchIcon.png')}
                          />
                          <TextInput
                            placeholderTextColor="#000"
                            placeholder="Hotel Name"
                            style={{ left: 20, fontFamily: 'Lato-Regular' }}
                            onChangeText={(text) => this.setState({ Hotel: text })}
                          />
                        </View>
                      </View>
                    </CollapseHeader>
                  </Collapse>
                  {/* /////////////////////////////// KMs to tarmac ////////////////////// */}
                  <Collapse>
                    <CollapseHeader style={{ height: 50 }}>
                      <View
                        style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                          style={{
                            height: 15,
                            width: 15,
                            resizeMode: 'contain',
                            marginLeft: 10,
                          }}
                          source={require('../../assets/Icons/AllWather.png')}
                        />
                        <Text
                          style={{ marginLeft: 10, fontFamily: 'Lato-Regular' }}>
                          {' '}
                          KMs to tarmac
                        </Text>
                      </View>
                      <View style={styles.BottomBorder}></View>
                    </CollapseHeader>

                    <CollapseBody>
                      <View style={{ padding: 10, height: 100 }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                            marginTop: -20,
                          }}>
                          <Text>{this.state.Min_Tarmac_Dist}</Text>
                          <Text>-{this.state.Max_Tarmac_Dist}/KM</Text>
                        </View>
                        <RangeSlider
                          // elevation={2}
                          style={{ width: '100%', height: 70 }}
                          gravity={'center'}
                          min={50}
                          max={500}
                          step={50}
                          handleBorderWidth={0.5}
                          handleBorderColor="#F6D700"
                          selectionColor="#F6D700"
                          blankColor="#808080"
                          onValueChanged={(
                            Min_Tarmac_Dist,
                            Max_Tarmac_Dist,
                          ) => {
                            this.setState({
                              Min_Tarmac_Dist: Min_Tarmac_Dist,
                              Max_Tarmac_Dist: Max_Tarmac_Dist,
                            });
                          }}
                        />
                      </View>
                    </CollapseBody>
                  </Collapse>
                  {/* ///////////////////////////////////// conference room and number   ////////////////////////////// */}
                  <Collapse>
                    <CollapseHeader style={{ height: 50 }}>
                      <View
                        style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                          style={{
                            height: 15,
                            width: 15,
                            resizeMode: 'contain',
                            marginLeft: 10,
                          }}
                          source={require('../../assets/Icons/PartyArea.png')}
                        />
                        <Text
                          style={{ marginLeft: 10, fontFamily: 'Lato-Regular' }}>
                          Conference room and number
                        </Text>
                      </View>
                      <View style={styles.BottomBorder}></View>
                    </CollapseHeader>

                    <CollapseBody>
                      <View style={{ padding: 10, height: 100 }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                            marginTop: -20,
                          }}>
                          <Text>{this.state.Min_Rooms}</Text>
                          <Text>-{this.state.Max_Rooms}</Text>
                        </View>
                        <RangeSlider
                          // elevation={2}
                          style={{ width: '100%', height: 70 }}
                          gravity={'center'}
                          min={5}
                          max={50}
                          step={5}
                          handleBorderWidth={0.5}
                          handleBorderColor="#F6D700"
                          selectionColor="#F6D700"
                          blankColor="#808080"
                          onValueChanged={(Min_Rooms, Max_Rooms) => {
                            this.setState({
                              Min_Rooms: Min_Rooms,
                              Max_Rooms: Max_Rooms,
                            });
                          }}
                        />
                      </View>
                    </CollapseBody>
                  </Collapse>

                  {/* Apply btn */}
                  <View style={styles.ApplyView}>
                    <TouchableOpacity
                      onPress={() => this.SearchStep1()}
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

              {/*//////////////////////////////  Second processStep Start Here ///////////////////////////////////////// */}
              <ProgressStep
                label="Step 2"
                removeBtnRow={true}
                onNext={this.onNextStep}
                onPrevious={this.onPrevStep}
                scrollViewProps={this.defaultScrollViewProps}>
                <View style={{ top: 20 }}>
                  {/* //////////////////////////////////////////  Class /////////////////////////////////////  */}
                  <Collapse>
                    <CollapseHeader style={{ height: 50 }}>
                      <View style={styles.CallHeaderMainView}>
                        <Text style={{ left: 10, fontFamily: 'Lato-Regular' }}>
                          select more features
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
                              // onPress={this.ChangeColor(item.index)}
                              style={{
                                width: 100,
                                height: 100,
                                borderRadius: 50,
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
                  {/* ///////////////////////////////////////////  Apply Btn's /////////////////////////////////////// */}
                  <View style={styles.ApplyView}>
                    {/* <TouchableOpacity style={styles.ApplyBtn}>
                                            <Text style={{fontFamily: 'Lato-Regular'}}>Apply</Text>
                                        </TouchableOpacity> */}
                    <View></View>
                    <TouchableOpacity
                      // onPress={this.GoNextStep}
                      onPress={() =>
                        this.props.navigation.navigate('SearchFlipbook')
                      }
                      style={styles.ApplyBtn}>
                      <Text style={{ fontFamily: 'Lato-Regular' }}>Search</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </ProgressStep>
            </ProgressSteps>
            {/* //////////////////////////////// End All ProcessSteps Here ///////////////////////////////////// */}
          </View>
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 2,
  },
  HeaderView: {
    width: '100%',
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
  CallBodyMainView: {
    height: 150,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  BottomBorder: {
    borderWidth: 0.5,
    width: '100%',
    top: 5,
    borderColor: '#c0c0c0',
  },
  CategoryCircleView: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 2,
  },
  CategoryIcons: {
    height: 45,
    width: 45,
    resizeMode: 'contain',
  },
  Downarrow: {
    width: 15,
    height: 15,
    right: 20,
    resizeMode: 'contain',
  },
  ApplyView: {
    marginTop: -10,
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
});
export default LookingHotelSteps;
