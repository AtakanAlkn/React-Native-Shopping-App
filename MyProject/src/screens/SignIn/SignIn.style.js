import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#E7E2EA', // #F5F2F2
  },
  textCard: {
    height: Dimensions.get('window').height / 6,
    marginTop: 20,
  },
  mainTextCard: {
    alignItems: 'center',
  },
  mainText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#373248',
  },
  contentTextCard: {
    alignItems: 'center',
    marginTop: 20,
  },
  contentText: {
    fontSize: 20,
    color: '#9795A4',
    fontWeight: 'bold',
  },
  registerCard: {
    marginTop: 10,
    height: Dimensions.get('window').height / 2,
  },
  inputCard: {},
  input: {
    height: 50,
    margin: 12,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#F2F0F8',
  },
  forgotCard: {
    marginTop: 5,
    marginBottom: 40,
    marginRight: 12,
    alignItems: 'flex-end',
  },
  forgot: {},
  button: {
    height: 50,
    margin: 12,
    borderRadius: 10,
    backgroundColor: '#FD6B68',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {fontWeight: 'bold', color: 'white', fontSize: 20},
  continue: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginHorizontal: 40,
  },
  or: {},
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
