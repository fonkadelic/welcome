'use strict';

var React = require('react-native');
var _styles = require('./styles.js');
var ChatItem = require('./chatitem.js');

var {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ListView,
  Component,
  NavigatorIOS,
  ScrollView,
} = React;


var Chat = React.createClass({
  render: function() {
    return(
      <ScrollView style={styles.container}>
        <View style={styles.header_container}>
          <Text style={styles.header_text}>
            سشظ اثمخ
          </Text>
        </View>
        <View style={styles.box_container}>
          <ChatItem
            image={require('image!hugging-face')}
            text="اثممخ"
            german_text="hello"
          />
          <ChatItem
            image={require('image!waving-hand-sign')}
            text="زظث"
            german_text="bye"
          />
        </View>

        <View style={styles.header_container}>
          <Text style={styles.header_text}>
            فقشرسحخق
          </Text>
        </View>
        <View style={styles.box_container}>
          <ChatItem
            image={require('image!station')}
            text="زشاراخب"
            german_text="train station"
          />
          <ChatItem
            image={require('image!bus')}
            text="زعس"
            german_text="bus"
          />
          <ChatItem
            image={require('image!tram-car')}
            text="فشطه"
            german_text="taxi"
          />
        </View>

        <View style={styles.header_container}>
          <Text style={styles.header_text}>
            بشوهمظ
          </Text>
        </View>
        <View style={styles.box_container}>
          <ChatItem
            image={require('image!family')}
            text="زشاراخب"
            german_text="family"
          />
          <ChatItem
            image={require('image!man')}
            text="زعس"
            german_text="father"
          />
          <ChatItem
            image={require('image!woman')}
            text="فشطه"
            german_text="mother"
          />
        </View>

        <View style={styles.header_container}>
          <Text style={styles.header_text}>
            ظثس رخ
          </Text>
        </View>
        <View style={styles.box_container}>
          <ChatItem
            image={require('image!thumbs-up-sign')}
            text="ظثس"
            german_text="yes"
          />
          <ChatItem
            image={require('image!thumbs-down-sign')}
            text="رخ"
            german_text="no"
          />
        </View>
      </ScrollView>
    );
  },


});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eeeeee",

  },
  box_container: {
    flexDirection: "row",
  },
  header_text: {
    fontSize: 20,
    color: "#4a4a4a",
  },
  header_container: {
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  }
});


module.exports = Chat;
