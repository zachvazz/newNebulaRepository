import { SearchBar } from 'react-native-elements';
import React, { Component } from "react";
import { View, FlatList, Text, TouchableOpacity } from "react-native"
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

export default class Searchscreen extends Component {
  state = {
    filteredList: [],
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <View style={{ flex: 1, padding: 10, backgroundColor: 'gray' }}><SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
      />     <View> <FlatList
        data={DATA}
        renderItem={(item) => { return this.Item(item) }}
      /></View>
      </View>

    );
  }
  Item = (item) => {
    return (
      <View
        style={{
          height: 50, width: 200,
          backgroundColor: '#6e3b6e',
        }}
      >
      </View >
    );
  }

}