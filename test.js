import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Modal from "react-native-modal";
import TimePicker from "react-native-24h-timepicker";
import Date_find from '../Common/Date_find'
import { Collapse, CollapseHeader, CollapseBody, AccordionList } from 'accordion-collapse-react-native';




// Import Files
import VerticalStepIndicator from '../Common/Stappre';
import Form from '../Common/Dropdown_Form'




class Delivery_detail_form extends Component {
    constructor() {
        super();
        this.state = {
            time: ""
        },
            this.state = { date: "2016-05-15" };
    }
    onCancel() {
        this.TimePicker.close();
    }

    onConfirm(hour, minute) {
        this.setState({ time: `${hour}:${minute}` });
        this.TimePicker.close();
    }

    state = {
        isModalVisible: false
    };

    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };

    confirmOrder = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
        this.props.navigation.navigate('Myaddresspage')
    }

    render() {
        return (

            <View style={{ flex: 1 }}>

                {/* HEADER  */}
                <View style={{ height: '8%', backgroundColor: '#32b725', paddingLeft: 15, paddingRight: 15, paddingTop: 14 }}>
                    <View style={Styles.headerview}>

                        <View>
                            <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>

                                <Image style={{ height: 20, width: 20 }} source={require('../Images/drawer.png')} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={Styles.headertext}>Document</Text>
                        </View>
                        <View>
                            <TouchableOpacity>
                                <Image style={Styles.headericons} source={require('../Images/search.png')} />
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
                <ScrollView>
                    <View style={{ height: 100, }}>
                        <Image style={{ height: '100%', width: '100%' }} source={require('../Images/image.jpg')} />
                    </View>

                    <View style={{ height: '75%', padding: 10 }}>

                        <View style={{ width: '100%', padding: 10, }}>
                            <Text style={{ color: '#32b725' }}>Pick up addess*</Text>
                            <View style={{ flexDirection: 'row', borderBottomWidth: 1, justifyContent: 'space-between' }}>
                                <View>
                                    <TextInput style={{ width: '100%', top: 7 }}
                                        placeholder='Search pick up address' />
                                </View>
                                <View>
                                    <Image style={{ height: 15, width: 15, resizeMode: 'contain', margin: 10, top: 7 }} source={require('../Images/search1.png')} />
                                </View>
                            </View>
                        </View>
                        <View style={{ width: '100%', padding: 10, }}>
                            <Text style={{ color: '#32b725' }}>Drop address*</Text>
                            <View style={{ flexDirection: 'row', borderBottomWidth: 1, justifyContent: 'space-between' }}>
                                <View>
                                    <TextInput style={{ width: '100%', top: 7 }}
                                        placeholder='Search drop address' />
                                </View>
                                <View>
                                    <Image style={{ height: 15, width: 15, resizeMode: 'contain', margin: 10, top: 7 }} source={require('../Images/search1.png')} />
                                </View>
                            </View>
                        </View>
                        <View style={{ width: '100%', padding: 10, }}>
                            <Text style={{ color: '#32b725' }}>PickUp date*</Text>
                            <View style={{ flexDirection: 'row', borderBottomWidth: 1, justifyContent: 'space-between' }}>
                                <View>
                                   <Date_find />
                                </View>
                                <View>
                                    <Image style={{ height: 15, width: 15, resizeMode: 'contain', margin: 10, top: 7 }} source={require('../Images/rightarrow.png')} />
                                </View>
                            </View>
                        </View>
                        <View style={{ width: '100%', padding: 10, }}>
                            <TouchableOpacity onPress={() => this.TimePicker.open()}>
                                <Text style={{ color: '#32b725' }}>Pick up time*</Text>
                            </TouchableOpacity>
                            <View style={{ flexDirection: 'row', borderBottomWidth: 1, justifyContent: 'space-between' }}>
                                <View>

                                    <Text>{this.state.time}</Text>
                                    <TimePicker
                                        ref={ref => {
                                            this.TimePicker = ref;
                                        }}
                                        onCancel={() => this.onCancel()}
                                        onConfirm={(hour, minute) => this.onConfirm(hour, minute)}
                                    />
                                </View>
                                <View>
                                    {/* <Image style={{ height: 15, width: 15, resizeMode: 'contain', margin: 10, top: 7 }} source={require('../Images/search1.png')} /> */}
                                </View>
                            </View>
                        </View>
                        <View style={{ width: '100%', padding: 10, }}>
                            <Collapse>
                                <CollapseHeader>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1 }}>
                                        <Text style={{ color: '#32b725' }}>Select your car detail</Text>
                                        <Image style={{ width: 10, height: 10, margin: 10 }} source={require('../Images/arrowdown.png')} />

                                    </View>
                                </CollapseHeader>

                                <CollapseBody style={{ marginTop: 10 }}>
                                    {/* <Text>Hello kamal</Text> */}
                                    <Form />
                                </CollapseBody>
                            </Collapse>
                        </View>
                        <View style={{ width: '100%', padding: 10, }}>
                            <Text style={{ color: '#32b725' }}>Estimated weiht*</Text>
                            <View style={{ flexDirection: 'row', borderBottomWidth: 1, justifyContent: 'space-between' }}>
                                <View>
                                    <TextInput style={{ width: '100%', top: 7 }}
                                        placeholder='Add weiht in KG' />
                                </View>
                                <View>
                                    {/* <Image style={{ height: 15, width: 15, resizeMode: 'contain', margin: 10, top: 7 }} source={require('../Images/search1.png')} /> */}
                                </View>
                            </View>
                        </View>
                        <View style={{ width: '100%', padding: 10, }}>
                            <Text style={{ color: '#32b725' }}>Quality*</Text>
                            <View style={{ flexDirection: 'row', borderBottomWidth: 1, justifyContent: 'space-between' }}>
                                <View>
                                    <TextInput style={{ width: '100%', top: 7 }}
                                        placeholder='Add quality of package' />
                                </View>
                                <View>
                                    {/* <Image style={{ height: 15, width: 15, resizeMode: 'contain', margin: 10, top: 7 }} source={require('../Images/search1.png')} /> */}
                                </View>
                            </View>
                        </View>
                        <View style={{ width: '100%', padding: 10, }}>
                            <Text style={{ color: '#32b725' }}>Upload Photo*</Text>
                            <View style={{ flexDirection: 'row', borderBottomWidth: 1, justifyContent: 'space-between' }}>
                                <View>
                                    <TextInput style={{ width: '100%', top: 7 }}
                                        placeholder='Upload your image' />
                                </View>
                                <View>
                                    <Image style={{ height: 15, width: 15, resizeMode: 'contain', margin: 10, top: 7 }} source={require('../Images/camera.png')} />
                                </View>
                            </View>
                        </View>

                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity
                                onPress={this.toggleModal}
                                style={{ width: '90%', padding: 10, borderRadius: 5, alignItems: 'center', backgroundColor: '#32b725' }} >
                                <Text style={{ fontWeight: 'bold', color: '#fff' }}>Calculate Cost</Text>
                            </TouchableOpacity>

                        </View>
                    </View>

                </ScrollView>

                {/* <VerticalStepIndicator /> */}


                <Modal style={{ padding: 20, }} isVisible={this.state.isModalVisible}>

                    <View style={{ height: 300, backgroundColor: "#fff", borderRadius: 15, }}>
                        <View style={{ alignItems: 'center', height: 250, }}>

                            <View style={{ height: 100, width: 100, marginTop: 20, borderRadius: 100 / 2, borderWidth: 1, borderColor: '#000', justifyContent: "center", alignItems: "center" }} >
                                <Image style={{ height: 70, width: 70, }} source={require('../Images/companylogo1.png')} />
                            </View>

                            <TouchableOpacity
                                style={{ marginTop: 20, backgroundColor: '#32b725', width: '50%', alignItems: 'center', borderRadius: 5, padding: 10 }}
                                onPress={() => this.props.navigation.navigate('Homepage')}
                            >

                                <Text style={{ fontWeight: 'bold', color: '#fff' }}>Ammount: $ 150</Text>
                            </TouchableOpacity>

                            <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                <Text style={{ fontSize: 16 }}>Coupon code</Text>
                                <Text style={{ fontSize: 16, color: '#32b725' }}>  ALNEW</Text>
                            </View>

                            <View style={{ flexDirection: 'row', marginTop: 5, }}>
                                <Text style={{ color: '#96989a' }} >Expected delivery date</Text>
                                <Text style={{ fontWeight: 'bold' }} >  21 jan 2020</Text>

                            </View>




                        </View>


                        <View style={{ borderBottomWidth: 1, borderColor: '#96989a', marginBottom: 10 }}></View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <View>
                                <TouchableOpacity onPress={this.confirmOrder}>
                                    <Text style={{ fontWeight: 'bold', color: '#32b725' }}>Confirm Order</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ height: 25, borderWidth: 1, borderColor: '#96989a' }}>

                            </View>
                            <View>
                                <TouchableOpacity onPress={this.toggleModal} >
                                    <Text style={{ paddingRight: 10, fontWeight: 'bold', color: '#32b725' }}>Cancel</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                        {/* <Button title="Hide modal" onPress={this.toggleModal} /> */}
                    </View>
                </Modal>








            </View>
        );
    }
}

const Styles = StyleSheet.create({
    headerview: {
        width: '100%',
        height: 30,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    headericons: {
        height: 20, width: 20
    },
    headertext: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },

    chatarea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    profilecircle: {
        width: 60,
        height: 60,
        borderWidth: 1,
        alignItems: 'center',
        borderRadius: 120 / 2,
        justifyContent: 'center'
    },
    profileimage: {
        width: 50,
        height: 50,
    }
});

export default Delivery_detail_form;