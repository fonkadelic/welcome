'use strict';

var React = require('react-native');
var _styles = require('./styles.js');
var Icon = require('react-native-vector-icons/FontAwesome');
var Speech = require('react-native-speech');
var MapRoute = require('./MapRoute.js');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} = React;

var InfoBox = React.createClass({
  propTypes: {
    image: React.PropTypes.object,
    address: React.PropTypes.string,
  },

  getDefaultProps: function() {
    return {
      image: require('image!almadina'),
      german_name: "Al Madina",
      german_address_line1: "Furtmayrstr. 10",
      german_address_line2: "93055 Regensburg",
      german_time1: "Mo - Fr 9 - 20 Uhr",
      german_time2: "Sa 9 - 19 Uhr",
      arabic_name: "شم ؤشيهرش ؤشقنف",
      arabic_address_line1: "  بعقفوشظثقسفق. ١٠",
      arabic_address_line2: "٩٣٠٥٥ قثلثرسزعقل",
      arabic_time1: "  وخ/بق ١٠/١٨٠٠ ",
      arabic_time2: "سش ٠٩٢٠ عاق",
    }
  },

  getInitialState: function() {
    return {
    }
  },

  route: function() {
    this.props.navigator.push({
      title: 'Navigation',
      component: MapRoute,
      passProps: {
        address: this.props.german_address_line1 + " " + this.props.german_address_line2,
      },
    });
  },

  speak: function() {
    var text =
      this.props.german_name + ". Ort: " +
      this.props.german_address_line1 + ", " + this.props.german_address_line2
      + ". Die Öffnungszeiten sind: " +
      this.props.german_time1 + " und " + this.props.german_time2;

    text = text.replace("-", "bis");
    text = text.replace("Mo ", "Montag");
    text = text.replace("Di ", "Dienstag");
    text = text.replace("Mi ", "Mittwoch");
    text = text.replace("Do ", "Donnerstag");
    text = text.replace("Fr ", "Freitag");
    text = text.replace("Sa ", "Samstag");
    text = text.replace("So ", "Sonntag");

    Speech.speak({
      text: text,
      voice: 'de'
    });
  },

  render: function() {
    return (
      <View style={[_styles.box_shadow, styles.box]}>
        <Image
          source={this.props.image}
          style={styles.image} />
        <View style={styles.text_view}>
          <View style={{flex: 0.5}}>
            <Text>
              {this.props.german_name} {'\n'}
              {this.props.german_address_line1} {'\n'}
              {this.props.german_address_line2} {'\n'}
              {'\n'}
              Öffnungszeiten {'\n'}
              {this.props.german_time1} {'\n'}
              {this.props.german_time2} {'\n'}
            </Text>
          </View>
          <View style={{alignItems: "flex-end", flex: 0.5}}>
            <Text style={{alignItems: "flex-end"}}>
              {this.props.arabic_name} {'\n'}
              {this.props.arabic_address_line1} {'\n'}
              {this.props.arabic_address_line2} {'\n'}
              {'\n'}
              كببرعرلسغثهف {'\n'}
              {this.props.arabic_time1} {'\n'}
              {this.props.arabic_time2} {'\n'}
            </Text>
          </View>
        </View>
        <View style={[styles.objects_right]}>
        <TouchableHighlight onPress={this.route} underlayColor="transparent">
          <View style={[styles.text_box]}>
            <Icon style={{flex: 0.4, marginLeft: 10,}} name="comments" size={25} color="#fff" />
            <Text style={styles.text_style}> قخعفث </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.speak} underlayColor="transparent">
          <View style={[styles.text_box]}>
            <Icon style={{flex: 0.4, marginLeft: 10,}} name="comments" size={25} color="#fff" />
            <Text style={styles.text_style}> فشمن </Text>
          </View>
        </TouchableHighlight>
        </View>
        <View style={[styles.objects_right]}>
          <View style={[styles.text_right]}>
            <Text style={{color: "#9b9b9b", flex: 0.6}}> Route </Text>
          </View>

          <View style={[styles.text_right]}>
            <Text style={{color: "#9b9b9b", flex: 0.6}}> Voice to talk </Text>
          </View>
        </View>
      </View>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 64,
    marginBottom: 49,
    backgroundColor: '#eeeeee',
  },
  box: {
    margin: 10,
    backgroundColor: "#fafafa",
  },
  image: {
    height: 226,
    width: 355,
    borderWidth: 1,
    borderColor: "transparent",
  },
  text_view: {
    flexDirection: "row",
    flex: 1,
    padding: 10,
    paddingTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eeeeee",
  },
  objects_right: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    flexDirection: "row",
    padding: 5,
    paddingTop: 5,
    paddingBottom: 0,
  },
  text_right: {
    flexDirection: "row",
    width: 120,
    padding: 5,
    paddingBottom: 2,
    paddingTop: 0,
  },
  text_box: {
    flexDirection: "row",
    backgroundColor: "#42a5f5",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    width: 120,
    height: 36,
    borderWidth: 1,
    borderColor: "#42a5f5",
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    marginBottom: 5,

  },
  text_style: {
    fontSize: 20,
    color: "white",
    flex: 0.6,
  },

});

module.exports = InfoBox;
