import React from 'react';
import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    results: {

        backgroundColor: "#282f3b",
        width: '100%',
        minHeight: 180,
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    resultText: {
        color: "#fff",
        margin: 10,
        fontSize: 40
    },

    historyText: {
        color: "white",
        fontSize: 20,
        marginRight: 10,
        alignSelf: 'flex-end',
    },
    themeButton: {
        alignSelf: 'flex-start',
        position: "absolute",
        top: 10,
        margin: 10,
        backgroundColor: "#e5e5e5",
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: 25,

    },
    buttons: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    button: {
        borderColor: "#e5e5e5",
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 90,
        minHeight: 90,
        flex: 2,
    },
    textButton: {
        color: "#7c7c7c",
        fontSize: 20,
    },
});