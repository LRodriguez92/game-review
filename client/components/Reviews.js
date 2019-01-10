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
            <Text style={styles.text}>{review.name}</Text>
            <Image style={{ height:150, width: 150 }} source={{uri: review.image}}/>
            {/* <Text>{review.image}</Text> */}
            <Text style={styles.text}>{review.body}</Text>
            <Button
              style={styles.button}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    color: '#000',
  },
  button: {
    color: '#800000'
  }
});
