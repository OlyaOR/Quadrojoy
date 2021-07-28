import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, Image, ScrollView} from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 

export const Catalog = ({dataGoods, filter, navigation}) => {
    let data = [];
    if (filter === 'All') {
        data = dataGoods
    }
    if (filter === 'Cheap') {
        data = dataGoods.filter(item => item.price < 1000)
    }
    if (filter === 'Best') {
        data = dataGoods.filter(item => item.stars > 4)
    }
    if (filter === 'Fast') {
        data = dataGoods.filter(item => item.fast === 'true')
    }
    const open = (id) => {
        navigation.navigate('CartOfGood', {
            idItem: id
          });
    }
    let listGoods = data.map((item, index) => 
    <TouchableHighlight underlayColor="white" key={item.id} onPress={()=>open(item.id)} style={styles.goodsitem}>
        <View >
            <Image style={styles.goodsimg} source={data[index].img}/>
            <View style={styles.goodsinfotext}>
                <Text style={styles.text}>{item.name}{'\n'}{'\n'}{item.price} $</Text>
                <Text><FontAwesome name="star" size={17} color="#F8D62A" />&nbsp;{item.stars}</Text>
            </View>
        </View>
    </TouchableHighlight>);
    return (
    <View style={styles.goods}>
        <Text style={styles.goodstext}>All Quadcopters</Text>
        <ScrollView horizontal>{listGoods}</ScrollView>
    </View>)
}

const styles = StyleSheet.create({
    goods: {
        paddingBottom: 70
    },
    goodstext: {
        fontSize: 20,
        lineHeight: 24,
        marginBottom: 20,
        fontWeight: '700'
    },
    goodsitem: {
        width: 204,
        height: 248,
        marginRight: 15,
        backgroundColor: '#fff',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#E7E7E7'
    },
    goodsinfotext: {
        marginVertical: 27,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    text: {
        color: '#1F1F1F',
        fontSize: 15,
        lineHeight: 15,
        fontWeight: 'bold'
    },
    goodsimg: {
        marginVertical:20,
        width:'100%',
        height: 115
    }
});