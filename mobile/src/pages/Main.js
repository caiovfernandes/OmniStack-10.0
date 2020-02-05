import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import MapView, { Marker, Callout }  from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';

function Main() {

    const [ currentRegion, setCurrentRegion] = useState(null);

    useEffect(() => {
        async function loadInitialPosition() {
            const { granted } = await requestPermissionsAsync();

            if (granted) {
                const { coords } = await getCurrentPositionAsync({
                    enableHighAccuracy: true
                });
                const { latitude, longitude } = coords;

                setCurrentRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.04
                })
            }
        }

        loadInitialPosition();
    }, []);

    if(!currentRegion){
        return null;
    }

    return (
        <MapView initialRegion={ currentRegion } style= { styles.map }>
            <Marker coordinate= {{ latitude:-15.9981568, longitude:-48.0509952 }} >
                <Image style={styles.avatar} source={{ uri: 'https://avatars2.githubusercontent.com/u/42192251?s=460&v=4' }}/>
                
                <Callout>
                    <View style={styles.callout}>
                        <Text style={styles.devName}>Caio Fernandes</Text>
                        <Text style={styles.devBio}> Software Engineering Student at UnB - Universidade de Brasília, Brazil </Text>
                        <Text style={styles.Techs}>Java, Python, ReactJS, RectNative</Text>
                    </View>
                </Callout>
            </Marker>
        </MapView>
    );
}

const styles = StyleSheet.create({
    map:{
        flex: 1
    },
    avatar: {
        width: 40,
        height:40,
        borderRadius: 4,
        borderWidth: 4,
        borderColor: '#FFF'
        
    },
    callout:{
        width: 260,
    },
    devName:{
        fontWeight: 'bold',
        fontSize: 16
    },
    devBio:{
        color: '#666',
        marginTop: 5
    },
    devTechs:{
        marginTop: 5
    }
})

export default Main;