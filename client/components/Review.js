import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function Review(props) {
  const review = props.review;
  return (
    <View key={review.id}>
      <Text>{review.name}</Text>
      <Text>{review.image}</Text>
      <Text>{review.body}</Text>
    </View>
  )
}
