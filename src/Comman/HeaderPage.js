import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';



class HeaderPage extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Header Page</Text>

            </View>

        )
    }
}


const styles=StyleSheet.create({
container:{
    flex:1
}
})


export default HeaderPage;