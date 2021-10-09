import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './Card.style';

const Card = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image style={styles.image} source={{uri: item.imgURL}} />
      </View>
      <View >
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <Text style={styles.stock}>{item.inStock ? "" : "STOKTA YOK"}</Text>
      </View>
    </View>
  );
};

export default Card;