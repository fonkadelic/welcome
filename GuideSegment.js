'use strict';

var React = require('react-native');
var _styles = require('./styles.js');

var {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ListView,
  Component,
  StyleSheet,
} = React;

var styles = StyleSheet.create({
  container: {
    height: 45,
    backgroundColor: '#42a5f5',
    flexDirection: 'row',
    alignItems: 'center',
  },
  segment: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  selectedSegment: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    opacity: 0.5,
  },
  text: {
    textAlign: 'center',
    fontSize: 17,
    color: 'white',
  },
  separator: {
    width: 0.5,
    alignSelf: 'stretch',
    backgroundColor: 'white',
  }
});

class GuideSegment extends Component {

  constructor(props) {
    super(props);
    this.state = { selectedIndex: 1 };
  }

  segmentPressed(index) {
    this.setState({ selectedIndex: index });
    this.props.onPress(index);
  }

  renderSegment(index, title) {

    const segmentStyle =  (index == this.state.selectedIndex) ? styles.selectedSegment : styles.segment;

    return (
      <TouchableHighlight
        style={segmentStyle}
        onPress={() => this.segmentPressed(index)}
        underlayColor='transparent'>
          <Text style={styles.text}>{title}</Text>
      </TouchableHighlight>
    );
  }

  render() {
    return(
      <View style={styles.container}>
        {this.renderSegment(1, 'لقهي')}
        <View style={styles.separator} />
        {this.renderSegment(2, 'لعهيثس')}
      </View>
    );
  }
}

module.exports = GuideSegment;
