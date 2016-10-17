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

import Umeng from 'air-umeng';
import Sidebar from 'react-native-sidebar';


class AirApps extends Component {
  constructor() {
    super();
    Umeng.startWithAppkey('55894b6d67e58e66c5000d6d');
  }

  renderLeftSidebar() {
    return (
        <View style={{backgroundColor:'white' , flex:1}}>
          <Text>Left</Text>
        </View>
    )

  }

  renderRightSidebar() {
    return (
        <View>
          <Text>Right</Text>
        </View>
    )
  }

  renderContent() {
    return (
        <View style={{backgroundColor:'rgba(0,0,0,0.9)' , flex:1}}>
          <Text>Content</Text>
        </View>
    )
  }

  render() {
    return (
        <Sidebar
            leftSidebar={ this.renderLeftSidebar() }
            //rightSidebar={ this.renderRightSidebar() }
            style={{flex: 1 }}
            >
          { this.renderContent() }
        </Sidebar>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('AirKit', () => AirApps);