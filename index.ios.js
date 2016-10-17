/**
 * Created by buhe on 2016/10/10.
 */
import React, {
    Component,
} from 'react';
import {
    StyleSheet,
    Text,
    View,
    AppRegistry,
    Dimensions
} from 'react-native';

import {
    StackNavigation,
    DrawerNavigation,
    DrawerNavigationItem,
    NavigationProvider
} from '@exponent/ex-navigation';

import Router from './screens';

// Treat the DrawerNavigationLayout route like any other route -- you may want to set
// it as the intiial route for a top-level StackNavigation

class DrawerNavigationLayout extends React.Component {
  static route = {
    navigationBar: {
      visible: false,
    }
  };

  render() {
    return (
        <NavigationProvider router={Router}>
          <DrawerNavigation
              id='main'
              initialItem='home'
              drawerWidth={200}
              renderHeader={this._renderHeader}
              >
            <DrawerNavigationItem
                id='home'
                selectedStyle={styles.selectedItemStyle}
                renderTitle={isSelected => this._renderTitle('Home', isSelected)}
                >
              <StackNavigation
                  id='home'
                  initialRoute={Router.getRoute('home')}
                  />
            </DrawerNavigationItem>

            <DrawerNavigationItem
                id='about'
                selectedStyle={styles.selectedItemStyle}
                renderTitle={isSelected => this._renderTitle('About', isSelected)}
                >
              <StackNavigation
                  id='about'
                  initialRoute={Router.getRoute('about')}
                  />
            </DrawerNavigationItem>

          </DrawerNavigation>
        </NavigationProvider>
    );
  }

  _renderHeader = () => {
    return (
        <View style={styles.header}>
        </View>
    );
  };

  _renderTitle(text:string, isSelected:boolean) {
    return (
        <Text style={[styles.titleText, isSelected ? styles.selectedTitleText : {}]}>
          {text}
        </Text>
    );
  }

;
}

const styles = StyleSheet.create({
  header: {
    height: 20
  },

  selectedItemStyle: {
    backgroundColor: 'blue'
  },

  titleText: {
    fontWeight: 'bold'
  },

  selectedTitleText: {
    color: 'white'
  }
});
AppRegistry.registerComponent('AirKit', () => DrawerNavigationLayout);