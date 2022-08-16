import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#E7E2EA', //#F5F1F2
  },
  image: {
    width: 370,
    height: Dimensions.get('window').height / 2,
    backgroundColor: 'red',
    borderRadius: 40,
    shadowColor: 'orange',
    textShadowOffset: {width: 20, height: 30},
  },
  textCard: {
    height: Dimensions.get('window').height / 5,
    marginTop: 50,
    alignItems: 'center',
  },
  mainTextCard: {
    alignItems: 'center',
    marginBottom: 20,
  },
  mainText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#373248',
  },
  contentTextCard: {
    padding: 15,
  },
  contentText: {
    fontSize: 20,
    color: '#9795A4',
    fontWeight: 'bold',
  },
  buttonCard: {
    margin: 50,
    flexDirection: 'row',
  },
  buttonKayıt: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    height: 50,
    width: 160,
    borderRadius: 20,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  buttonGiris: {
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    height: 50,
    width: 160,
    borderRadius: 20,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
});

export default styles;
