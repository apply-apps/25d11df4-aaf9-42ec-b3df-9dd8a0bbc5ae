// Filename: index.js
// Combined code from all files

import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Button, ScrollView, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
    return (
        <SafeAreaView style={stylesHome.container}>
            <Text style={stylesHome.title}>Choose a Tale</Text>
            <View style={stylesHome.buttonContainer}>
                <Button title="Tale 1" onPress={() => navigation.navigate('Tale1')} />
                <Button title="Tale 2" onPress={() => navigation.navigate('Tale2')} />
                <Button title="Tale 3" onPress={() => navigation.navigate('Tale3')} />
            </View>
        </SafeAreaView>
    );
}

const stylesHome = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    buttonContainer: {
        width: '80%',
        justifyContent: 'space-around',
        height: 120,
    },
});

function Tale1() {
    return (
        <SafeAreaView style={stylesTale.container}>
            <ScrollView style={stylesTale.scrollView}>
                <Text style={stylesTale.title}>Tale 1: The Brave Little Tailor</Text>
                <Image
                    source={{ uri: 'https://picsum.photos/400/200' }}
                    style={stylesTale.image}
                />
                <Text style={stylesTale.text}>
                    Once upon a time, there was a little tailor who sewed and stitched all day long in his workshop...
                </Text>
                {/* Rest of the tale content */}
            </ScrollView>
        </SafeAreaView>
    );
}

function Tale2() {
    return (
        <SafeAreaView style={stylesTale.container}>
            <ScrollView style={stylesTale.scrollView}>
                <Text style={stylesTale.title}>Tale 2: Jack and the Beanstalk</Text>
                <Image
                    source={{ uri: 'https://picsum.photos/400/200' }}
                    style={stylesTale.image}
                />
                <Text style={stylesTale.text}>
                    Once upon a time, there was a poor boy named Jack who lived with his mother. One day, he sold their cow for some magic beans...
                </Text>
                {/* Rest of the tale content */}
            </ScrollView>
        </SafeAreaView>
    );
}

function Tale3() {
    return (
        <SafeAreaView style={stylesTale.container}>
            <ScrollView style={stylesTale.scrollView}>
                <Text style={stylesTale.title}>Tale 3: Cinderella</Text>
                <Image
                    source={{ uri: 'https://picsum.photos/400/200' }}
                    style={stylesTale.image}
                />
                <Text style={stylesTale.text}>
                    Once upon a time, there was a kind girl named Cinderella who lived with her wicked stepmother and stepsisters...
                </Text>
                {/* Rest of the tale content */}
            </ScrollView>
        </SafeAreaView>
    );
}

const stylesTale = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollView: {
        padding: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 20,
        borderRadius: 10,
    },
    text: {
        fontSize: 16,
        lineHeight: 24,
    },
});

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Tale1" component={Tale1} />
                <Stack.Screen name="Tale2" component={Tale2} />
                <Stack.Screen name="Tale3" component={Tale3} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}