import React, {Component} from 'react';

import {AccordionList} from 'accordion-collapse-react-native';
import {Separator} from 'native-base';

import {View, Text, Dimensions, ImageBackground, Image} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
class App extends Component {
  state = {
    list: [
      {
        id: 0,
        title: 'Choose one main catrgory',
        body: 'AccordionList,Collapse,CollapseHeader & CollapseBody',
        iconid: 0,
        iconName: 'World Class',
        iconimage: require('../../assets/Icons/worldClass.png'),
        // body: [
        //   {
        //     id: 0,
        //     Icon_Name: 'World Class',
        //     icon_Image: require('../../assets/Icons/worldClass.png'),
        //   },
        //   {
        //     id: 0,
        //     Icon_Name: 'Rent',
        //     icon_Image: require('../../assets/Icons/Rent.png'),
        //   },
        //   {
        //     id: 0,
        //     Icon_Name: 'Buy',
        //     icon_Image: require('../../assets/Icons/Buy.png'),
        //   },
        // ],
      },
      {
        id: 1,
        title: 'Badrooms',
        body: 'AccordionList,Collapse,CollapseHeader & CollapseBody',
      },
      {
        id: 2,
        title: 'Select sub category',
        body: 'AccordionList,Collapse,CollapseHeader & CollapseBody',
      },
      {
        id: 3,
        title: 'Select property status',
        body: 'AccordionList,Collapse,CollapseHeader & CollapseBody',
      },
      {
        id: 4,
        title: 'Enter a location suburb  or town',
        body: 'AccordionList,Collapse,CollapseHeader & CollapseBody',
      },
      {
        id: 5,
        title: 'cost',
        body: 'AccordionList,Collapse,CollapseHeader & CollapseBody',
      },
    ],
  };

  _head(item) {
    return (
      <Separator bordered>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            // height: 60,
            paddingHorizontal: 10,
          }}>
          <Text>{item.title}</Text>
          <Image
            source={require('../../assets/Icons/Downarrow.png')}
            style={{width: 15, height: 15, resizeMode: 'contain'}}
          />
        </View>
      </Separator>
    );
  }

  _body(item) {
    console.log(item);
    return (
      <View style={{padding: 10}}>
        <Text style={{textAlign: 'center'}}>{item.body}</Text>
      </View>
    );
  }

  render() {
    return (
      <AccordionList
        list={this.state.list}
        header={this._head}
        body={this._body}
        keyExtractor={(item) => `${item.id}`}
      />

      // <View styl={{flex:1}}>
      //  <ScrollView>
      //  <ImageBackground
      //                 borderTopLeftRadius={10}
      //                 borderTopRightRadius={10}
      //                 source={require('../../assets/images/LookFurnished.jpg')}
      //                 style={{
      //                     // width: '100%',
      //                        height: windowHeight,
      //                     //    width:windowWidth ,
      //                     // windowHeight: Dimensions.get('window') / 3.0,
      //                     alignItems: 'center',
      //                     resizeMode: 'contain'
      //                 }}>

      //                 </ImageBackground>
      //  </ScrollView>

      // </View>
    );
  }
}

export default App;
