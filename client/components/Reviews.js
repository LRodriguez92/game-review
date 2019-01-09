import React from 'react';
import {
  Image,
  Button,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

export default function Reviews(props) {
  return (
    <View>
      <ScrollView>
        {props.reviews.map(review => (
          <View key={review.id}>
            <Text>{review.name}</Text>
            <Text>{review.image}</Text>
            <Text>{review.body}</Text>
            <Button
              key={review.id}
              onPress={() => props.getCurrentReview(review.id)}
              title="Read Review"
              color="#155685"
              accessibilityLabel="View this review"
            />
          </View>
        ))}
      </ScrollView>
    </View>
  )
}
