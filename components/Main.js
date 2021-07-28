import React, {useState}  from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, ScrollView} from 'react-native';
import { Catalog } from './Catalog';

export const Main = ({title, dataBtns, dataGoods, navigation}) => {
    const [visibleTab, setVisibleTab] = useState(dataBtns[0].id);
    const [filter, setFilter] = useState(dataBtns[0].label)
    const onClick = (item) => {
        setVisibleTab(item.id),
        setFilter(item.label)
    }
    const listBtns = dataBtns.map((item) => 
        <TouchableHighlight key={item.id} underlayColor="white" onPress={() => onClick(item)}>
            <View style={visibleTab === item.id? styles.btnActive :styles.btnsItem}>
                <Text style={visibleTab === item.id? styles.btnTextActive :styles.btnText}>{item.label}</Text>
            </View>
        </TouchableHighlight>
    );
    
    return (
    <View style={styles.container}>
        <ScrollView>
            <View style={styles.start}>
                <Text style={styles.text}>{title}</Text>
                <View style={styles.menu}>
                    <View style={styles.menuitem1}></View>
                    <View style={styles.menuitem2}></View>
                    <View style={styles.menuitem3}></View>
                </View>
            </View>
            <View style={styles.main}>
                <View style={styles.maintext}>
                    <Text style={styles.maintext1}>Need for Speed</Text>
                    <Text style={styles.maintext2}>UdoDron 3 Pro</Text>
                    <Text style={styles.maintext3}>1984 $</Text>
                </View>
                <Image source={require('../assets/quadcopter.png')} style={styles.mainimg}/>
            </View>
            <View style={styles.btns}>{listBtns}</View>
            <Catalog dataGoods={dataGoods} filter={filter} navigation={navigation}/>   
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    start: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 22,
    },
    text: {
        color: '#1F1F1F',
        fontSize: 26,
        lineHeight: 32,
        fontWeight: '700'
    },
    menu: {
        width: 25,
        height: 20,
        justifyContent: 'space-around',
        alignItems: 'flex-end',
    },
    menuitem1: {
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        width: 25,
        height: 3,
        backgroundColor: '#000',
    },
    menuitem2: {
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        width: 17,
        height: 3,
        backgroundColor: '#000',
    },
    menuitem3: {
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        width: 10,
        height: 3,
        backgroundColor: '#000',
    },
    main: {
        height: 164,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: '#317AE8'
    },
    maintext: {
        paddingLeft:20,
        paddingTop:70,
    },
    maintext1: {
        color: '#fff',
        fontSize: 14,
        lineHeight: 17,
    },
    maintext2: {
        color: '#fff',
        fontSize: 24,
        lineHeight: 32,
        fontWeight: '700'
    },
    maintext3: {
        color: '#fff',
        fontSize: 20,
        lineHeight: 24,
    },
    mainimg: {
        position: 'absolute',
        top: 10,
        left: 100,
        width: 233,
        height: 164
    },
    btns: {
        marginTop: 32,
        marginBottom: 28,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    btnsItem: {
        width: 70,
        height: 46,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#E7E7E7',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        paddingVertical: 12,
    },
    btnText: {
        color: '#1F1F1F'
    },
    btnTextActive: {
        color: '#fff'
    },
    btnActive: {
        width: 70,
        height: 46,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        paddingVertical: 12,
        color: '#fff',
        backgroundColor: '#317AE8'
    },
    goods: {
        paddingBottom: 70
    },
    goodstext: {
        fontSize: 20,
        lineHeight: 24,
        marginBottom: 20
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
        color: '#1F1F1F',
        fontSize: 14,
        lineHeight: 17,
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    goodsimg: {
        width: 200,
        height:150
    }
});