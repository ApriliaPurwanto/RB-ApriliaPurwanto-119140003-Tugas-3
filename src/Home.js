import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    Button,
    ScrollView,
} from 'react-native';
import {
    Icon
} from 'react-native-elements';
import styles from '../style/HomeStyle';

const Home = ({navigation}) => {

    const [Berangkat, onChangeBerangkat] = React.useState('');
    const [Tujuan, onChangeTujuan] = React.useState(null);
    const [Tanggal, onChangeTanggal] = React.useState(null);

    const Search = () =>{
        navigation.navigate('Result',{
            Berangkat : Berangkat,
            Tujuan : Tujuan,
            Tanggal: Tanggal,
        })
    }
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.header}>
                    <Icon
                        name='menu'
                        size={30}
                        color='white'
                    />
                        <Icon
                        name='account-circle'
                        size={30}
                        color='white'
                    />
                </View>
                <View style={styles.background}>
                    <Text style={styles.title}>Hiling.id</Text>
                    <View style={styles.box}>
                        <Text style={styles.text}>Lokasi Keberangkatan</Text>
                        <TextInput style={styles.TextInput}
                            onChangeText={onChangeBerangkat}
                            value={Berangkat}
                            placeholder='Masukan lokasi keberangkatan'/>
                        <Text style={styles.text}>Lokasi Tujuan</Text>
                        <TextInput style={styles.TextInput}
                            onChangeText={onChangeTujuan}
                            value={Tujuan}
                            placeholder='Masukan lokasi tujuan'/>
                        <Text style={styles.text}>Tanggal Keberangkatan</Text>
                        <TextInput style={styles.TextInput}
                            onChangeText={onChangeTanggal}
                            value={Tanggal}
                            placeholder='YYYY-MM-DD'/>
                        <View style={styles.cari}>
                            <Button
                                title="Cari "
                                color="#FF7F50"
                                onPress={Search}
                            />
                        </View>
                    </View>
                <View>
                    <Text style={styles.copyright}>Copyright Aprilia Purwanto-119140003</Text>
                </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;