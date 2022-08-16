import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  icon: {
    marginTop: 10,
    height: Dimensions.get('window').height / 7,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  box: {
    height: 60,
    width: 80,
    margin: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E7E2EA',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 10,
  },
  iconImage: {
    height: 40,
    width: 40,
  },
  signUp: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  signUpText: {color: '#00B1C9'},
  copyright: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
