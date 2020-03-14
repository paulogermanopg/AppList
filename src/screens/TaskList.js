import React, { Component } from 'react'
import { View, Text, ImageBackground, StyleSheet, FlatList, TouchableOpacity, Platform } from 'react-native'

import Task from '../components/Task'
import CommonStyles from '../commonStyles'
import * as Font from 'expo-font'
import todayImage from '../../assets/imgs/today.jpg'

import moment from 'moment'
import 'moment/locale/pt-br'

import Icon from 'react-native-vector-icons/FontAwesome'

export default class TaskList extends Component {
    //Usar font personalizada no expo = importar import * as Font from 'expo-font'
    state = {
        showDoneTasks: true,
        visibleeTask: [],
        tasks: [{
            id: Math.random(),
            desc: 'compra um livro',
            estimateAt: new Date(),
            doneAt: new Date(),
        }, {
            id: Math.random(),
            desc: 'ler um livro',
            estimateAt: new Date(),
            doneAt: null,
        }, ],
        loading: true
    }
    async componentDidMount() {
        await Font.loadAsync({
          'Lato': require('../../assets/fonts/TravelingTypewriter.ttf'),
        })
        this.setState({ loading: false })
        this.filterTasks()
    }
    //acaba aqui

    // componentDidMount = () => {
    //     this.filterTasks()
    // }

    toggleFilter = () => {
        this.setState({ showDoneTasks: !this.state.showDoneTasks }, this.filterTasks)
    }

    filterTasks = () => {
        let visibleeTask = null
        if (this.state.showDoneTasks) {
            visibleeTask = [...this.state.tasks]
        } else {
            const pedding = task => task.doneAt === null 
            visibleeTask = this.state.tasks.filter(pedding)
        }

        this.setState({ visibleeTask })
    }

    toggleTask = taskId => {
        const tasks = [...this.state.tasks]
        tasks.forEach(task => {
            if(task.id === taskId) {
                task.doneAt = task.doneAt ? null : new Date()
            }
        })

        this.setState({ tasks }, this.filterTasks)
    }

    render() {
        //isso também
        if (this.state.loading) {
            return (
              <View></View>
            );
        }
        //aqui
        const today = moment().locale('pt-br').format('ddd, D [de] MMMM')
        return (
            <View style={styles.container}>
                <ImageBackground source={todayImage} style={styles.background}>
                    <View style={styles.iconBar}>
                        <TouchableOpacity onPress={this.toggleFilter}>
                            <Icon name={this.state.showDoneTasks ? 'eye' : 'eye-slash'}
                                size={20} color={CommonStyles.color.secondary} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>Hoje</Text>
                        <Text style={styles.subtitle}>{today}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.taskList}>
                    <FlatList data={this.state.visibleeTask}
                        keyExtractor={item => `${item.id}`}
                        renderItem={({item}) => <Task {...item} toggleTask={this.toggleTask} />} />
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 3,
    },
    taskList: {
        flex: 7,
    },
    titleBar: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    title: {
        fontFamily: CommonStyles.fontfamily,
        color: CommonStyles.color.secondary,
        fontSize: 50,
        marginLeft: 20,
        marginBottom: 20,
    },
    subtitle: {
        fontFamily: CommonStyles.fontfamily,
        color: CommonStyles.color.secondary,
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 30,
    },
    iconBar: {
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'flex-end',
        marginTop: Platform.OS === 'ios' ? 40 : 40,
    }
})