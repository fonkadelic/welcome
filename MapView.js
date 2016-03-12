'use strict';

var React = require('react-native');
var MapViewComponent = require('react-native-maps');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} = React;

var MapView = React.createClass({
  propTypes: {
  },

  getDefaultProps: function() {
    return {
    }
  },

  getInitialState: function() {
    return {
      coordinate: {
        latitude: 49.011591,
        longitude: 12.0929126,
      },
      coordinate2: {
        latitude: 49.017840,
        longitude: 12.098154,
      }
    }
  },

  render: function() {
    return (
      <View style={{flex: 1, height: 510, marginBottom: 46,}}>
        <MapViewComponent
          style= {{flex: 1}}
          initialRegion={{
            latitude: 49.011591,
            longitude: 12.0929126,
            latitudeDelta: 0.004,
            longitudeDelta: 0.0421,
          }}
        >
          <MapViewComponent.Marker ref="m2" coordinate={this.state.coordinate}>
            <MapViewComponent.Callout>
              <View>
                <Text>
                  <Text style={{fontWeight: "bold"}}>شم ؤشيهرش ؤشقنف</Text>a{"\n"}
                  بعقفوشظثقسفق. ١٠ {"\n"}
                  ٩٣٠٥٥ قثلثرسزعقل
                </Text>
              </View>
            </MapViewComponent.Callout>
          </MapViewComponent.Marker>
          <MapViewComponent.Marker ref="m2" coordinate={this.state.coordinate2}>
            <MapViewComponent.Callout>
              <View>
                <Text>
                  <Text style={{fontWeight: "bold"}}>لعشسبمكتشسبي</Text>a{"\n"}
                  بعقفوشظثقسفق. ١٠{"\n"}
                  ٩٣٠٥٥ قثلثرسزعقل
                </Text>
              </View>
            </MapViewComponent.Callout>
          </MapViewComponent.Marker>

        </MapViewComponent>
      </View>
    );
  },
});

var styles = StyleSheet.create({
});

module.exports = MapView;
