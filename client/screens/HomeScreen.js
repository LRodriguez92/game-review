import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  RefreshControl,
} from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import Reviews from '../components/Reviews';
import Review from '../components/Review';
import axios from 'axios';
import { BASE_URL } from '../helper/BASE_URL';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      currentReview: [],
      refreshing: false,
      view: 'reviews',
    }
    this.getCurrentReview = this.getCurrentReview.bind(this);
    this.onRefresh = this.onRefresh.bind(this);
    this.backToHome = this.backToHome.bind(this);
  }

  static navigationOptions = {
    title: 'Game Review',
  }

  async getReviews() {
    const resp = await axios.get(`${BASE_URL}/reviews`);
    const reviews = resp.data;
    this.setState({reviews: reviews});
  }

  async componentDidMount() {
    this.getReviews();
  }

  async getCurrentReview(id) {
    const resp = await axios.get(`${BASE_URL}/reviews/${id}`);
    const currentReview = resp.data;
    this.setState({
      currentReview: currentReview,
      view: 'review'
    });
  }

   async onRefresh() {
    this.setState({refreshing: true});
    await this.getReviews();
    this.setState({refreshing: false});
  }

  async submitEdit(id, edit) {
    try {
      await axios.put(`${BASE_URL}/reviews/${id}`, edit);
    } catch (e) {
      console.warn(e);
    } finally {
      this.setState({
        name: '',
        image: '',
        body: ''
      });
      this.getReviews();
      this.backToHome();
    }
  }

  backToHome() {
    this.setState({view: 'reviews'});
  }


  async deleteReview(id) {
    const resp = await axios.delete(`${BASE_URL}/reviews/${id}`);
    this.backToHome();
    this.getReviews();
  }

  renderView() {
    switch (this.state.view) {
      case 'reviews':
        return <Reviews
          reviews={this.state.reviews}
          getCurrentReview={(id) => this.getCurrentReview(id)}
        />
        break;
      case 'review':
        return <Review
          currentReview={this.state.currentReview}
          backToHome={this.backToHome}
          deleteReview={(id) => this.deleteReview(id)}
          editView={this.editView}
          submitEdit={(id, edit) => this.submitEdit(id, edit)}
        />
        break;
      default:
        return <Reviews
          reviews={this.state.reviews}
          getCurrentReview={(id) => this.getCurrentReview(id)}/>
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh}
            />
          }
          >
            {this.renderView()}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
