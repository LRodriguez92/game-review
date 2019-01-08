import React from 'react';
import {
  Image,
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function Reviews(props) {
  return (
    <View>
      {props.reviews.map(review => (
        <View key={review.id}>
          <Text>{review.name}</Text>
          <Text>{review.image}</Text>
          <Text>{review.body}</Text>
        <Button
          key={review.id}
          onPress={() => props.getReview(review.id)}
          title="Read Review"
          color="#155685"
          accessibilityLabel="View this review"
        />
      </View>
      ))}
    </View>
  )
}
