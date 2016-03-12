'use strict';

var React = require('react-native');
var _styles = require('./styles.js');
var Communications = require('react-native-communications');
var GuideItem = require('./GuideItem.js')


var MOCKED_ADDRESS_DATA = { "addresses" : [
  {"id" : 1, "title": "مخيم للاجئين", "subtitle" : "Erstaufnahmeeinrichtung", "phonenumber": "+49 941 5680497", "emoji" : "🏢"},
  {"id" : 2, "title": "سيارة أجرة", "subtitle": "Taxi", "phonenumber": "+49 941 52052", "emoji" : "🚖"},
  {"id" : 3, "title": "طوارئ النساء", "subtitle": "Frauennotruf", "phonenumber": "+49 941 24171", "emoji" : "👩🏽"}
]};

var {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  ListView,
  View,
  Image,
  TouchableHighlight,
  NavigatorIOS,
} = React;

class Addresses extends Component {
  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}
        style={addressstyles.list}
      />
    );
}

renderLoadingView() {
  return (
    <View style={addressstyles.container}>
      <Text>
        Loading addresses...
      </Text>
    </View>
  );
}

renderRow(rowData) {
    return (
      <GuideItem guide={rowData} onPress={this.rowPressed.bind(this)}/>
    );
  }

rowPressed(rowData) {
  Communications.phonecall(rowData.phonenumber, true)
}

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1.id !== row2.id,
      }),
      loaded: false,
    };
  }

componentDidMount() {
  this.fetchData();
}

fetchData() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(MOCKED_ADDRESS_DATA.addresses),
      loaded: true,
    });
  }
}

var addressstyles = StyleSheet.create({
  container: {
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  emoji: {
    width: 80,
    fontSize: 30,
    textAlign: 'center',
  },
  rightContainer: {
    flex: 1
  },
  title: {
    fontSize: 20,
    marginLeft: 8,
    textAlign: 'center',
  },
  subtitle: {
    marginLeft: 8,
    textAlign: 'center',
  },
  phonenumber: {
    fontSize: 20,
    marginLeft: 8,
    marginTop: 8,
    textAlign: 'center',
  },
  list: {
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: '#EEEEEE',
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
  }
});

module.exports = Addresses;
