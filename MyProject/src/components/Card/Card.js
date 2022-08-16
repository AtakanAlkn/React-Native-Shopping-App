import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import styles from './Card.style';

const Card = ({product, onSelect}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onSelect}>
        <View style={styles.box}>
          <View>
            <Image style={styles.image} source={{uri: product.imgURL}} />
          </View>
          <View style={styles.textbox}>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.price}>{product.price}</Text>
            {product.inStock === false ? (
              <Text style={styles.stock}>STOKTA YOK</Text>
            ) : null}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
