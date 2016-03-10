'use strict';

var React = require('react-native');
var _styles = require('./styles.js');
var Icon = require('react-native-vector-icons/FontAwesome');
var Guide = require('./Guide.js');
var Addresses = require('./Addresses.js');
var InfoSearch = require('./InfoSearch.js');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TabBarIOS,
} = React;

var TabBarNavigation = React.createClass({
  getInitialState: function() {
    return {
      selectedTab: 'guide',
    }
  },

  render: function() {
    return (
      <TabBarIOS>
        <Icon.TabBarItem
          title="Guide"
          selected={this.state.selectedTab === 'guide'}
          iconName={'clone'}
          iconSize={20}
          onPress={() => {
            this.setState({
              selectedTab: 'guide'
            });
          }}>
          <Guide />
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="Info Search"
          selected={this.state.selectedTab === 'infosearch'}
          iconName={'bus'}
          iconSize={20}
          onPress={() => {
            this.setState({
              selectedTab: 'infosearch'
            });
          }}>
          <InfoSearch />
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="Addresses"
          selected={this.state.selectedTab === 'addresses'}
          iconName={'bell'}
          iconSize={20}
          onPress={() => {
            this.setState({
              selectedTab: 'addresses'
            });
          }}>
          <Addresses />
        </Icon.TabBarItem>
      </TabBarIOS>
    );
  },
});

var styles = StyleSheet.create({
});

module.exports = TabBarNavigation;
