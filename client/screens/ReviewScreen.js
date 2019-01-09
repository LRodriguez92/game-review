import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
} from 'react-native';
import { HeaderBackButton } from 'react-navigation';

export default class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentReview: this.props.navigation.state.params.currentReview
    }
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: 'Review',
      headerLeft: (
        <HeaderBackButton onPress={() => navigation.goBack(null)}/>
      ),
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
          <View>
            <Text>Comments:</Text>
            {currentReview.comments.map(comment => (
              <View key={comment.id}>
                <Text>{comment.body}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    )
  }
}
