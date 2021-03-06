'use strict';

var React = require('react-native');
var _styles = require('./styles.js');
var GuideDetail = require('./GuideDetail.js');
var GuideItem = require('./GuideItem.js');
var GuidePage = require('./GuidePage.js');

var jsonData = require('./guides.json')

var {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ListView,
  Component,
  NavigatorIOS,
} = React;

var styles = StyleSheet.create({
  list: {
    paddingTop: 8,
    marginBottom: 8,
  },
});

class Guide extends Component {
  constructor(props) {
    super(props);

    this.state = {
      guides: null,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1.id !== row2.id,
      }),
    };
  }

  componentWillMount() {
    var startGuides = jsonData.start_guides;
    var filtered = jsonData.guides.filter(prop => startGuides.includes(prop.id));

    this.setState({
      guides: jsonData.guides,
      dataSource: this.state.dataSource.cloneWithRows(filtered),
    });
  }

  rowPressed(rowData) {
    this.props.navigator.push({
        title: rowData.title,
        component: GuideDetail,
        passProps: {guides: this.state.guides, subIDs: rowData.sub_guides},
        barTintColor: "#156fc0",
        titleTextColor: "white",
        tintColor: "white"
    });
  }

  renderRow(rowData, sectionID, rowID) {
    return (
      <GuideItem guide={rowData} onPress={this.rowPressed.bind(this)} />
    );
  }

  render() {
    return(
      <View style={{marginTop: 64}}>
        <GuidePage>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderRow.bind(this)}
            contentInset={{bottom:90}}
            automaticallyAdjustContentInsets={false}
            style={styles.list}/>
        </GuidePage>
      </View>
    );
  }
}

module.exports = Guide;
