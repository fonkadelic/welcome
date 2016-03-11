'use strict';

var React = require('react-native');
var _styles = require('./styles.js');
var Icon = require('react-native-vector-icons/FontAwesome');
var Guide = require('./Guide.js');
var Addresses = require('./Addresses.js');
var InfoSearch = require('./InfoSearch.js');
var Profile = require('./Profile.js');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TabBarIOS,
} = React;

var TabBarNavigation = React.createClass({
  propTypes: {
    language: React.PropTypes.string,
  },

  getDefaultProps: function() {
    return {
      language: null,
    }
  },

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
          <Guide {...this.props} />
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
          <InfoSearch {...this.props} />
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
          <Addresses {...this.props} />
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="Profile"
          selected={this.state.selectedTab === 'profile'}
          iconName={'user'}
          iconSize={20}
          onPress={() => {
            this.setState({
              selectedTab: 'profile'
            });
          }}>
          <Profile {...this.props} />
        </Icon.TabBarItem>
      </TabBarIOS>
    );
  },
});

var styles = StyleSheet.create({
});

module.exports = TabBarNavigation;
