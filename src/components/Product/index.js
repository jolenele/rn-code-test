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
    this.state = {
      price: 100,
      discount: true,
      discountType: 'percentage',
      discountAmount: 15.5,
      discountedPrice: 0,
    };
  }
  componentDidMount = async () => {
    await this.calculateDiscount();
  };
  calculateDiscount = async () => {
    const { price, discount, discountType, discountAmount } = this.state;
    if (discount) {
      if (discountType === 'value') discountedPrice = price - discountAmount;
      if (discountType === 'percentage')
        discountedPrice = price - (price * discountAmount) / 100;
    }
    this.setState({ discountedPrice: discountedPrice });
  };
  render() {
    const { price, discountedPrice, discount } = this.state;
    return (
      <ImageBackground
        style={styles.container}
        imageStyle={{ resizeMode: 'cover' }}
        source={BACKGROUND}>
        <View style={styles.info_bar}>
          <View style={styles.infor_column}>
            <Text style={styles.title}>Title</Text>
            {discount ? (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text style={styles.text_discount}>
                  {discountedPrice === 0 ? 'Free' : discountedPrice.toFixed(2)}
                </Text>
                <Text style={styles.text_original}>{price.toFixed(2)}</Text>
              </View>
            ) : (
              <Text style={styles.text}>
                {price === 0 ? 'Free' : price.toFixed(2)}
              </Text>
            )}

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
  text_discount: {
    fontSize: 20,
    fontWeight: '600',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#f5f5dc',
    backgroundColor: '#f5f5dc',
    color: 'red',
    overflow: 'hidden',
  },
  text_original: {
    fontSize: 18,
    fontWeight: '600',
    color: 'lightgrey',
    textDecorationLine: 'line-through',
    fontStyle: 'italic',
    marginLeft: 10,
  },
  description: {
    fontSize: 14,
    fontWeight: '400',
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
