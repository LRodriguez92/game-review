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
    <View style={styles.container}>
      <ScrollView>
        {props.reviews.map(review => (
          <View key={review.id}>
            <Text style={styles.title}>{review.name}</Text>
            <Image style={{ height:150, width: 300 }} source={{uri: review.image}}/>
            {/* <Text>{review.image}</Text> */}
            <Text style={styles.text}>{review.body}</Text>
            <Button
              buttonStyle={styles.button}
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
    backgroundColor: '#000',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 15,
  },
  title: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 30,
  },
  button: {
    height: 10,
    width: 10,
    backgroundColor: '#800000',
  }
});
