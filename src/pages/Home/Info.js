import React from 'react';
import { SafeAreaView, Text, Linking, StyleSheet, View } from 'react-native';
import Product from '../../components/Product';

const Info = () => (
  <SafeAreaView>
    <Text>Follow the instructions in the README file at:</Text>
    <Text
      style={styles.link}
      onPress={() => {
        Linking.openURL(
          'https://github.com/mypthub/rn-code-test/blob/master/README.md',
        );
      }}>
      https://github.com/mypthub/rn-code-test/blob/master/README.md
    </Text>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  link: {
    color: 'blue',
  },
});

export default Info;
