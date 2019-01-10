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
} from 'react-native';

export default function Review(props) {
  return (
    <View>
      <ScrollView>
          <View key={props.currentReview.id}>
            <Button

              title="Edit"
              color="#067cc7"
              accessibilityLabel="Edit Review"
            />
            <Button
              onPress={() => props.deleteReview(props.currentReview.id)}
              title="Delete"
              color="#9a2700"
              accessibilityLabel="Delete Review"
            />
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
              onPress={props.backToHome}
              title="Back"
              color="#155685"
              accessibilityLabel="Go to previous page"
            />
          </View>
          <ReviewForm id={props.currentReview.id} submitEdit={(id, edit) => props.submitEdit(id, edit)}/>
      </ScrollView>
    </View>
  )
}
