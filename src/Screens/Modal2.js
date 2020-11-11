// import React, { Component } from 'react';
// import { Button, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
// import Modal from 'react-native-modal';
// // import { } from 'react-native-gesture-handler';

// // import Slider from '@react-native-community/slider';
// import RangeSlider from 'rn-range-slider';

// class Modal2 extends Component {
//     state = {
//         isModalVisible: true,
//     };

//     toggleModal = () => {
//         this.setState({ isModalVisible: !this.state.isModalVisible });
//     };

//     render() {
//         return (
//             <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>

//                 {/* <Button title="Show modal" onPress={this.toggleModal} /> */}
//                 <Modal isVisible={this.state.isModalVisible}>

//                     <View style={{ height: 300, width: '100%', backgroundColor: '#fff', borderRadius: 30 }}>
//                         <View >
//                             <Text style={{ marginLeft: 20, marginTop: 20, fontWeight: 'bold' }}>Living area size</Text>
//                             <View style={{ borderWidth: 0.5, marginTop: 10, borderColor: '#00000029' }}></View>

//                         </View>
//                         <View style={{ padding: 20, top: 40 }}>
//                             <View style={{ justifyContent: 'space-around', alignItems: 'center' }}>

//                                 <View style={styles.TotalCountView}>
//                                     <Text style={{ fontSize: 20, fontFamily: 'Lato-Bold' }}>{this.state.rangeLow}</Text>
//                                     <Text style={{ fontSize: 20, fontFamily: 'Lato-Bold' }}>-{this.state.rangeHigh}sq/ft</Text>
//                                 </View>

//                                 {/*
//                                 <Slider

//                                     style={{ width: '100%', height: 40, marginTop: 30 }}
//                                     minimumValue={500}
//                                     maximumValue={2000}
//                                     minimumTrackTintColor="#FFA500"
//                                     maximumTrackTintColor="##FFA500"
//                                     value={this.state.value}
//                                     onValueChange={(value) => this.setState({ value })} /> */}

//                                 <RangeSlider
//                                     // elevation={2}
//                                     style={{ width: '100%', height: 70 }}
//                                     gravity={'center'}
//                                     // thumbRadius={10}
//                                     gravity="top"
//                                     min={50}
//                                     max={500}
//                                     step={50}
//                                     handleBorderWidth={1}
//                                     handleBorderColor="#F6D700"
//                                     selectionColor="#F6D700"
//                                     blankColor="#808080"
//                                     onValueChanged={(low, high) => {
//                                         this.setState({ rangeLow: low, rangeHigh: high });
//                                     }}
//                                 />

//                             </View>
//                         </View>

//                     </View>
//                 </Modal>
//                 {/* <Button title="Hide modal" onPress={this.toggleModal} /> */}
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({

//     LeftClickView: {
//         height: 50,
//         width: 50,
//         borderRadius: 10,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//         shadowColor: "#000",
//         shadowOffset: {
//             width: 0,
//             height: 2,
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 3.84,

//         elevation: 5,
//     },
//     TotalCountView: {
//         height: 70,
//         width: 250,
//         borderRadius: 10,
//         flexDirection: 'row',
//         backgroundColor: '#fff',
//         alignItems: "center",
//         justifyContent: 'center',
//         shadowColor: "#000",
//         shadowOffset: {
//             width: 0,
//             height: 2,
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 3.84,

//         elevation: 5,
//     }

// });

// export default Modal2;
import React, {Component} from 'react';
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  Alert,
  TouchableOpacity,
} from 'react-native';

class ModalExample extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={{backgroundColor: 'pink', flex: 1}}>
        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>
        <Modal
          animationIn="slideInUp"
          animationOut="slideOutDown"
          animationInTiming={400}
          isVisible={this.state.isModalVisible}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              padding: 10,
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

                //   shadowColor: 'red',
                //   shadowOffset: {width: 2, height: 2},
                //   shadowOpacity: 0.3,
                //   elevation: 0.5,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  padding: 10,
                }}>
                <Text>{this.state.name}</Text>
                <TouchableOpacity onPress={() => this.toggleModal()}>
                  <Text>Close</Text>
                </TouchableOpacity>
                {/* <Button title="close" onPress={() => this.toggleModal()} /> */}
              </View>
              <View
                style={{
                  width: '100%',
                  height: 1,
                  backgroundColor: '#cccccc',
                }}></View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

export default ModalExample;
