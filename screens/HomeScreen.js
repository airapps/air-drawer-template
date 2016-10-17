 import React, { Component } from 'react';
 import {
     View,
     StyleSheet,
     Text
 } from 'react-native';
 import { Router } from './index';

 export default class HomeScreen extends Component {
   /**
    * This is where we can define any route configuration for this
    * screen. For example, in addition to the navigationBar title we
    * could add backgroundColor.
    */
   static route = {
     navigationBar: {
       title: 'Examples',
     },
   }

   _goToScreen = name => () => {
     this.props.navigator.push(Router.getRoute(name));
   }

   render() {
     return (
         <View style={styles.container}>
           <Text>Home</Text>
         </View>
     );
   }
 }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#fafafa',
   },
 });
