import React, { Component } from 'react'
import { Text, View, Modal, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, TextInput } from 'react-native'

import CommonStyles from '../commonStyles'

const initialState = {
    desc: ''
}

export default class AddTaks extends Component {

    state = {
        ...initialState
    }

    render() {
        return (
            <Modal transparent={true} visible={this.props.isVisible} onRequestClose={this.props.onCancel}
                animationType='slide'>
                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={styles.background}>

                    </View>
                </TouchableWithoutFeedback>
                <View style={styles.container}>
                    <Text style={styles.header}>Nova Tarefa</Text>
                    <TextInput style={styles.input} placeholder=' Informe a descrição'
                        onChangeText={desc => this.setState({ desc })} 
                        value={this.state.desc} />
                    <View style={styles.buttons}>
                        <TouchableOpacity onPress={this.props.onCancel}>
                            <Text style={styles.button}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.button}>Salvar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={styles.background}>

                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
    },
    background: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    header: {
        fontFamily: CommonStyles.fontfamily,
        backgroundColor: CommonStyles.color.today,
        color: CommonStyles.color.secondary,
        textAlign: 'center',
        padding: 15,
        fontSize: 18,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    input: {
        fontFamily: CommonStyles.fontfamily,
        height: 40,
        margin: 15,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#E3E3E3',
        borderRadius: 6,

    },
    button: {
        margin: 20,
        marginRight: 30,
        color: CommonStyles.color.today,
    }
})