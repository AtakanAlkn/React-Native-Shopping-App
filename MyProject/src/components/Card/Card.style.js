import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {flex: 1},
  box: {
    backgroundColor: '#ECEFF1',
    padding: 10,
    marginTop: 10,
    borderRadius: 8,
    minHeight: 300,
    marginRight: 10,
  },
  image: {
    height: Dimensions.get('window').height / 4,
    resizeMode: 'contain',
    borderRadius: 8,
  },
  textbox: {
    marginTop: 10,
  },
  title: {color: 'black', fontWeight: 'bold', fontsize: '30'},
  price: {},
  stock: {
    color: 'red',
    fontWeight: 'bold',
  },
});
