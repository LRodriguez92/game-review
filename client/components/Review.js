import React from 'react';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import ReviewForm from './ReviewForm';
import {
  Image,
  Button,
  StyleSheet,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';

export default function Review(props) {
  return (
    <KeyboardAvoidingView behavior="padding" enabled>
      <View style={styles.container}>
        <ScrollView>
          <View key={props.currentReview.id}>
            <Text style={styles.title}>{props.currentReview.name}</Text>
            <Image style={{ height:250, width: 400 }} source={{uri: props.currentReview.image}}/>
            <Text style={styles.text}>{props.currentReview.body}</Text>
            <View>
              <Text>Comments:</Text>
              {props.currentReview.comments.map(comment => (
                <View key={comment.id}>
                  <Text>{comment.user.name}</Text>
                  <Text>{comment.body}</Text>
                </View>
              ))}
            </View>
            <View>
              <Button
                key={props.currentReview.id}
                onPress={props.backToHome}
                title="Back"
                color="#155685"
                accessibilityLabel="Go to previous page"
              />
            </View>
          </View>
          <ReviewForm id={props.currentReview.id} submitEdit={(id, edit) => props.submitEdit(id, edit)}/>
          <Button
            onPress={() => props.deleteReview(props.currentReview.id)}
            title="Delete"
            color="#9a2700"
            accessibilityLabel="Delete Review"
          />
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
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
