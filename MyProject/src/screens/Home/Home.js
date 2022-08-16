import * as React from 'react';
import {useState} from 'react';
import styles from './Home.style';
import {View, Text, Image, FlatList, Switch} from 'react-native';
import Products from '../../data/Products.json';
import Card from '../../components/Card/Card';
import SearchBar from '../../components/SearchBar/SearchBar';

const HomeScreen = ({navigation}) => {
  const handleSelect = () => {
    navigation.navigate('Details');
  };
  const renderProducts = ({item}) => (
    <Card product={item} onSelect={handleSelect} />
  );
  const [productList, setProductList] = useState(Products);
  const [Stock, setStock] = useState(false);
  const [text, setText] = useState('Tüm Ürünler');
  const [textColor, setTextColor] = useState('black');

  const onStockChange = React.useCallback(
    isStockSelected => {
      setStock(isStockSelected);
      isStockSelected
        ? (setProductList(productList.filter(a => a.inStock)),
          setTextColor('red'),
          setText('Stokta Olanlar'))
        : (setProductList(Products),
          setTextColor('black'),
          setText('Tüm Ürünler'));
    },
    [productList],
  );

  const handleSearch = inputText => {
    const filteredList = Products.filter(b => {
      const searchedText = inputText.toLowerCase();
      const currentTitle = b.title.toLowerCase();

      return currentTitle.indexOf(searchedText) === 0;
    });
    setProductList(filteredList);
  };

  return (
    <View style={styles.container}>
      <View style={styles.bar}>
        <View style={styles.rightside}>
          <Text style={(styles.barText, {color: textColor})}>{text}</Text>
          <Switch value={Stock} onValueChange={onStockChange} />
        </View>
        <View style={styles.leftside}>
          <Image
            source={require('../../assets/Image/tr.png')}
            style={styles.image}
          />
        </View>
      </View>
      <View style={styles.searchBar}>
        <SearchBar onSearch={handleSearch} placeholder={'Ara...'} />
      </View>

      <FlatList
        renderItem={renderProducts}
        data={productList}
        numColumns={2}
        keyExtractor={item => item.u_id.toString()}
        style={styles.flatList}
      />
    </View>
  );
};

export default HomeScreen;
