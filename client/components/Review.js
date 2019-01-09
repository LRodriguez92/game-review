import React from 'react';
import {
  Image,
  Button,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

export default function Review(props) {
  return (
    <View>
      <ScrollView>
          <View key={props.currentReview.id}>
            <Text>{props.currentReview.name}</Text>
            <Text>{props.currentReview.image}</Text>
            <Text>{props.currentReview.body}</Text>
              <View>
                <Text>Comments:</Text>
                {props.currentReview.comments.map(comment => (
                  <View key={comment.id}>
                    <Text>{comment.user.name}</Text>
                    <Text>{comment.body}</Text>
                  </View>
                ))}
              </View>
            <Button
              key={props.currentReview.id}
              onPress={() => alert('going back')}
              title="Back"
              color="#155685"
              accessibilityLabel="Go to previous page"
            />
          </View>
      </ScrollView>
    </View>
  )
}
