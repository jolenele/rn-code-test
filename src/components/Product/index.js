import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from 'react-native';
import { AVARTAR, BACKGROUND } from './Image';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ImageBackground
        style={styles.container}
        imageStyle={{ resizeMode: 'cover' }}
        source={BACKGROUND}>
        <View style={styles.info_bar}>
          <View style={styles.infor_column}>
            <Text style={styles.title}>Title</Text>
            <Text style={styles.text}>Price</Text>
            <Text style={styles.description}>Description</Text>
          </View>
          <Image source={AVARTAR} style={styles.image_avatar} />
        </View>
      </ImageBackground>
    );
  }
}

export default Product;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'transparent',
    overflow: 'hidden',
    // aspectRatio: 4 / 3,
    marginTop: 100,
    width: width,
    height: undefined,
    justifyContent: 'flex-end',
  },
  info_bar: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  infor_column: { flexDirection: 'column', justifyContent: 'space-evenly' },
  title: { fontSize: 20, fontWeight: '600', color: 'white' },
  text: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
  },
  description: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
  },
  image_avatar: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'transparent',
  },
});
