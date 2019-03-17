import React, { Component } from 'react';
import {
  Button, View, ScrollView, Text, Image,
} from 'react-native';
import { ListItem } from 'react-native-elements';
import { styles } from './styles';


export default class Likes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        'Neo',
        'Trinity',
      ],
    };
  }

  addLike = () => {
    this.setState(prevState => ({
      data: [...prevState.data, 'Morpheus'],
    }));
  }

  renderItems() {
    return this.state.data.map(name => (
      <ListItem
        title={`${name} likes your post`}
        leftAvatar={require('../../assets/avatar_placeholder.png')}
        chevron
      />
    ));
  }

  render() {
    return (
      <View>
        <ScrollView
          contentContainerStyle={styles.contentContainer}
        >
          <Text style={styles.text}>
            {'Likes'}
          </Text>
          {this.renderItems()}
          <Button onPress={this.addLike} title="Add more" />
          <Button onPress={() => this.props.navigation.navigate('draggable')} title="Show draggable" />
        </ScrollView>
        <Image
          source={require('../../assets/cat.png')}
          style={styles.image}
        />
      </View>
    );
  }
}
