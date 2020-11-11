import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TextInput} from 'react-native';

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

class LookingLandSteps extends Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      Cost: null,
      Sizearea: null,
      ShopDist: null,
      NeighbourDist: null,
      TarmacDist: null,
      WaterDist: null,
      ElectricityDist: null,
      MainCategory: [
        {
          index: '0',
          imageurl: require('../../assets/Icons/Buy.png'),
          name: 'Buy',
        },
        {
          index: '1',
          imageurl: require('../../assets/Icons/Rent.png'),
          name: ' Let',
        },
      ],
      Select_Services: [
        {
          index: '0',
          imageurl: require('../../assets/Icons/CouncialWater.png'),
          name: 'Councial Water',
        },
        {
          index: '1',
          imageurl: require('../../assets/Icons/Electricityonsite.png'),
          name: 'Elelcticity Site',
        },
        {
          index: '2',
          imageurl: require('../../assets/Icons/Borehole2.png'),
          name: 'Bore Hole',
        },
        {
          index: '3',
          imageurl: require('../../assets/Icons/ReadyFence.png'),
          name: 'Ready Fance',
        },
        {
          index: '4',
          imageurl: require('../../assets/Icons/ControlledDepartment.png'),
          name: 'Controlled',
        },
        {
          index: '5',
          imageurl: require('../../assets/Icons/WaterFront.png'),
          name: 'Water Front',
        },
        {
          index: '6',
          imageurl: require('../../assets/Icons/Gated.png'),
          name: 'Gated',
        },
      ],
      Soil_Type_Data: [
        {
          index: '0',
          imageurl: require('../../assets/Icons/Redsoil.png'),
          name: 'Red',
        },
        {
          index: '1',
          imageurl: require('../../assets/Icons/Redsoil.png'),
          name: 'Black Cotton',
        },
        {
          index: '2',
          imageurl: require('../../assets/Icons/Murram.png'),
          name: 'Murram',
        },
      ],
      Nature_Data: [
        {
          index: '0',
          imageurl: require('../../assets/Icons/Residential.png'),
          name: 'Residential',
        },
        {
          index: '1',
          imageurl: require('../../assets/Icons/Commercial.png'),
          name: 'Commercial',
        },
        {
          index: '2',
          imageurl: require('../../assets/Icons/Indrustial.png'),
          name: 'Industrial',
        },
      ],
      Road_Data: [
        {
          index: '0',
          imageurl: require('../../assets/Icons/Tarmac.png'),
          name: 'Tarmac',
        },
        {
          index: '1',
          imageurl: require('../../assets/Icons/Murram.png'),
          name: 'Murram',
        },
        {
          index: '2',
          imageurl: require('../../assets/Icons/AllWather.png'),
          name: 'All Wather',
        },
        {
          index: '3',
          imageurl: require('../../assets/Icons/NoRoad.png'),
          name: 'No Road',
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
      <View style={{flex: 1}}>
        <ScrollView style={{bottom: 10}}>
          {/* ////////////////////////////// Header start here  ////////////////////////////////  */}
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
          {/* ////////////////////////////// End Header Here /////////////////////////////////////////// */}
          <View style={{width: '100%'}}>
            {/* /////////////////// Main ProcessSteps  Start Here ////////////////////////////////// */}
            <ProgressSteps
              {...progressStepsStyle}
              activeStep={this.state.index}>
              {/* /////////////////////// First Step star Here //////////////////// */}
              <ProgressStep
                activeLabelColor="#000"
                label="Step 1"
                onNext={this.onPaymentStepComplete}
                onPrevious={this.onPrevStep}
                scrollViewProps={this.defaultScrollViewProps}
                removeBtnRow={true}>
                <Collapse>
                  <CollapseHeader disabled style={{height: 50}}>
                    <View style={styles.CallHeaderMainView}>
                      <Text style={{left: 10, fontFamily: 'Lato-Regular'}}>
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

                {/* /////////////////////////////////////////////  Enter a location suburb or town ///////////////////////////////  */}
                <Collapse>
                  <CollapseHeader style={{height: 60}}>
                    <View style={{paddingHorizontal: 20}}>
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
                          style={{width: 20, height: 20, left: 20}}
                          source={require('../../assets/Icons/SearchIcon.png')}
                        />
                        <TextInput
                          placeholderTextColor="#000"
                          placeholder="Enter a location suburb or town"
                          style={{left: 20, fontFamily: 'Lato-Regular'}}
                        />
                      </View>
                    </View>
                  </CollapseHeader>

                  {/* 
                                        <CollapseBody >
                                            <View style={{ height: 80, padding: 20 }}>
                                                <Text style={{ alignSelf: 'flex-end', right: 20 }}>${this.state.Cost}</Text>
                                                <Slider
                                                    style={{ width: '100%', height: 40, }}
                                                    minimumValue={50}
                                                    maximumValue={500}
                                                    minimumTrackTintColor="#FFA500"
                                                    maximumTrackTintColor="##FFA500"
                                                    value={this.state.Cost}
                                                    step={1}
                                                    onValueChange={(Cost) => this.setState({ Cost })}
                                                />
                                            </View>
                                        </CollapseBody> */}
                </Collapse>

                {/* /////////////////////////////////  Cost  ////////////////////////////////////// */}
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
                        <Text>${this.state.rangeLow}</Text>
                        <Text>-{this.state.rangeHigh}</Text>
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
                        onValueChanged={(low, high) => {
                          this.setState({rangeLow: low, rangeHigh: high});
                        }}
                      />
                    </View>
                  </CollapseBody>
                </Collapse>

                {/* /////////////////////////////////  Size in area's //////////////////////////////// */}
                <Collapse>
                  <CollapseHeader style={{height: 50}}>
                    <View style={styles.CallHeaderMainView}>
                      <Text style={{left: 10, fontFamily: 'Lato-Regular'}}>
                        Size in areas
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
                        <Text>{this.state.lowSize}</Text>
                        <Text>-{this.state.highSize}areas</Text>
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
                        onValueChanged={(lowSize, highSize) => {
                          this.setState({lowSize: lowSize, highSize: highSize});
                        }}
                      />
                    </View>
                    <View style={styles.CallBodyMainView}>
                      <View style={{alignItems: 'center'}}>
                        <TouchableOpacity style={styles.CategoryCircleView}>
                          <Image
                            style={styles.CategoryIcons}
                            source={require('../../assets/Icons/Freeholdland.png')}
                          />
                          <Text
                            style={{
                              top: 5,
                              fontSize: 10,
                              fontFamily: 'Lato-Regular',
                            }}>
                            Freehold land
                          </Text>
                        </TouchableOpacity>
                      </View>
                      <View style={{alignItems: 'center'}}>
                        <TouchableOpacity style={styles.CategoryCircleView}>
                          <Image
                            style={styles.CategoryIcons}
                            source={require('../../assets/Icons/XMLTD.png')}
                          />
                          <Text
                            style={{
                              top: 5,
                              fontSize: 10,
                              fontFamily: 'Lato-Regular',
                            }}>
                            Own compound
                          </Text>
                        </TouchableOpacity>
                      </View>
                      <View></View>
                      <View style={{alignItems: 'center'}}>
                        {/* <TouchableOpacity style={styles.CategoryCircleView}>
                                                        <Image style={styles.CategoryIcons} source={require('../../assets/Icons/Own.png')} />
                                                        <Text style={{ top: 5, fontSize: 10 }}>Apartment</Text>
                                                    </TouchableOpacity> */}
                      </View>
                    </View>
                  </CollapseBody>
                </Collapse>
                {/* Apply btn */}
                <View style={styles.ApplyView}>
                  <TouchableOpacity style={styles.ApplyBtn}>
                    <Text style={{fontFamily: 'Lato-Regular'}}>Search</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    // onPress={() => this.props.navigation.navigate('SearchHouseStep2')}
                    onPress={this.GoNextStep}
                    style={styles.ApplyBtn}>
                    <Text style={{fontFamily: 'Lato-Regular'}}>Next </Text>
                  </TouchableOpacity>
                </View>
                {/* </View> */}
              </ProgressStep>

              {/* ////////////////////////////////////////////// Second PprocessStep Start Here ////////////////////// */}
              <ProgressStep
                label="Step 2"
                removeBtnRow={true}
                onNext={this.onNextStep}
                onPrevious={this.onPrevStep}
                scrollViewProps={this.defaultScrollViewProps}>
                <View style={{top: 20}}>
                  {/* /////////////////////////// Select Services /////////////////////////  */}
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
                  {/*/////////////////////////////////  Soil type ///////////////////////////////////////////// */}
                  <Collapse>
                    <CollapseHeader style={{height: 50}}>
                      <View style={styles.CallHeaderMainView}>
                        <Text style={{left: 10, fontFamily: 'Lato-Regular'}}>
                          Soil type
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
                        data={this.state.Soil_Type_Data}
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
                  {/* /////////////////////////////////////////////   Nature  /////////////////////*/}
                  <Collapse>
                    <CollapseHeader style={{height: 50}}>
                      <View style={styles.CallHeaderMainView}>
                        <Text style={{left: 10}}>Nature</Text>
                        <Image
                          style={styles.Downarrow}
                          source={require('../../assets/Icons/Downarrow.png')}
                        />
                      </View>
                      <View style={styles.BottomBorder}></View>
                    </CollapseHeader>

                    <CollapseBody>
                      <AccordionList
                        data={this.state.Nature_Data}
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
                  {/* ///////////////////////////////////////////// Road  /////////////////////////////////////////*/}
                  <Collapse>
                    <CollapseHeader style={{height: 50}}>
                      <View style={styles.CallHeaderMainView}>
                        <Text style={{left: 10}}>Road</Text>
                        <Image
                          style={styles.Downarrow}
                          source={require('../../assets/Icons/Downarrow.png')}
                        />
                      </View>
                      <View style={styles.BottomBorder}></View>
                    </CollapseHeader>

                    <CollapseBody>
                      <AccordionList
                        data={this.state.Road_Data}
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
                  {/* ////////////////////////////////////// Apply Btn's ////////////////////////////////////*/}
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
              {/* //////////////////////////////////////// Third ProcessStep Start Here //////////////////////// */}
              <ProgressStep
                label="Step 3"
                removeBtnRow={true}
                onNext={this.onNextStep}
                onPrevious={this.onPrevStep}
                scrollViewProps={this.defaultScrollViewProps}>
                <View style={{top: 20}}>
                  {/* ////////////////////////////////////////// KM to shoping center ///////////////////////////// */}
                  <Collapse>
                    <CollapseHeader style={{height: 50}}>
                      <View style={styles.CallHeaderMainView}>
                        <Text style={{left: 10, fontFamily: 'Lato-Regular'}}>
                          KM to shoping center
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
                          <Text>{this.state.lowKM}</Text>
                          <Text>-{this.state.highKM}/KM</Text>
                        </View>
                        <RangeSlider
                          // elevation={2}
                          style={{width: '100%', height: 70}}
                          gravity={'center'}
                          min={10}
                          max={50}
                          step={10}
                          handleBorderWidth={0.5}
                          handleBorderColor="#F6D700"
                          selectionColor="#F6D700"
                          blankColor="#808080"
                          onValueChanged={(lowKM, highKM) => {
                            this.setState({lowKM: lowKM, highKM: highKM});
                          }}
                        />
                      </View>
                    </CollapseBody>
                  </Collapse>
                  {/* ////////////////////////////////////////  KM to  neighbour ///////////////////////////////////////// */}
                  <Collapse>
                    <CollapseHeader style={{height: 50}}>
                      <View style={styles.CallHeaderMainView}>
                        <Text style={{left: 10, fontFamily: 'Lato-Regular'}}>
                          KM to neighbour
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
                          <Text>{this.state.Min_Neb_KM}</Text>
                          <Text>-{this.state.Max_Neb_KM}/KM</Text>
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
                          onValueChanged={(Min_Neb_KM, Max_Neb_KM) => {
                            this.setState({
                              Min_Neb_KM: Min_Neb_KM,
                              Max_Neb_KM: Max_Neb_KM,
                            });
                          }}
                        />
                      </View>
                    </CollapseBody>
                  </Collapse>
                  {/* ////////////////////////////////////////// KM to tarmac //////////////////////////////////////// */}
                  <Collapse>
                    <CollapseHeader style={{height: 50}}>
                      <View style={styles.CallHeaderMainView}>
                        <Text style={{left: 10, fontFamily: 'Lato-Regular'}}>
                          {' '}
                          KM to tarmac
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
                          <Text>{this.state.Min_Tarmac_Dis}</Text>
                          <Text>-{this.state.Max_Tarmac_Dis}/KM</Text>
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
                          onValueChanged={(Min_Tarmac_Dis, Max_Tarmac_Dis) => {
                            this.setState({
                              Min_Tarmac_Dis: Min_Tarmac_Dis,
                              Max_Tarmac_Dis: Max_Tarmac_Dis,
                            });
                          }}
                        />
                      </View>
                    </CollapseBody>
                  </Collapse>
                  {/* ////////////////////////////////////////// KM to water /////////////////////////////////////// */}
                  <Collapse>
                    <CollapseHeader style={{height: 50}}>
                      <View style={styles.CallHeaderMainView}>
                        <Text style={{left: 10, fontFamily: 'Lato-Regular'}}>
                          {' '}
                          KM to water
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
                          <Text>{this.state.Min_Water_Dis}</Text>
                          <Text>-{this.state.Max_Water_Dis}/KM</Text>
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
                          onValueChanged={(Min_Water_Dis, Max_Water_Dis) => {
                            this.setState({
                              Min_Water_Dis: Min_Water_Dis,
                              Max_Water_Dis: Max_Water_Dis,
                            });
                          }}
                        />
                      </View>
                    </CollapseBody>
                  </Collapse>
                  {/* ///////////////////////////////////////////////// KM to electricity //////////////////////////////////// */}
                  <Collapse>
                    <CollapseHeader style={{height: 50}}>
                      <View style={styles.CallHeaderMainView}>
                        <Text style={{left: 10, fontFamily: 'Lato-Regular'}}>
                          {' '}
                          KM to electricity{' '}
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
                          <Text>{this.state.Min_Elect_Dis}</Text>
                          <Text>-{this.state.Max_Elect_Dis}/KM</Text>
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
                          onValueChanged={(Min_Elect_Dis, Max_Elect_Dis) => {
                            this.setState({
                              Min_Elect_Dis: Min_Elect_Dis,
                              Max_Elect_Dis: Max_Elect_Dis,
                            });
                          }}
                        />
                      </View>
                    </CollapseBody>
                  </Collapse>

                  {/* Apply Btn's */}
                  <View style={styles.ApplyView}>
                    {/* <TouchableOpacity style={styles.ApplyBtn}>
                                            <Text style={{fontFamily: 'Lato-Regular'}}>Apply</Text>
                                        </TouchableOpacity> */}
                    <View></View>
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate('SearchFlipbook')
                      }
                      // onPress={this.GoNextStep}
                      style={styles.ApplyBtn}>
                      <Text style={{fontFamily: 'Lato-Regular'}}>Search</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </ProgressStep>
            </ProgressSteps>
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
    // marginTop: 20,
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
export default LookingLandSteps;
