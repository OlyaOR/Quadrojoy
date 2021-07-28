
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View} from 'react-native';
import {Home} from './screens/Home';
import {Like} from './screens/Like';
import {Search} from './screens/Search';
import {Cart} from './screens/Cart';
import { AntDesign} from '@expo/vector-icons';

export default function App() {
  const dataNav = [
    {id: 8, img: "home", content:Home},
    {id: 9, img: "heart", content:Like},
    {id: 10, img: "search1", content:Search},
    {id: 11, img: "shoppingcart", content:Cart}
  ];
  
  const [visibleTab, setVisibleTab] = useState(dataNav[0].id);
  const [content, setContent] = useState(dataNav[0].content);
  const onClick = (item) => {
      setVisibleTab(item.id);
      setContent(item.content);
  };
  const listNav = dataNav.map((item) => 
      <AntDesign name={item.img} key={item.id} size = {24} onPress={() => onClick(item)} color={visibleTab === item.id? '#317AE8' :'#000'} />
  );

  return (
      <View style={styles.container}>
        {content}
        <View style={styles.nav}>{listNav}</View>
        <StatusBar style="auto" />
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#F5F5F5'
  },
  nav: {
    position: 'absolute',
    zIndex: 1,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    elevation: 10,
    backgroundColor: '#fff',
    height: 65,
    width: '100%',
    paddingTop: 15,
  }
});
