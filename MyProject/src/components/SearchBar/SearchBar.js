import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './SearchBar.style';

const SearchBar = props => {
  return (
    <View>
      <TextInput
        placeholder={props.placeholder}
        style={styles.input}
        onChangeText={props.onSearch}
      />
    </View>
  );
};

export default SearchBar;
