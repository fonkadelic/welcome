'use strict';

var React = require('react-native');
var _styles = require('./styles.js');
var Icon = require('react-native-vector-icons/FontAwesome');
var Guide = require('./Guide.js');
var Chat = require('./Chat.js');
var Addresses = require('./Addresses.js');
var InfoSearch = require('./InfoSearch.js');
var Profile = require('./Profile.js');
var I18nService = require('./i18n.js');
var InfoBox = require('./InfoBox.js');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TabBarIOS,
  NavigatorIOS,
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
    I18nService.set("syria");
    var I18n = I18nService.get();

    return (
      <TabBarIOS
        tintColor="#156fc0">
        <Icon.TabBarItem
          title={I18n.t("guide")}
          selected={this.state.selectedTab === 'guide'}
          iconName={'map-signs'}
          iconSize={20}
          onPress={() => {
            this.setState({
              selectedTab: 'guide'
            });
          }}>
          <NavigatorIOS
              style={_styles.navigationContainer}
              initialRoute={{
              title: I18n.t("guide"),
              component: Guide,
              barTintColor: "#156fc0",
              titleTextColor: "white",
            }}/>
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title={I18n.t("chat")}
          selected={this.state.selectedTab === 'chat'}
          iconName={'comment'}
          iconSize={20}
          onPress={() => {
            this.setState({
              selectedTab: 'chat'
            });
          }}>
          <NavigatorIOS
              style={_styles.navigationContainer}
              initialRoute={{
              title: I18n.t("chat"),
              component: Chat,
              barTintColor: "#156fc0",
              titleTextColor: "white",
            }}/>
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title={I18n.t("addresses")}
          selected={this.state.selectedTab === 'addresses'}
          iconName={'bell'}
          iconSize={20}
          onPress={() => {
            this.setState({
              selectedTab: 'addresses'
            });
          }}>
          <NavigatorIOS
          style={_styles.navigationContainer}
          initialRoute={{
          title: I18n.t("addresses"),
          component: Addresses,
          barTintColor: "#156fc0",
          titleTextColor: "white",
          }}/>
        </Icon.TabBarItem>
      </TabBarIOS>
    );
  },
});

var styles = StyleSheet.create({
});

module.exports = TabBarNavigation;
