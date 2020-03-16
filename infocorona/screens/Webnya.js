import React, { useRef } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, TextInput, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import AwesomeButton from 'react-native-really-awesome-button/src/themes/red';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import { Modalize } from 'react-native-modalize';

import { MonoText } from '../components/StyledText';
import {
    Card,
    Icon
} from "react-native-elements";

export default class Webnya extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoadingProfil: true,
            isLoading: false,
            confirmed: '',
            recovered: '',
            deaths: '',
            updated: '',
            list_kode: [],
            list_kode1: [],
            negara: 'ID',
            negara1: 'Indonesia'
        };
    }

    async componentDidMount() {


    }


    render() {
        return (
            <WebView
                useWebKit={true}
                style={{ flex: 1 }}
                //injectedJavaScript={`const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=0.5, maximum-scale=0.5, user-scalable=0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); `}
                scalesPageToFit={true}

                domStorageEnabled={true}
                //source={{ html: params.html }}
                source={{ uri: 'https://www.who.int/emergencies/diseases/novel-coronavirus-2019' }}
                originWhitelist={['*']}
                startInLoadingState={true}
                javaScriptEnabled={true}
                renderLoading={() => (<ActivityIndicator size='large'
                />)}
            />
        );
    }
}



const styles = StyleSheet.create({
    item: {
        alignItems: 'flex-start',

        padding: 15,

        borderBottomColor: '#f9f9f9',
        borderBottomWidth: 1,
    },

    item__name: {
        fontSize: 16,

        marginBottom: 5,
    },
    BerandaCardView: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
    },

    MidTextView: {
        padding: 10,
        paddingTop: 15,
    },

    CircleShapeTextView: {
        color: 'white',
        fontSize: 15,
        textAlign: "center",
        fontWeight: 'bold',
    },
    modal__header: {
        paddingVertical: 15,
        marginHorizontal: 15,

        borderBottomColor: '#eee',
        borderBottomWidth: 1,
    },

    modal__headerText: {
        fontSize: 15,
        fontWeight: '200',
    },
    CircleShapeView: {
        padding: 5,
        marginTop: 10,
        marginRight: 5,
        width: 100,
        height: 30,
        borderRadius: 50 / 2,
        backgroundColor: '#ff5959'
    },
    CircleShapeView2: {
        padding: 5,
        marginTop: 10,
        marginRight: 5,

    },
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    developmentModeText: {
        marginBottom: 20,
        color: 'rgba(0,0,0,0.4)',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
    },
    contentContainer: {
    },
    welcomeContainer: {
        marginTop: 0,
        marginBottom: 7,
        padding: 10
    },
    welcomeImage: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10,
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightText: {
        color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    getStartedText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
    },
    tabBarInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: -3 },
                shadowOpacity: 0.1,
                shadowRadius: 3,
            },
            android: {
                elevation: 20,
            },
        }),
        alignItems: 'center',
        backgroundColor: '#fbfbfb',
        paddingVertical: 20,
    },
    tabBarInfoText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
    },
    navigationFilename: {
        marginTop: 5,
    },
    helpContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
    heading: {
        fontSize: 20,

        paddingLeft: 0,
        paddingBottom: 0,
        color: '#484848',
        fontWeight: 'bold',
    },
    heading2: {
        fontSize: 22,
        fontWeight: '600',
        paddingLeft: 20,
        paddingBottom: 0,
        color: '#484848',
    },
    heading1: {
        flexDirection: 'row', flexWrap: 'wrap', borderWidth: 1,
        borderRadius: 20,
        borderColor: 'white',
        backgroundColor: 'white',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        marginBottom: 10,
        padding: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

});
