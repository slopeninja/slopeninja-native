import React from 'react';
import {
  StyleSheet,
  View,
  TextInput
} from 'react-native';

import CancelIcon from './CancelIcon';
import SearchIcon from './SearchIcon';

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: '#1ED2FF',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    flexDirection: 'row',
  },
  textInput: {
    flex: 1,
    marginLeft: 12,
    color: '#FFFFFF'
  },
  cancelIconContainer: {
    alignSelf: 'center',
  }
});

const SearchBar = (props) => {
  return (
    <View style={styles.searchBar}>
      <View style={styles.searchIconContainer}>
        <SearchIcon />
      </View>
      <TextInput
        style={styles.textInput}
        placeholder='Search Resort'
        placeholderTextColor='#8EE8FF'
        selectionColor='#FFFFFF'
      />
      <View style={styles.cancelIconContainer}>
        <CancelIcon />
      </View>
    </View>
  );
};

export default SearchBar;
