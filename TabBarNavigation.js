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
    I18nService.set("en");
    var I18n = I18nService.get();

    return (
      <TabBarIOS
        tintColor="#156fc0">
        <Icon.TabBarItem
          title={I18n.t("guide")}
          selected={this.state.selectedTab === 'guide'}
          iconName={'clone'}
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
            }}/>
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title={I18n.t("chat")}
          selected={this.state.selectedTab === 'chat'}
          iconName={'clone'}
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
          title={I18n.t("infosearch")}
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
          }}/>
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
