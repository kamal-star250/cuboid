import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';


class OtherPropertyTabs extends Component {
    render() {
        return (

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                <View style={{ padding: 20, }}>
                    <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </Text>


                </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({

    bottomBtnView: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginTop: 40,
        // alignItems:'center'
    },
    BottomBtns: {
        width: 60,
        height: 60,
        alignItems: 'center',
        borderRadius: 10,
        justifyContent: "center",
        backgroundColor: '#F6D600'
    },
    Icons: {
        width: 20, height: 20, resizeMode: 'contain'
    }

});
export default withNavigation(OtherPropertyTabs);