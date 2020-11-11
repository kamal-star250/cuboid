import React,{Component} from 'react';

import {View,Text,Image, StyleSheet} from 'react-native';
import { ScrollView,TouchableOpacity } from 'react-native-gesture-handler';

import FooterPage from '../Comman/FooterPage'

class NeedHelp extends Component{

    render(){
        return(
            <View style={{flex:1}}>



             <ScrollView>
                
                <View style={{height:670,padding:10,alignItems:"center",}}>
                <Text style={{fontFamily:'Lato-Bold',fontSize:20,marginTop:50}}>Need Help</Text>
                <Image style={{width:350,height:350,resizeMode:"contain",marginTop:40}} source={require('../../assets/Icons/Need_Help.png')} />

                <View style={{ padding: 10,marginTop:50,width:'100%'}}>
                            <TouchableOpacity style={styles.UpdateBtn}>
                                <Text style={{fontFamily: 'Lato-Bold'}}>Contact us now</Text>
                            </TouchableOpacity>
                        </View>
                </View>
                    

             </ScrollView>
             <FooterPage
                    welcomePress={() => this.props.navigation.navigate('WelcomeScreen')}
                    subPress={() => this.props.navigation.navigate('SubscriptionPage')}
                    postPress={() => this.props.navigation.navigate('PostProperties')}
                    contPress={() => this.props.navigation.navigate('ContactUS')}
                    profilePress={() => this.props.navigation.navigate('ProfilePage')}
                />
            </View>
        )
    }
}
const styles=StyleSheet.create({
    UpdateBtn:{
        height: 40, 
        width: '100%',
        backgroundColor: '#F6D700', 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 20,
        // alignSelf:'flex-end'
        // marginLeft:'70%'
    }
})
export default NeedHelp;