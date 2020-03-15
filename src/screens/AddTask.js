import React, { Component } from 'react'
import { Text, View, Modal, StyleSheet, TouchableWithoutFeedback } from 'react-native'

import CommonStyles from '../commonStyles'

export default class AddTaks extends Component {
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
        flex: 1,
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
    }
})