import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
} from 'react-native';

export default class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentReview: this.props.navigation.state.params.currentReview
    }
  }

  render() {
    const {currentReview} = this.state;
    return (
      <View key={currentReview.id}>
        <ScrollView>
          <Text>{currentReview.params}</Text>
          <Text>{currentReview.name}</Text>
          <Text>{currentReview.image}</Text>
          <Text>{currentReview.body}</Text>
        </ScrollView>
      </View>
    )
  }
}
