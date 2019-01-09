import React from 'react';
import { HeaderBackButton } from 'react-navigation';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import {
  Image,
  Text,
  Button,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
} from 'react-native';
import axios from 'axios';
import BASE_URL from '../App';


export default class ReviewFormScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: 1,
      name: '',
      image: '',
      body: ''
    };
  }
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Submit a Review',
    }
  }

  async submitReview() {
    try {
      await axios.post(`${BASE_URL}/reviews`, {
        user_id: this.state.user_id,
        name: this.state.name,
        image: this.state.image,
        body: this.state.body
      });
    } catch (e) {
      console.warn(e);
    } finally {
      this.setState({
        name: '',
        image: '',
        body: ''
      });
    }
  }

  render() {
    return (
      // keyboardShouldPersistTaps='handled' lets you dismiss keyboard when tapping outside form
      <ScrollView keyboardShouldPersistTaps='handled'>
        <FormLabel>Name</FormLabel>
        <FormInput maxLength = {30} onChangeText={(name) => this.setState({name: name})} value={this.state.name}/>
        <FormValidationMessage>{'This field is required'}</FormValidationMessage>
        <FormLabel>Image</FormLabel>
        <FormInput onChangeText={(image) => this.setState({image: image})} value={this.state.image}/>
        <FormValidationMessage>{'This field is required'}</FormValidationMessage>
        <FormLabel>Body</FormLabel>
        <FormInput multiline={true} onChangeText={(body) => this.setState({body: body})} value={this.state.body}/>
        <FormValidationMessage>{'This field is required'}</FormValidationMessage>
        <Button
        onPress={() => this.submitReview()}
        title="Submit Review"
        color="#155685"
        accessibilityLabel="Submit Review"/>
      </ScrollView>
    )
  }
}
