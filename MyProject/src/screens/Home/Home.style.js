import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 10,
    backgroundColor: 'white',
  },
  bar: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rightside: {
    height: 60,
    alignItems: 'center',
    flexDirection: 'column-reverse',
    marginRight: 10,
  },
  leftside: {
    marginLeft: 10,
  },
  barText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  image: {
    width: 120,
    height: 40.5,
    marginTop: 20,
  },
  searchBar: {
    marginHorizontal: 10,
  },
  flatList: {
    marginLeft: 10,
  },
});

export default styles;
