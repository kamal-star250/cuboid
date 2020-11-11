import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TextInput} from 'react-native';

// Import Dipendecies
// import Slider from '@react-native-community/slider';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
} from 'accordion-collapse-react-native';

import RangeSlider from 'rn-range-slider';

class LookingWarehouseSteps extends Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      Cost: null,
      Sizeft: null,
      KMtatmac: null,
      clicked: false,
      Type_Data: [
        {
          index: '0',
          imageurl: require('../../assets/Icons/godown.png'),
          name: 'Go Down',
        },
        {
          index: '1',
          imageurl: require('../../assets/Icons/commercialspace.png'),
          name: 'Commspace',
        },
      ],
      Choose_Main_Category: [
        {
          index: '0',
          imageurl: require('../../assets/Icons/Buy.png'),
          name: 'Buy',
        },
        {
          index: '1',
          imageurl: require('../../assets/Icons/Rent.png'),
          name: 'Let',
        },
      ],
      Select_Services: [
        {
          index: '0',
          imageurl: require('../../assets/Icons/Conferencefacilities.png'),
          name: 'Confrance',
        },
        {
          index: '1',
          imageurl: require('../../assets/Icons/freshoutdoor.png'),
          name: 'Fresh Outdoor',
        },
        {
          index: '2',
          imageurl: require('../../assets/Icons/Wifi.png'),
          name: 'Wifi',
        },
        {
          index: '3',
          imageurl: require('../../assets/Icons/aircon.png'),
          name: 'Aircone',
        },
        {
          index: '4',
          imageurl: require('../../assets/Icons/fullyfurnished.png'),
          name: 'Fully Furnished',
        },
        {
          index: '5',
          imageurl: require('../../assets/Icons/sharedsecretary.png'),
          name: 'Shared Secretary',
        },
        {
          index: '6',
          imageurl: require('../../assets/Icons/Redsoil.png'),
          name: 'Large Garden',
        },
      ],
      Zooning_Data: [
        {
          index: '0',
          imageurl: require('../../assets/Icons/commercial2.png'),
          name: 'Commercial',
        },
        {
          index: '1',
          imageurl: require('../../assets/Icons/industrial2.png'),
          name: 'Indrustia',
        },
        {
          index: '2',
          imageurl: require('../../assets/Icons/Residential.png'),
          name: 'Residential',
        },
        {
          index: '3',
          imageurl: require('../../assets/Icons/EPZ.png'),
          name: 'EPZ',
        },
      ],
      Town_Location_Data: [
        {
          index: '0',
          imageurl: require('../../assets/Icons/commercial2.png'),
          name: 'Downtown',
        },
        {
          index: '1',
          imageurl: require('../../assets/Icons/industrial2.png'),
          name: 'Uptown',
        },
        {
          index: '2',
          imageurl: require('../../assets/Icons/Residential.png'),
          name: 'Near Town',
        },
      ],
      Access_Road_Data: [
        {
          index: '0',
          imageurl: require('../../assets/Icons/Tarmac.png'),
          name: 'Tarmac',
        },
        {
          index: '1',
          imageurl: require('../../assets/Icons/Cabro.png'),
          name: 'Cabro',
        },
        {
          index: '2',
          imageurl: require('../../assets/Icons/AllWather.png'),
          name: 'All Wather',
        },
        {
          index: '3',
          imageurl: require('../../assets/Icons/Tarmac.png'),
          name: 'Main',
        },
      ],
      Town_Location_Data: [
        {
          index: '0',
          imageurl: require('../../assets/Icons/commercial2.png'),
          name: 'Downtown',
        },
        {
          index: '1',
          imageurl: require('../../assets/Icons/industrial2.png'),
          name: 'Uptown',
        },
        {
          index: '2',
          imageurl: require('../../assets/Icons/Residential.png'),
          name: 'Near Town',
        },
      ],
      Tenants_Data: [
        {
          index: '0',
          imageurl: require('../../assets/Icons/Bathrooms.png'),
          name: 'Mixed',
        },
        {
          index: '1',
          imageurl: require('../../assets/Icons/SteamBath.png'),
          name: 'Specialized',
        },
        {
          index: '2',
          imageurl: require('../../assets/Icons/Lift.png'),
          name: 'Processing',
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
    // console.log(this.state.index);
    if (this.state.index == 0) {
      this.props.navigation.navigate('WelcomeScreen');
    }
  };
  ChangeColor = () => {
    this.setState({
      unclicked: this.state.clicked,
    });
  };

  render() {
    //Define ProcessSteps Style
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
      <View style={{flex: 1}}>
        <ScrollView style={{bottom: 10}}>
          {/*  /////////////////////////////////////////// Header Start ///////////////////////////*/}
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
                style={{alignItems: 'center'}}>
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
          {/*////////////////////////////  Header end  /////////////////////////////// */}

          <View style={{width: '100%'}}>
            {/* ////////////////////////////////  ProcessSteps Start Here  ///////////////////////////////// */}
            <ProgressSteps
              {...progressStepsStyle}
              activeStep={this.state.index}>
              {/* ////////////////////////// First ProcessStep Start Here ////////////////////////////// */}
              <ProgressStep
                activeLabelColor="#000"
                label="Step 1"
                onNext={this.onPaymentStepComplete}
                onPrevious={this.onPrevStep}
                scrollViewProps={this.defaultScrollViewProps}
                removeBtnRow={true}>
                <View style={{top: 20}}>
                  {/* ///////////////////// TYPE COLLAPSE////////////////////////////// */}
                  <Collapse>
                    <CollapseHeader style={{height: 50}}>
                      <View style={styles.CallHeaderMainView}>
                        <Text style={{left: 10, fontFamily: 'Lato-Regular'}}>
                          Type
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
                        data={this.state.Type_Data}
                        numColumns={3}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) => (
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
                                borderRadius: 100 / 2,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#f2f2f2',
                                // backgroundColor: this.state.index == item.index ? 'red' : 'green',
                                shadowColor: '#000',
                                shadowOffset: {width: 2, height: 2},
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
                              <Text style={{fontSize: 12}}>{item.name}</Text>
                            </TouchableOpacity>
                          </View>
                        )}
                      />
                    </CollapseBody>
                  </Collapse>
                  {/* /////////////////////  Choose a category  ////////////////////////////// */}

                  <Collapse>
                    <CollapseHeader style={{height: 50}}>
                      <View style={styles.CallHeaderMainView}>
                        <Text style={{left: 10, fontFamily: 'Lato-Regular'}}>
                          Choose a category{' '}
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
                        data={this.state.Choose_Main_Category}
                        numColumns={3}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) => (
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
                                borderRadius: 100 / 2,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#f2f2f2',
                                // backgroundColor: this.state.index == item.index ? 'red' : 'green',
                                shadowColor: '#000',
                                shadowOffset: {width: 2, height: 2},
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
                              <Text style={{fontSize: 12}}>{item.name}</Text>
                            </TouchableOpacity>
                          </View>
                        )}
                      />
                    </CollapseBody>
                    ;
                  </Collapse>

                  {/* ////////////////////////////////  COST /////////////////////////////////////////// */}

                  <Collapse>
                    <CollapseHeader style={{height: 50}}>
                      <View style={styles.CallHeaderMainView}>
                        <Text style={{left: 10, fontFamily: 'Lato-Regular'}}>
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
                      <View style={{padding: 10, height: 100}}>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                            marginTop: -20,
                          }}>
                          <Text>${this.state.Min_Cost}</Text>
                          <Text>-{this.state.Max_Cost}</Text>
                        </View>
                        <RangeSlider
                          // elevation={2}
                          style={{width: '100%', height: 70}}
                          gravity={'center'}
                          min={50}
                          max={500}
                          step={50}
                          handleBorderWidth={0.5}
                          handleBorderColor="#F6D700"
                          selectionColor="#F6D700"
                          blankColor="#808080"
                          onValueChanged={(Min_Cost, Max_Cost) => {
                            this.setState({
                              Min_Cost: Min_Cost,
                              Max_Cost: Max_Cost,
                            });
                          }}
                        />
                      </View>
                    </CollapseBody>
                  </Collapse>
                  {/* ////////////////////////////////  Size in Feet /////////////////////////////////////////// */}

                  <Collapse>
                    <CollapseHeader style={{height: 50}}>
                      <View style={styles.CallHeaderMainView}>
                        <Text style={{left: 10, fontFamily: 'Lato-Regular'}}>
                          Size in ft
                        </Text>
                        <Image
                          style={styles.Downarrow}
                          source={require('../../assets/Icons/Downarrow.png')}
                        />
                      </View>
                      <View style={styles.BottomBorder}></View>
                    </CollapseHeader>

                    <CollapseBody>
                      <View style={{padding: 10, height: 100}}>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                            marginTop: -20,
                          }}>
                          <Text>${this.state.Min_Size}</Text>
                          <Text>-{this.state.Max_Size}</Text>
                        </View>
                        <RangeSlider
                          // elevation={2}
                          style={{width: '100%', height: 70}}
                          gravity={'center'}
                          min={50}
                          max={500}
                          step={50}
                          handleBorderWidth={0.5}
                          handleBorderColor="#F6D700"
                          selectionColor="#F6D700"
                          blankColor="#808080"
                          onValueChanged={(Min_Size, Max_Size) => {
                            this.setState({
                              Min_Size: Min_Size,
                              Max_Size: Max_Size,
                            });
                          }}
                        />
                      </View>
                    </CollapseBody>
                  </Collapse>
                  {/* ////////////////////////////////  KMs from tarmac /////////////////////////////////////////// */}
                  <Collapse>
                    <CollapseHeader style={{height: 50}}>
                      <View style={styles.CallHeaderMainView}>
                        <Text style={{left: 10, fontFamily: 'Lato-Regular'}}>
                          KMs from tarmac
                        </Text>
                        <Image
                          style={styles.Downarrow}
                          source={require('../../assets/Icons/Downarrow.png')}
                        />
                      </View>
                      <View style={styles.BottomBorder}></View>
                    </CollapseHeader>

                    <CollapseBody>
                      <View style={{padding: 10, height: 100}}>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                            marginTop: -20,
                          }}>
                          <Text>${this.state.Min_Tarm_Dist}</Text>
                          <Text>-{this.state.Max_Tarm_Dist}</Text>
                        </View>
                        <RangeSlider
                          // elevation={2}
                          style={{width: '100%', height: 70}}
                          gravity={'center'}
                          min={50}
                          max={500}
                          step={50}
                          handleBorderWidth={0.5}
                          handleBorderColor="#F6D700"
                          selectionColor="#F6D700"
                          blankColor="#808080"
                          onValueChanged={(Min_Tarm_Dist, Max_Tarm_Dist) => {
                            this.setState({
                              Min_Tarm_Dist: Min_Tarm_Dist,
                              Max_Tarm_Dist: Max_Tarm_Dist,
                            });
                          }}
                        />
                      </View>
                    </CollapseBody>
                  </Collapse>

                  {/*  //////////////////////////////  Apply btn  /////////////////////////////*/}
                  <View style={styles.ApplyView}>
                    <TouchableOpacity style={styles.ApplyBtn}>
                      <Text style={{fontFamily: 'Lato-Regular'}}>Search</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      // onPress={() => this.props.navigation.navigate('SearchHouseStep2')}
                      onPress={this.GoNextStep}
                      style={styles.ApplyBtn}>
                      <Text style={{fontFamily: 'Lato-Regular'}}>Next</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </ProgressStep>
              {/* ////////////////////////////////  Second Process Step Start here /////////////////////////////////////////// */}

              <ProgressStep
                label="Step 2"
                removeBtnRow={true}
                onNext={this.onNextStep}
                onPrevious={this.onPrevStep}
                scrollViewProps={this.defaultScrollViewProps}>
                <View style={{top: 20}}>
                  {/* ////////////////////////////////  Select Services /////////////////////////////////////////// */}
                  <Collapse>
                    <CollapseHeader style={{height: 50}}>
                      <View style={styles.CallHeaderMainView}>
                        <Text style={{left: 10, fontFamily: 'Lato-Regular'}}>
                          Select services
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
                        data={this.state.Select_Services}
                        numColumns={3}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) => (
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
                                borderRadius: 100 / 2,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#f2f2f2',
                                // backgroundColor: this.state.index == item.index ? 'red' : 'green',
                                shadowColor: '#000',
                                shadowOffset: {width: 2, height: 2},
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
                              <Text style={{fontSize: 12}}>{item.name}</Text>
                            </TouchableOpacity>
                          </View>
                        )}
                      />
                    </CollapseBody>
                  </Collapse>
                  {/* /////////////////////////////////////////  Apply Btn's ////////////////////////////////////////// */}
                  <View style={styles.ApplyView}>
                    <TouchableOpacity style={styles.ApplyBtn}>
                      <Text style={{fontFamily: 'Lato-Regular'}}>Search</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={this.GoNextStep}
                      style={styles.ApplyBtn}>
                      <Text style={{fontFamily: 'Lato-Regular'}}>Next</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </ProgressStep>
              {/* ///////////////////////////Third ProcessStep Start Here /////////////////////////////////// */}
              <ProgressStep
                label="Step 3"
                removeBtnRow={true}
                onNext={this.onNextStep}
                onPrevious={this.onPrevStep}
                scrollViewProps={this.defaultScrollViewProps}>
                <View style={{top: 20}}>
                  {/* ///////////////////////////  Type/////////////////////////////////// */}
                  <Collapse>
                    <CollapseHeader style={{height: 50}}>
                      <View style={styles.CallHeaderMainView}>
                        <Text style={{left: 10, fontFamily: 'Lato-Regular'}}>
                          Zooning
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
                        data={this.state.Zooning_Data}
                        numColumns={3}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) => (
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
                                borderRadius: 100 / 2,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#f2f2f2',
                                // backgroundColor: this.state.index == item.index ? 'red' : 'green',
                                shadowColor: '#000',
                                shadowOffset: {width: 2, height: 2},
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
                              <Text style={{fontSize: 12}}>{item.name}</Text>
                            </TouchableOpacity>
                          </View>
                        )}
                      />
                    </CollapseBody>
                  </Collapse>
                  {/* ///////////////////////////  Town Location   /////////////////////////////////// */}
                  <Collapse>
                    <CollapseHeader style={{height: 50}}>
                      <View style={styles.CallHeaderMainView}>
                        <Text style={{left: 10, fontFamily: 'Lato-Regular'}}>
                          Twon location{' '}
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
                        data={this.state.Town_Location_Data}
                        numColumns={3}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) => (
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
                                borderRadius: 100 / 2,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#f2f2f2',
                                // backgroundColor: this.state.index == item.index ? 'red' : 'green',
                                shadowColor: '#000',
                                shadowOffset: {width: 2, height: 2},
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
                              <Text style={{fontSize: 12}}>{item.name}</Text>
                            </TouchableOpacity>
                          </View>
                        )}
                      />
                    </CollapseBody>
                  </Collapse>
                  {/* ///////////////////////////  Access Road  /////////////////////////////////// */}

                  <Collapse>
                    <CollapseHeader style={{height: 50}}>
                      <View style={styles.CallHeaderMainView}>
                        <Text style={{left: 10, fontFamily: 'Lato-Regular'}}>
                          Access road{' '}
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
                        data={this.state.Access_Road_Data}
                        numColumns={3}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) => (
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
                                borderRadius: 100 / 2,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#f2f2f2',
                                // backgroundColor: this.state.index == item.index ? 'red' : 'green',
                                shadowColor: '#000',
                                shadowOffset: {width: 2, height: 2},
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
                              <Text style={{fontSize: 12}}>{item.name}</Text>
                            </TouchableOpacity>
                          </View>
                        )}
                      />
                    </CollapseBody>
                  </Collapse>
                  {/*////////////////////////////////////////////////////// Tenants  //////////////////////////////////  */}
                  <Collapse>
                    <CollapseHeader style={{height: 50}}>
                      <View style={styles.CallHeaderMainView}>
                        <Text style={{left: 10, fontFamily: 'Lato-Regular'}}>
                          Tenants
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
                        data={this.state.Tenants_Data}
                        numColumns={3}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) => (
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
                                borderRadius: 100 / 2,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#f2f2f2',
                                // backgroundColor: this.state.index == item.index ? 'red' : 'green',
                                shadowColor: '#000',
                                shadowOffset: {width: 2, height: 2},
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
                              <Text style={{fontSize: 12}}>{item.name}</Text>
                            </TouchableOpacity>
                          </View>
                        )}
                      />
                    </CollapseBody>
                  </Collapse>
                  {/*/////////////////////////////////////////  Elevator /////////////////////////////////////  */}
                  <Collapse>
                    <CollapseHeader style={{height: 50}}>
                      <View style={styles.CallHeaderMainView}>
                        <Text style={{left: 10, fontFamily: 'Lato-Regular'}}>
                          Elevator
                        </Text>
                        <Image
                          style={styles.Downarrow}
                          source={require('../../assets/Icons/Downarrow.png')}
                        />
                      </View>
                      <View style={styles.BottomBorder}></View>
                    </CollapseHeader>

                    <CollapseBody>
                      <View style={{flexDirection: 'row', height: 50}}>
                        <TouchableOpacity style={styles.TouchBTN}>
                          <Text
                            style={{fontSize: 10, fontFamily: 'Lato-Regular'}}>
                            NONE
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.TouchBTN}>
                          <Text
                            style={{fontSize: 10, fontFamily: 'Lato-Regular'}}>
                            GOODS
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.TouchBTN}>
                          <Text
                            style={{fontSize: 10, fontFamily: 'Lato-Regular'}}>
                            {' '}
                            PASSENGER
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.TouchBTN}>
                          <Text
                            style={{fontSize: 10, fontFamily: 'Lato-Regular'}}>
                            PASSENGERS AND GOODS
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </CollapseBody>
                  </Collapse>
                  {/* /////////////////////////////// Security  ////////////////////////////////////// */}
                  <Collapse>
                    <CollapseHeader style={{height: 50}}>
                      <View style={styles.CallHeaderMainView}>
                        <Text style={{left: 10, fontFamily: 'Lato-Regular'}}>
                          Security
                        </Text>
                        <Image
                          style={styles.Downarrow}
                          source={require('../../assets/Icons/Downarrow.png')}
                        />
                      </View>
                      <View style={styles.BottomBorder}></View>
                    </CollapseHeader>

                    <CollapseBody>
                      <View style={{flexDirection: 'row', height: 50}}>
                        <TouchableOpacity style={styles.TouchBTN}>
                          <Text
                            style={{fontSize: 10, fontFamily: 'Lato-Regular'}}>
                            TIGHT
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.TouchBTN}>
                          <Text
                            style={{fontSize: 10, fontFamily: 'Lato-Regular'}}>
                            MAINGATE
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.TouchBTN}>
                          <Text
                            style={{fontSize: 10, fontFamily: 'Lato-Regular'}}>
                            {' '}
                            MAINGATE AND FLOORS
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.TouchBTN}>
                          <Text
                            style={{fontSize: 10, fontFamily: 'Lato-Regular'}}>
                            NONE
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </CollapseBody>
                  </Collapse>
                  {/* ///////////////////////////////////// Vechicle Traffic ///////////////////////////////////////////*/}
                  <Collapse>
                    <CollapseHeader style={{height: 50}}>
                      <View style={styles.CallHeaderMainView}>
                        <Text style={{left: 10, fontFamily: 'Lato-Regular'}}>
                          Vechicle traffic
                        </Text>
                        <Image
                          style={styles.Downarrow}
                          source={require('../../assets/Icons/Downarrow.png')}
                        />
                      </View>
                      <View style={styles.BottomBorder}></View>
                    </CollapseHeader>

                    <CollapseBody>
                      <View style={{flexDirection: 'row', height: 50}}>
                        <TouchableOpacity style={styles.TouchBTN}>
                          <Text
                            style={{fontSize: 10, fontFamily: 'Lato-Regular'}}>
                            VERY HEIGH
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.TouchBTN}>
                          <Text
                            style={{fontSize: 10, fontFamily: 'Lato-Regular'}}>
                            HEIGH
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.TouchBTN}>
                          <Text
                            style={{fontSize: 10, fontFamily: 'Lato-Regular'}}>
                            LOW
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </CollapseBody>
                  </Collapse>
                  {/* //////////////////////////////////////  Human Traffic  ///////////////////////////////////////// */}
                  <Collapse>
                    <CollapseHeader style={{height: 50}}>
                      <View style={styles.CallHeaderMainView}>
                        <Text style={{left: 10, fontFamily: 'Lato-Regular'}}>
                          Human traffic
                        </Text>
                        <Image
                          style={styles.Downarrow}
                          source={require('../../assets/Icons/Downarrow.png')}
                        />
                      </View>
                      <View style={styles.BottomBorder}></View>
                    </CollapseHeader>

                    <CollapseBody>
                      <View style={{flexDirection: 'row', height: 50}}>
                        <TouchableOpacity style={styles.TouchBTN}>
                          <Text
                            style={{fontSize: 10, fontFamily: 'Lato-Regular'}}>
                            VERY HEIGH
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.TouchBTN}>
                          <Text
                            style={{fontSize: 10, fontFamily: 'Lato-Regular'}}>
                            HEIGH
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.TouchBTN}>
                          <Text
                            style={{fontSize: 10, fontFamily: 'Lato-Regular'}}>
                            LOW
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </CollapseBody>
                  </Collapse>
                  {/* ///////////////////////////////////////  Meeting room  ////////////////////////////////////////// */}
                  <Collapse>
                    <CollapseHeader style={{height: 50}}>
                      <View style={styles.CallHeaderMainView}>
                        <Text style={{left: 10, fontFamily: 'Lato-Regular'}}>
                          Meeting room
                        </Text>
                        <Image
                          style={styles.Downarrow}
                          source={require('../../assets/Icons/Downarrow.png')}
                        />
                      </View>
                      <View style={styles.BottomBorder}></View>
                    </CollapseHeader>

                    <CollapseBody>
                      <View style={{flexDirection: 'row', height: 50}}>
                        <TouchableOpacity style={styles.TouchBTN}>
                          <Text
                            style={{fontSize: 10, fontFamily: 'Lato-Regular'}}>
                            NONE
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.TouchBTN}>
                          <Text
                            style={{fontSize: 10, fontFamily: 'Lato-Regular'}}>
                            FREE
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.TouchBTN}>
                          <Text
                            style={{fontSize: 10, fontFamily: 'Lato-Regular'}}>
                            PAID
                          </Text>
                        </TouchableOpacity>
                        <Text></Text>
                        <Text></Text>
                      </View>
                    </CollapseBody>
                  </Collapse>
                  {/* //////////////////////////////// Parking  ///////////////////////// */}
                  <Collapse>
                    <CollapseHeader style={{height: 50}}>
                      <View style={styles.CallHeaderMainView}>
                        <Text style={{left: 10, fontFamily: 'Lato-Regular'}}>
                          Parking
                        </Text>
                        <Image
                          style={styles.Downarrow}
                          source={require('../../assets/Icons/Downarrow.png')}
                        />
                      </View>
                      <View style={styles.BottomBorder}></View>
                    </CollapseHeader>

                    <CollapseBody>
                      <View style={{flexDirection: 'row', height: 50}}>
                        <TouchableOpacity style={styles.TouchBTN}>
                          <Text
                            style={{fontSize: 10, fontFamily: 'Lato-Regular'}}>
                            NONE
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.TouchBTN}>
                          <Text
                            style={{fontSize: 10, fontFamily: 'Lato-Regular'}}>
                            FREE
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.TouchBTN}>
                          <Text
                            style={{fontSize: 10, fontFamily: 'Lato-Regular'}}>
                            PAID
                          </Text>
                        </TouchableOpacity>
                        <Text></Text>
                        <Text></Text>
                      </View>
                    </CollapseBody>
                  </Collapse>
                  {/*/////////////////////////////////////////////  Apply and Search Button's ////////////////////////////// */}
                  <View style={styles.ApplyView}>
                    {/* <TouchableOpacity style={styles.ApplyBtn}>
                                            <Text style={{fontFamily: 'Lato-Regular'}}>Apply</Text>
                                        </TouchableOpacity> */}
                    <View></View>
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate('SearchFlipbook')
                      }
                      style={styles.ApplyBtn}>
                      <Text style={{fontFamily: 'Lato-Regular'}}>Search</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </ProgressStep>
            </ProgressSteps>
            {/* End Steps */}
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
    fontSize: 18,
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
    // marginTop: 10,
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
});
export default LookingWarehouseSteps;
