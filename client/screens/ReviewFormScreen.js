import React from 'react';
import { HeaderBackButton } from 'react-navigation';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { NavigationActions } from 'react-navigation';
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
import { BASE_URL } from '../helper/BASE_URL';


export default class ReviewFormScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      user_id: 1,
      name: '',
      image: '',
      body: ''
    };
    this.getReviews = this.getReviews.bind(this);
  }
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Submit a Review',
    }
  }

  async getReviews() {
    const resp = await axios.get(`${BASE_URL}/reviews`);
    const reviews = resp.data;
    this.setState({reviews: reviews});
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
      this.props.navigation.navigate('Home');
    }
  }

  render() {
    return (
      // keyboardShouldPersistTaps='handled' lets you dismiss keyboard when tapping outside form
      <ScrollView contentContainerStyle={styles.container}keyboardShouldPersistTaps='handled'>
        <FormLabel>Title</FormLabel>
        <FormInput maxLength = {30} onChangeText={(name) => this.setState({name: name})} value={this.state.name}/>
        <FormLabel>Image link</FormLabel>
        <FormInput onChangeText={(image) => this.setState({image: image})} value={this.state.image}/>
        <FormLabel>Review</FormLabel>
        <FormInput multiline={true} onChangeText={(body) => this.setState({body: body})} value={this.state.body}/>
        <Button
        onPress={() => this.submitReview()}
        title="Submit Review"
        color="#155685"
        accessibilityLabel="Submit Review"/>
      </ScrollView>
    )
  }
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
