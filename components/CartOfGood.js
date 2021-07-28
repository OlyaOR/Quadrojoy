import React, {useState} from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableHighlight, TextInput, Modal} from 'react-native';
import PhoneInput from 'react-phone-number-input/react-native-input';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const CartOfGood = ({route, dataGoods, navigation}) => {
    const {idItem} = route.params;
    const data = dataGoods.filter(item => item.id === idItem);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('+375');
    const [openModal, setOpenModal] = useState(false);
    const onChangeName = (name) => {
        setName(name)
    };
    const onChangePhone = (phone) => {
        
        setPhone(phone)
    };
    const onSubmit =() => {
        setOpenModal(true);
    }
    return (
        <ScrollView>
            <View style={styles.info}>
                <Modal visible={openModal} animationType='slide' transparent>
                    <View style={styles.modal}>
                        <View style={styles.modalinfo}>
                            <MaterialCommunityIcons name="truck-fast-outline" size={100} color="#317AE8" />
                            <Text style={styles.modaltext}>Your order is accepted</Text>
                            <TouchableHighlight underlayColor="white" style={styles.modalbtn} onPress={()=> navigation.navigate('Main')}>
                                <Text style={styles.infobtntext}>Ok</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>
                <Image style={styles.img} source={data[0].img}/>
                <View style={styles.infotext}>
                    <Text style={styles.infotext1}>Ordinary quadcopter</Text>
                    <Text style={styles.infotext2}>{data[0].name}</Text>
                    <Text style={styles.infotext3}>{data[0].price} $</Text>
                    <Text style={styles.infotext4}>The {data[0].name} iconic Hasselblad image quality on Pro and a high-performance zoom lens on Zoom.</Text>
                </View>
                <TextInput style={styles.input} onChangeText={onChangeName} placeholder="Name"
                />
                <PhoneInput maxlength="1" style={styles.input} value={phone} onChange={onChangePhone}/>
                <TouchableHighlight style={styles.infobtn} underlayColor="white" onPress={onSubmit}>
                    <Text style={styles.infobtntext}>Make order</Text>
                </TouchableHighlight>
            </View>
        </ScrollView>
    )
  };

const styles = StyleSheet.create({
    info: {
        marginHorizontal: 20,
        marginBottom: 60
    },
    img: {
        marginVertical: 70,
        width: '100%',
        height:190
    },
    infotext1: {
        color: '#000',
        fontSize: 16,
        lineHeight: 22,
    },
    infotext2: {
        color: '#000',
        fontSize: 28,
        lineHeight: 36,
        marginBottom: 8,
        fontWeight: '700'
    },
    infotext3: {
        color: '#317AE8',
        fontSize: 20,
        lineHeight: 24,
        marginBottom: 12,
        fontWeight: 'bold'
    },
    infotext4: {
        color: '#939399',
        fontSize: 16,
        lineHeight: 22,
    },
    input: {
        width: '100%',
        borderBottomWidth: 1,
        marginTop: 30,
        fontSize: 16,
        lineHeight: 22,
        borderColor: '#939399'
    },
    infobtn: {
        width: '100%',
        height: 46,
        marginVertical: 28,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#317AE8'
    },
    infobtntext: {
        color: '#fff',
        fontSize: 16,
        lineHeight: 22,
        fontWeight: '400'
    },
    modal: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
    },
    modalinfo: {
        width: '85%',
        height: 248,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    modaltext: {
        fontSize: 16,
        lineHeight: 22,
        color: '#939399',
        marginVertical: 20
    },
    modalbtn: {
        width: 146,
        height: 46,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#317AE8'
    }
})