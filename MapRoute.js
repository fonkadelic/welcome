'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  WebView,
} = React;

var MapRoute = React.createClass({
  propTypes: {
    address: React.PropTypes.string,
  },

  getDefaultProps: function() {
    return {
      address: "Steinerne Brücke",
    }
  },

  componentWillMount: function() {
    var that = this;
    navigator.geolocation.getCurrentPosition(
      (initialPosition) =>
        that.setState({
          user_longitude: initialPosition.coords.longitude,
          user_latitude: initialPosition.coords.latitude,
        }),
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  },

  getInitialState: function() {
    return {
      user_longitude: null,
      user_latitude: null,
    }
  },

  render: function() {
    var url =
      'https://google.com/maps/dir/'+
      this.state.user_latitude + ',' +
      this.state.user_longitude + '/' +
      this.props.address +
      '/data=!4m2!4m1!3e2';

    return (
      <View style={{flex: 1, marginTop: 64, marginBottom: 46,}}>
        <WebView
          ref={"www.google.com"}
          automaticallyAdjustContentInsets={false}
          style={{flex: 1}}
          source={{uri: url}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          decelerationRate="normal"
          onNavigationStateChange={this.onNavigationStateChange}
          onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
          startInLoadingState={true}
          scalesPageToFit={this.state.scalesPageToFit}
        />
      </View>
    );
  },
});

var styles = StyleSheet.create({
});

module.exports = MapRoute;
