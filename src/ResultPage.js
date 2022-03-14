import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    Button,
    StatusBar,
    ScrollView,
    FlatList,
    Image
} from 'react-native';
import {
    Card,
    Icon
} from 'react-native-elements';
import styles from './ResultStyle';
import {MASKAPAI, BANDARA, JADWAL} from './Data';
import { useRoute } from '@react-navigation/native';

const ResultPage = ({navigation}) => {
    const route = useRoute();

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.header}>
                    <Icon
                        size={30}
                        name='arrow-back'
                        color='white'
                    onPress={() => navigation.goBack()}
                    />
                    <Icon
                        size={30}
                        name='account-circle'
                        color='white'/>
                </View>
                <View style={styles.title}>
                    <Text style={styles.textTitle}> Hiling.id</Text>
                    <Text style={styles.text}>Hasil Pencarian Penerbangan</Text>
                    <Text style={styles.text}> (Tanggal Keberangkatan)</Text>
                </View>
                <View>
                    <SearchData/>
                </View>
                <View>
                    <Text style={styles.copyright}>Copyright Aprilia Purwanto-119140003</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );

    function NotFound(){
        return(
            <Card>
                <View style={styles.notfound}>
                    <Image source={require('../image/notfound.png')} style={{ width: 30, height: 30 }}/>
                </View>
                <View style={styles.notfound}>
                    <Text> Result Not Found</Text>
                </View>
                <View style={styles.notfound}>
                    <Text> Recheck the location or date departure</Text>
                </View>
            </Card>
        );
    }

    function SearchData(){        
        if(route.params.Berangkat === '' || route.params.Tujuan === '' || route.params.Tanggal === ''){
                return NotFound();
            } else {
                const BerangkatID = BANDARA.find(id => id.bandara_nama.toLowerCase() === route.params.Berangkat.toLowerCase()).bandara_id;
                const TujuanID = BANDARA.find(id => id.bandara_nama.toLowerCase() === route.params.Tujuan.toLowerCase()).bandara_id;
                const Hasil = JADWAL.filter(id => id.bandara_id_keberangkatan.toLowerCase() === BerangkatID.toLowerCase() && id.bandara_id_kedatangan.toLowerCase() === TujuanID.toLowerCase() && id.tanggal === route.params.Tanggal.toLowerCase());
    
                let findAll = (Hasil.length >= 1) ? DataFound(Hasil) : NotFound() ;
    
                return findAll;
            }
        
    }
}


function DataFound (Hasil){
    return (
        
        <FlatList
            data = {Hasil}
            renderItem={({item}) => (
                <Card>
                <View style={styles.card}>
                    <Text style={styles.flexView}> {BANDARA.find(sub => sub.bandara_id == item.bandara_id_keberangkatan).bandara_nama}</Text>
                    <Text style={styles.flexView}> {BANDARA.find(sub => sub.bandara_id === item.bandara_id_kedatangan).bandara_nama} </Text>
                </View>
                <View style={styles.card}>
                    <View style={styles.flexdetail}>
                        <Image source={MASKAPAI.find(sub => sub.maskapai_id === item.maskapai_id).maskapai_logo} style={{ width: 70, height: 60 }}/>
                        <Text style={styles.flexView}> {MASKAPAI.find(sub => sub.maskapai_id === item.maskapai_id).maskapai_nama}</Text>
                    </View>
                    <View style={styles.flexView}>
                        <Text style={styles.flexView}> {JADWAL.find(sub => sub.jadwal_id === item.jadwal_id).tanggal} </Text>
                    </View>
                </View>
            </Card>
            )}
            keyExtractor={item => item.jadwal_id}
        />
    );
};

export default ResultPage;