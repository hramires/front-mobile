import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';
import useFetch from '../../hooks/use-fetch';
import LocalCard from '../../components/LocalCard';

export default function HomePage({ header }) {
    const navigation = useNavigation();
    const [places, placesLoading, placesError] = useFetch('places');
    //const [regions, regionsLoading, regionsError] = useFetch("regions");
    //const [routes, routesLoading, routesError] = useFetch("routes");
    //const [events, eventsLoading, eventsError] = useFetch("events");
    //const [categories, categoriesLoading, categoriesError] = useFetch("categories");

    const handleViewMore = () => {
        // Navigate to the Places page
        navigation.navigate('LocalList');
    };

    return (
        <View>
            <Text
                style={{ fontSize: 24, fontWeight: 'bold', marginVertical: 16 }}
            >
                Locais
            </Text>
            {placesLoading && <Text>Loading...</Text>}
            {placesError && <Text>Error: {placesError}</Text>}
            {places?.length > 0 && (
                <FlatList
                    data={places}
                    horizontal={true}
                    renderItem={({ item }) => (
                        <>
                            <LocalCard
                                title={item.name}
                                description={item.description}
                                onPress={handleViewMore}
                            />
                            <LocalCard />
                        </>
                    )}
                />
            )}

            <TouchableOpacity onPress={handleViewMore}>
                <Text
                    style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                        marginVertical: 16,
                    }}
                >
                    Ver tudo
                </Text>
            </TouchableOpacity>
        </View>
    );
}
