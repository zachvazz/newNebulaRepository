import SearchBar from "react-native-dynamic-search-bar"

<SearchBar
   onPressToFocus
   autoFocus={false}
   fontColor="#c6c6c6"
   iconColor="#c6c6c6"
   shadowColor="#282828"
   cancelIconColor="#c6c6c6"
   backgroundColor="#353d5e"
   placeholder="Search here"
   onChangeText={text => {
     this.filterList(text);
   }}
   onPressCancel={() => {
     this.filterList("");
   }}
   onPress={() => alert("onPress")}
 />