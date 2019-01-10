import React from 'react';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import {
  Image,
  Button,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';


export default class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: {
        name: '',
        image: '',
        body: ''
      }
    }
  }
  render() {
    return (
      // keyboardShouldPersistTaps='handled' lets you dismiss keyboard when tapping outside form
      <ScrollView keyboardShouldPersistTaps='handled'>
        <FormLabel>Title</FormLabel>
        <FormInput maxLength = {30} onChangeText={(name) => this.setState({edit: {name: name}})} value={this.state.name}/>
        <FormLabel>Image link</FormLabel>
        <FormInput onChangeText={(image) => this.setState({edit: {image: image}})} value={this.state.image}/>
        <FormLabel>Review</FormLabel>
        <FormInput multiline={true} onChangeText={(body) => this.setState({edit: {body: body}})} value={this.state.body}/>
        <Button
        onPress={() => this.props.submitEdit(this.props.id, this.state.edit)}
        title="Edit Review"
        color="#155685"
        accessibilityLabel="Submit Review"/>
      </ScrollView>
      )
  }
}
