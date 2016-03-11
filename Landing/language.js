'use strict';

var React = require('react-native');
var _styles = require('../styles.js');
var LanguageBox = require('./languageBox.js');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} = React;

var Language = React.createClass({
  propTypes: {
    onSelect: React.PropTypes.func,
  },

  getDefaultProps: function() {
    return {
      onSelect: function () {},
    }
  },

  getInitialState: function() {
    return {
    }
  },

  render: function() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.welcome_view}>
          <View style={styles.text_view}>
            <Text style={[styles.text_blue, _styles.default_font]}>
              تۆ ڕه‌گه‌نسبور
            </Text>
            <Text>{" "}</Text>
            <Text style={[styles.text_white, _styles.default_font]}>
              صثمذخوث
            </Text>
          </View>
          <View style={styles.text_view}>
            <Text style={[styles.text_blue, _styles.default_font]}>
              فخ قثلثدسذعقل
            </Text>
            <Text>{" "}</Text>
            <Text style={[styles.text_white, _styles.default_font]}>
              صثمزخپث
            </Text>
          </View>
          <View style={styles.text_view}>
            <Text style={[styles.text_blue, _styles.default_font]}>
              فخ قثلرثسزعقل
            </Text>
            <Text>{" "}</Text>
            <Text style={[styles.text_white, _styles.default_font]}>
              وه‌لجۆمه‌
            </Text>
          </View>
          <View style={styles.text_view}>
            <Text style={[styles.text_white, _styles.default_font]}>Welcome</Text>
            <Text style={[styles.text_blue, _styles.default_font]}>{" "}to Regensburg</Text>
          </View>
        </View>
        <View style={styles.language_view}>
          <View style={styles.language_wrapper}>
            <View style={styles.text_language_view}>
              <Text style={styles.language_text}>
                شحح مشدلعشلث
              </Text>
            </View>
            <View style={styles.text_language_view}>
              <Text style={styles.language_text}>
                سپراجهه‌ ده‌ر اپپ
              </Text>
            </View>
            <View style={styles.text_language_view}>
              <Text style={styles.language_text}>
                سحقشذث يثق شحح
              </Text>
            </View>
            <View style={styles.text_language_view}>
              <Text style={styles.language_text}>
                choose language
              </Text>
            </View>
          </View>
          <View style={styles.language_box_container}>
            <LanguageBox
              onSelect={this.props.onSelect}
              text="شقشزهذ"
              image={require("image!syria")}
            />
            <LanguageBox
              onSelect={this.props.onSelect}
              text="كوردیسه"
              image={require("image!afghanistan")}
            />
          </View>
          <View style={styles.language_box_container}>
            <LanguageBox
              onSelect={this.props.onSelect}
              text="شقشزهذ"
              image={require("image!iraq")}
            />
            <LanguageBox
              onSelect={this.props.onSelect}
              text="English"
              image={require("image!path")}
            />
          </View>
        </View>
      </View>
    );
  },
});

var styles = StyleSheet.create({
  text_white: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  text_blue: {
    color: "#42a5f5",
    fontSize: 16,
  },
  text_view: {
    flexDirection: 'row',
    margin: 6,
  },
  welcome_view: {
    backgroundColor: "#156fc0",
    height: 183,
    alignItems: "center",
    justifyContent: "center",
  },
  language_view: {
    paddingTop: 10,
    flex: 1,
    backgroundColor: "#42a5f5",
    alignItems: "center",

  },
  text_language_view: {
    margin: 4,
  },
  language_text: {
    fontSize: 14,
    color: "#ffffff",
  },
  language_wrapper: {
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  language_box_container: {
    flexDirection: "row",
  },
});

module.exports = Language;
