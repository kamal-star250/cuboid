import React, {Component} from 'react';
import {Button, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
// import { } from 'react-native-gesture-handler';

class Modal1 extends Component {
  state = {
    isModalVisible: false,
  };

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };

  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity onPress={() => this.toggleModal()}>
          <Text>Open Modal</Text>
        </TouchableOpacity>

        {/* <Button title="Show modal" onPress={this.toggleModal} /> */}
        <Modal
          animationIn="slideInUp"
          animationOut="slideOutDown"
          animationInTiming={500}
          isVisible={this.state.isModalVisible}>
          <View
            style={{
              flex: 0.5,
              backgroundColor: '#fff',
              borderRadius: 10,
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
              <Text>Similar Properties</Text>
              <TouchableOpacity onPress={() => this.toggleModal()}>
                <Text>Close</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: '100%',
                height: 1,
                backgroundColor: '#cccccc',
              }}></View>
          </View>
        </Modal>
        {/* <Button title="Hide modal" onPress={this.toggleModal} /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  TotalCountView: {
    height: 100,
    width: 100,
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

export default Modal1;
