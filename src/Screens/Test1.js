
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, FlatList, TouchableOpacity } from 'react-native';
// import { Item } from 'react-native-paper/lib/typescript/src/components/List/List';

class LookingWarehouseSteps extends Component {
    constructor() {
        super();
        this.state = {
            data: [
                {
                    "ItemName": "Home",
                    "ImageURL": "https://freepngimg.com/thumb/home/1-2-home-png-image.png"
                },
                {
                    "ItemName": "Home1",
                    "ImageURL": "https://freepngimg.com/thumb/home/1-2-home-png-image.png"
                },
                {
                    "ItemName": "HOME3",
                    "ImageURL": "https://freepngimg.com/thumb/home/1-2-home-png-image.png"
                },
                {
                    "ItemName": "Home4",
                    "ImageURL": "https://freepngimg.com/thumb/home/1-2-home-png-image.png"
                },
                {
                    "ItemName": "Home5",
                    "ImageURL": "https://freepngimg.com/thumb/home/1-2-home-png-image.png"
                },
                // {
                //     "ItemName": "HOME2",
                //     "ImageURL": "https://freepngimg.com/thumb/home/1-2-home-png-image.png"
                // },
            ]
        }
        // console.log(this.state.data)
    }

    // Print_Data = ({ item, index }) => {
    //     // console.log(item,index)
    //     console.log(index)
    //     return (
    //         <View>
    //             <TouchableOpacity
    //                 onPress={() => this.setState({ clicked: !this.state.clicked, index: index })}
    //                 style={{
    //                     backgroundColor: this.state.clicked && this.state.index ? '#F6D700' : '#f2f2f2',
    //                     width: 100,
    //                     height: 100,
    //                     borderRadius: 100 / 2,
    //                     alignItems: 'center',
    //                     justifyContent: 'center',
    //                     shadowColor: "#000",
    //                     shadowOffset: {
    //                         width: 0,
    //                         height: 2,
    //                     },
    //                     shadowOpacity: 0.25,
    //                     shadowRadius: 3.84,

    //                     elevation: 2,

    //                 }}>
    //                 <Image style={{ width: 20, height: 20 }} source={{ uri: item.ImageURL }} />
    //                 <Text style={{ top: 5, fontSize: 10, fontFamily: 'Lato-Regular' }}>{item.ItemName}</Text>
    //             </TouchableOpacity>
    //         </View>

    //     )

    // }

    homefunc = (index) => {
        this.setState({ index: index })
    }

    render() {
        console.log(this.state.data, 'rohit')
        // console.log(this.state.SampleNameArray.ItemName)
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    data={this.state.data}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={3}
                    columnWrapperStyle={styles.row}
                    renderItem={({ item }) => {
                        return (
                            <View>
                                <TouchableOpacity
                                    onPress={() => this.homefunc(item.ItemName)}
                                    style={{
                                        backgroundColor: this.state.index == item.ItemName ? 'red' : 'green',
                                        width: 100,
                                        height: 100,
                                        borderRadius: 100 / 2,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        shadowColor: "#000",
                                        shadowOffset: {
                                            width: 0,
                                            height: 2,
                                        },
                                        shadowOpacity: 0.25,
                                        shadowRadius: 3.84,

                                        elevation: 2,

                                    }}>


                                    <Image style={{ width: 20, height: 20 }} source={{ uri: item.ImageURL }} />
                                </TouchableOpacity>

                            </View>
                        )
                    }}
                // key={this.index}
                />

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    row: {
        padding: 10,
        width: '100%',
        justifyContent: "space-between",
        // justifyContent:'flex-end',
        // justifyContent:"flex-start",
        // justifyContent:'space-evenly',
        // justifyContent:"space-around",
        marginTop: 10

    }
}
);
export default LookingWarehouseSteps;
// import React, { Component } from 'react';
// import { View, Text, StyleSheet, Image, TextInput, FlatList, TouchableOpacity } from 'react-native';
// // import { Item } from 'react-native-paper/lib/typescript/src/components/List/List';

// // import RangeSlider from 'react-native-range-slider'
// import RangeSlider from 'rn-range-slider';

// class LookingWarehouseSteps extends Component {
//     constructor() {
//         super();
//         this.state = {
//             // low: '',
//             // high: '',
//             data: [
//                 {
//                     "ID": "0",
//                     "ItemName": "Home",
//                     "ImageURL": "https://freepngimg.com/thumb/home/1-2-home-png-image.png"
//                 },
//                 //
//                 {
//                     ID: 1,
//                     ItemName: 'Getting Started',
//                     // body: 'React native Accordion/Collapse component, very good to use in toggles & show/hide content',
//                     ImageURL: require('../../assets/Icons/Rent.png')
//                     // ImageURL: require('../../assets/images/Group1.png')
//                 },
//                 {
//                     "ID": "2",
//                     "ItemName": "Home2",
//                     "ImageURL": "https://freepngimg.com/thumb/home/1-2-home-png-image.png"
//                 },
//                 {
//                     "ID": "3",
//                     "ItemName": "Home3",
//                     // "ImageURL": url: require('../../assets/Icons/Drawer1.png')
//                 },
//                 {
//                     "ID": "4",
//                     "ItemName": "Home4",
//                     "ImageURL": "https://freepngimg.com/thumb/home/1-2-home-png-image.png"
//                 },
//                 // {
//                 //     "ID": "5",
//                 //     "ItemName": "Home5",
//                 //     "ImageURL": "https://freepngimg.com/thumb/home/1-2-home-png-image.png"
//                 // },
//             ]
//         }
//         // console.log(this.state.data)
//     }

//     homefunc = (index) => {
//         console.log(index)
//         this.setState({ index: index })

//     }

//     Print_Data = ({ item }) => {
//         return (
//             <View>
//                 <TouchableOpacity
//                     onPress={() => this.homefunc(item.ID)}
//                     style={{
//                         backgroundColor: this.state.index == item.ID ? 'red' : 'green',
//                         width: 100,
//                         height: 100,
//                         borderRadius: 100 / 2,
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         shadowColor: "#000",
//                         shadowOffset: { width: 0, height: 2, },
//                         shadowOpacity: 0.25,
//                         shadowRadius: 3.84,
//                         elevation: 2,
//                         marginLeft: 20,

//                     }}>
//                     <Image style={{ width: 20, height: 20 }} source={{ uri: item.ImageURL }} />
//                     <Text>{item.ItemName}</Text>
//                 </TouchableOpacity>
//             </View>
//         )
//     }



//     render() {
//         // console.log(this.state.data)

//         return (
//             <View style={{ flex: 1 }}>
//                 <FlatList
//                     data={this.state.data}
//                     keyExtractor={(item, index) => index.toString()}
//                     numColumns={3}
//                     columnWrapperStyle={styles.row}
//                     renderItem={this.Print_Data}

//                 />


//             </View>
//         );
//     }
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1
//     },
//     row: {

//         width: '100%',


//         marginTop: 10

//     }
// }
// );
// export default LookingWarehouseSteps;



// import React, { Component } from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// import axios from 'axios';
// import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

// class API_CALL extends Component {
// constructor(props){
//     super(props)
//     this.state={
//         data:[]
//     }
// }


//     Api_Hit =() =>{
//         // alert('Clicked.!')
//         fetch('https://jsonplaceholder.typicode.com/comments?_limit=10')
//      .then((resp) =>resp.json())
//      .then((respJson) =>{
//          this.setState({
//              data:respJson
//          })
//      })
//        console.log(this.state.data)
//     } 

//     render() {
//         const {data} =this.state
//         return (
//             <View style={styles.Container}>


//                 {
//                     data.map((item,index) =>{
//                         return(
//                            <ScrollView>
//                                 <View style={{width:400,height:50,alignItems:'center',justifyContent:'center'}}>
//                                 <Text>{item.id}</Text>
//                             </View>
//                            </ScrollView>
//                         )
//                     })
//                 }
//                 <TouchableOpacity
//                 onPress={() =>this.Api_Hit()}
//                     style={{ width: 200, height: 40, borderRadius: 20, backgroundColor:'red', padding: 10,alignItems:'center' }}
//                 >
//                     <Text style={{ color: '#FFF' }}>Click Here..!</Text>
//                 </TouchableOpacity>

//             </View>
//         )
//     }
// }

// const styles = StyleSheet.create({
//     Container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',

//     }
// })
// export default API_CALL;



// import React, { Component } from 'react';
// import {  View, Text, FlatList, StyleSheet, ActivityIndicator, Image } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';

// export default class Api_Hit extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             isLoading: true,
//             dataSource: []
//         }
//     }
//     componentDidMount() {
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then((response) => response.json())
//             .then((responseJson) => {
//                 this.setState({
//                     isLoading: false,
//                     dataSource: responseJson
//                 })
//             })
//     }
//     _renderItem = ({ item, index }) => {
//         return (
//             <View>
//                 <TouchableOpacity onPress={() => alert(item.email)}>
//                     <View style={styles.item}>
//                         {/* <Text style={{fontWeight:'bold'}}>ID:{item.id + "  " + item.name}</Text> */}
//                         <View style={{ flexDirection: 'row', padding: 10 }}>
//                             <Text style={{ fontWeight: 'bold' }}>{item.id}</Text>
//                             <Text style={{ fontWeight: 'bold', left: 20 }}>{item.name}</Text>

//                         </View>
//                         <View style={{ width: 300, backgroundColor: 'red', flexDirection: 'row' }} >
//                             <Text style={{ fontWeight: 'bold' }}>Email:</Text>
//                             <Text style={{ left: 20 }}>{item.email}</Text>
//                         </View>
//                         <View style={{ width: 300, backgroundColor: 'red', flexDirection: 'row' }} >
//                             <Text style={{ fontWeight: 'bold' }}>Username:</Text>
//                             <Text style={{ left: 20 }}>{item.username}</Text>
//                         </View>
//                         <View style={{ width: 300, backgroundColor: 'red', flexDirection: 'row' }} >
//                             <Text style={{ fontWeight: 'bold' }}>Address:</Text>
//                             <Text style={{ left: 20 }}>{item.address.zipcode}</Text>
//                         </View>
//                         <Image style={{width:200,height:200}} 
//             source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSMziLbiNEA3YvjiFB2lDhec042mBboVE5crw&usqp=CAU"}} />
//                     </View>
//                 </TouchableOpacity>
//                 {/* <Image style={{width:200,height:200}} 
//             source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSMziLbiNEA3YvjiFB2lDhec042mBboVE5crw&usqp=CAU"}} /> */}
//             </View>
//         )
//     }

//     render() {
//         let { isLoading, dataSource } = this.state
//         if (isLoading) {
//             return (
//                 <View style={styles.Container}>
//                     <ActivityIndicator size='large' animating />
//                 </View>
//             )
//         }
//         else {
//             return (
//                 <View style={styles.Container}>
//                     <FlatList
//                         data={dataSource}
//                         renderItem={this._renderItem}
//                         keyExtractor={(item, index) => index.toString()}


//                     />
//                 </View>
//             )
//         }

//     }
// }

// const styles = StyleSheet.create({
//     Container: {
//         flex: 1,
//         // alignItems: 'center',
//         // justifyContent: 'center',
//         padding: 10, paddingTop: 10
//     },
//     item: {
//         width: '100%',
//         padding: 5,
//         borderBottomWidth: 1,
//         borderBottomColor: "#000"
//     }
// })



// import React, { Component } from 'react';
// import { View, StyleSheet,Image } from 'react-native';
// import Carousel, { Pagination } from 'react-native-snap-carousel';


// export default class MyCarousel extends Component {



//     constructor(props) {
//         super(props);
//         this.state = {
//             // activeIndex: 0,
//             carouselItems: [

//                 'https://images.unsplash.com/photo-1541079033018-63489731598f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
//                 'https://images.unsplash.com/photo-1540304651506-82165588b4ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
//                 'https://images.unsplash.com/photo-1541718366506-c16ed9459a7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjQzMzEwfQ&auto=format&fit=crop&w=1050&q=80',
//                 'https://images.unsplash.com/photo-1541616615104-405a4fffe382?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjQzMzEwfQ&auto=format&fit=crop&w=1050&q=80',
//             ],
//         };
//     }
//     _renderItem({ item, index }) {

//         return (
//             <View
//                 style={{
//                      // position:'absolute',


//                     height: 300,
//                     width:'100%',
//                     borderBottomRightRadius:20,
//                     borderBottomLeftRadius:20

//                 }}>
//                 <Image source={{ uri: item }} style={{ width: '100%', height: '100%' }} />
//             </View>
//         );
//     }

//     get pagination() {
//         const { carouselItems, activeIndex } = this.state;
//         return (
//             <Pagination
//                 dotsLength={carouselItems.length}
//                 activeDotIndex={activeIndex}
//                 containerStyle={{ marginTop:-60 }}
//                 dotStyle={{
//                     width: 20,
//                     height: 20,
//                     borderRadius: 10,
//                     marginHorizontal: 8,
//                     borderWidth:1,
//                     borderColor:'#fff',
//                     // backgroundColor:""
//                     backgroundColor: 'rgba(0,0,0,0)'

//                 }}
//                 inactiveDotStyle={{
//                     // backgroundColor:'red'
//                     backgroundColor:'#f2f2f2'
//                 }}
//                 inactiveDotOpacity={0.4}
//                 inactiveDotScale={0.6}
//             />
//         );
//     }

//     render() {
//         console.log(this.state.activeIndex)
//         return (
//             <View>
//                 <View style={{width:"100%"}}>
//                    <Carousel
//                             autoplay
//                             loop
//                             // autoplayDelay={1000}
//                             layout={'default'}
//                             ref={(ref) => (this.carousel = ref)}
//                             data={this.state.carouselItems}
//                             autoplayLoop={true}
//                             sliderWidth={400}
//                             itemWidth={400}
//                             renderItem={this._renderItem}
//                             onSnapToItem={(index) => this.setState({ activeIndex: index })}
//                         />
//                    </View>
//                 { this.pagination}
//             </View>
//         );
//     }
// }














// import React, {Component} from 'react';
// import {Text, View, Image, SafeAreaView} from 'react-native';

// import Carousel from 'react-native-snap-carousel';

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       activeIndex: 0,
//       carouselItems: [
//         'https://images.unsplash.com/photo-1541079033018-63489731598f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
//         'https://images.unsplash.com/photo-1540304651506-82165588b4ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
//         'https://images.unsplash.com/photo-1541718366506-c16ed9459a7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjQzMzEwfQ&auto=format&fit=crop&w=1050&q=80',
//         'https://images.unsplash.com/photo-1541616615104-405a4fffe382?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjQzMzEwfQ&auto=format&fit=crop&w=1050&q=80',
//       ],
//     };
//   }

//   _renderItem({item, index}) {
//     return (
//       <View
//         style={{
//           backgroundColor: 'floralwhite',
//           borderRadius: 5,
//           height: 250,
//           // padding: 50,
//           marginLeft: 25,
//           marginRight: 25,
//         }}>
//         <Image source={{uri: item}} style={{width: '100%', height: '100%'}} />
//       </View>
//     );
//   }

//   render() {
//     return (
//       <SafeAreaView
//         style={{flex: 1, backgroundColor: 'rebeccapurple', paddingTop: 50}}>
//         <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
//           <Carousel
//             // autoplay
//             autoplayDelay={1000}
//             layout={'default'}
//             ref={(ref) => (this.carousel = ref)}
//             data={this.state.carouselItems}
//             sliderWidth={100}
//             itemWidth={380}
//             renderItem={this._renderItem}
//             onSnapToItem={(index) => this.setState({activeIndex: index})}
//           />
//         </View>
//       </SafeAreaView>
//     );
//   }
// }

// import React, { Component } from 'react';
// import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

// class App extends Component {
//     state = {
//         // unclicked: 'red',
//         clicked: false,
//     };

//     ChangeColor = () => {
//         this.setState({
//             unclicked: this.state.clicked,
//         });
//     };
//     render() {
//         return (
//             <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//                 <TouchableOpacity
//                     onPress={() => this.setState({ clicked: !this.state.clicked })}
//                     style={{
//                         backgroundColor: this.state.clicked ? '#f00' : '#fff',
//                         padding: 20,
//                         borderRadius: 10,
//                         borderWidth: 2,
//                     }}>
//                     <Text>Click Here</Text>
//                 </TouchableOpacity>
//             </View>
//         );
//     }
// }

// export default App;

// import React, { useState } from "react";
// import { CheckBox, Text, StyleSheet, View } from "react-native";

// const MyApp = () => {
//   const [isSelected, setSelection] = useState(false);

//   return (
//     <View style={styles.container}>
//       <View style={styles.checkboxInput}>
//         <CheckBox
//           value={isSelected}
//           onValueChange={setSelection}
//           style={styles.checkbox}
//         />
//         <Text style={styles.label}>Do you play cricket ?</Text>
//       </View>
//       <Text>CheckBox is {isSelected ? "Checked" : "Unchecked"}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor:'red'
//   },
//   checkboxInput: {
//     flexDirection: "row",
//     marginBottom: 20,
//   },
//   label: {
//     margin: 8,
//   },
//   checkbox:{
//     // backgroundColor:"blue",
//     borderWidth:2,
//     borderColor:'#fff'

//   }
// });

// export default MyApp;

// import React, { Component } from 'react';
// import { View, Text, StyleSheet, Image, TextInput } from 'react-native';

// import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
// import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

// import { Collapse, CollapseHeader, CollapseBody, AccordionList } from 'accordion-collapse-react-native';
// import Slider from '@react-native-community/slider';


// class LookingHouseSteps extends Component {
//     state = {

//         unpressed: 'red',
//         pressed: 'yellow'
//     }

//     // changeColor = () => {
//     //     this.setState({
//     //         unpressed: this.state.pressed ?this.state.pressed
//     //     })

//     // }

//     render() {


//         return (
//             <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//                 <TouchableOpacity style={[styles.ApplyBtn,{backgroundColor:this.state.unpressed}]}
//                     onPress={() => this.changeColor()}
//                 >
//                     <Text>Apply</Text>
//                 </TouchableOpacity>

//             </View>
//         );
//     }
// }
// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: '#ffffff',
//         height: '100%',
//         width: '100%',
//         shadowColor: "#000",
//         shadowOffset: {
//             width: 0,
//             height: 3,
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 3.84,

//         elevation: 2,
//     },
//     HeaderView: {
//         height: 130,
//         padding: 20,
//         backgroundColor: '#000',
//         borderBottomRightRadius: 30,
//         borderBottomLeftRadius: 30
//     },
//     HeaderTextView: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         marginTop: 20
//     },
//     HeaderText: {
//         color: '#FFA500',
//         fontSize: 20,
//         fontWeight: 'bold',
//     },
//     HeaderRightIcon: {
//         width: 20,
//         height: 20,
//         resizeMode: 'contain'
//     },
//     BackIcon: {
//         width: 20,
//         height: 20,
//         marginTop: 10,
//         resizeMode: 'contain'
//     },
//     Backimage: {
//         height: '100%',
//         width: '100%',
//         resizeMode: 'contain',
//         opacity: 0.6
//     },
//     CallHeaderMainView: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center'
//     },
//     CallBodyMainView: {
//         height: 150,
//         flexDirection: 'row',
//         justifyContent: "space-between",
//         padding: 10,
//     },
//     BottomBorder: {
//         borderWidth: 0.5,
//         width: '100%',
//         top: 5,
//         borderColor: '#c0c0c0'
//     },
//     CategoryCircleView: {
//         width: 100,
//         height: 100,
//         borderRadius: 100 / 2,
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: '#f2f2f2',

//         shadowColor: "#000",
//         shadowOffset: {
//             width: 0,
//             height: 2,
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 3.84,

//         elevation: 2,
//     },
//     CategoryIcons: {
//         height: 45,
//         width: 45,
//         resizeMode: 'contain'
//     },
//     Downarrow: {
//         width: 15,
//         height: 15,
//         right: 20,
//         resizeMode: 'contain'
//     },
//     ApplyView: {
//         // marginTop: -20,
//         padding: 20,
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         bottom: 10
//     },
//     ApplyBtn: {
//         backgroundColor: '#F6D700',
//         padding: 10,
//         height: 40,
//         width: 150,
//         borderRadius: 20,
//         alignItems: 'center'
//     },
//     TouchBTN: {
//         marginLeft: 10,
//         padding: 10,
//         height: 30,
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: '#f1f1f1',
//         borderRadius: 10,
//         shadowColor: "#000",
//         shadowOffset: {
//             width: 0,
//             height: 3,
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 3.84,

//         elevation: 1,
//     }

// });
// export default LookingHouseSteps;
// // import React, {Component} from 'react';
// // import {Platform, StyleSheet, Text, View, Button,TouchableOpacity} from 'react-native';
// // import { colors } from 'react-native-elements';

// // export default class App extends Component {
// //   state={
// //     colors:'yellow',
// //     buttonColor:'blue'
// //   };

// //   changeColor(){
// //       this.setState({
// //           buttonColor:this.state.colors
// //       })
// //   }
// //   render() {
// //     return (
// //       <View style={styles.container}>
// //           <TouchableOpacity
// //               style={{backgroundColor:this.state.buttonColor, padding: 15}}
// //               onPress={()=>this.changeColor()}
// //                 >
// //             <Text style={styles.text}>Change Color!</Text>
// //           </TouchableOpacity>
// //       </View>
// //     );
// //   }
// // }

// // const styles = StyleSheet.create({
// //   text:{
// //     color:'white'
// //     },
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     backgroundColor: '#fff',
// //   },
// // });


// // import Slider from '@react-native-community/slider';
// // import React, { Component } from 'react';
// // import { View, Text, Image, Dimensions, ScrollView, StyleSheet } from 'react-native'
// // // import { } from 'react-native-gesture-handler';



// // // const {width} = Dimensions.get("window");
// // // const height = width * 0.6;

// // const { width } = Dimensions.get("window");
// // const height = width * 0.6;

// // const images = [
// //     'https://images.unsplash.com/photo-1541332246502-2e99eaa96cc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
// //     'https://images.unsplash.com/photo-1541336528065-8f1fdc435835?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
// //     'https://images.unsplash.com/photo-1541327079290-5127e8c6d7b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
// //     'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
// //     'https://images.unsplash.com/photo-1541079033018-63489731598f?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',


// // ]

// // export default class App extends Component {
// //     state={
// //         active:0
// //     }
// //     change =(nativeEvent) =>{
// //         const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width); 
// //         if(slide !== this.state.active){
// //             this.setState({active: slide});
// //         }
// //     }
// //     render() {
// //         return (
// //             <View style={{ marginTop: 50, width, height }}>
// //                 <ScrollView
// //                     pagingEnabled
// //                     onScroll={this.change}
// //                     showsHorizontalScrollIndicator={false}
// //                     horizontal
// //                     style={{ width, height }}>

// //                     {
// //                         images.map((image, index) => (
// //                             <Image
// //                                 key={index}
// //                                 source={{ uri: image }}
// //                                 style={{ width, height, resizeMode: 'cover' }} />

// //                         ))
// //                     }
// //                 </ScrollView>
// //                 <View style={{ flexDirection: 'row', position: 'absolute', bottom: 0, alignSelf: 'center' }}>
// //                     {
// //                         images.map((i, k) => (
// //                             <Text style={k==this.state.active ? styles.TextaActive : styles.Texta}>•</Text>
// //                         ))
// //                     }


// //                 </View>

// //             </View>
// //         )
// //     }
// // }

// // const styles=StyleSheet.create({
// //     Texta:{color: '#888',  padding: 3},
// //     TextaActive:{color: '#fff',  padding: 3}
// // }) 