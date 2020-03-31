import React, { Component } from 'react'
import { View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

import backgroundImage from '../../assets/imgs/login.jpg'
import CommonStyles from '../commonStyles'

import * as Font from 'expo-font'


export default class Auth extends Component {
    //font ara expo
    state = {
        email: '',
        password: '',
        loading: true
    }
    async componentDidMount() {
        await Font.loadAsync({
          'Lato': require('../../assets/fonts/TravelingTypewriter.ttf'),
        })
        this.setState({ loading: false })
    }
    //acaba aqui

    render() {
        //isso também
        if (this.state.loading) {
            return (
              <View></View>
            );
        }
        //acaba aqui
        return (
            <ImageBackground source={backgroundImage} style={styles.background}>
                <Text style={styles.title}>App-List</Text>
                <View style={styles.formContainer}>
                    <TextInput placeholder='Email' value={this.state.email} style={styles.input} 
                        onChangeText={email => this.setState( email )} />
                    <TextInput placeholder='Senha' value={this.state.password} style={styles.input} 
                        onChangeText={password => this.setState( password )} />
                    <TouchableOpacity>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Entrar</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontFamily: CommonStyles.fontfamily,
        color: CommonStyles.color.secondary,
        fontSize: 70,
        marginBottom: 10,
    },
    formContainer: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        padding: 20,
        width: '90%',
    },
    input: {
        marginTop: 10,
        backgroundColor: '#FFF',
        padding: 12,
    },
    button: {
        backgroundColor: '#080',
        marginTop: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontFamily: CommonStyles.fontfamily,
        color: '#FFF',
        fontSize: 20,
    },
})