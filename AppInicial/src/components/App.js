import React, {Component} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

//import Welcome from './Welcome'
import styles from '../styles/index'

export default class App extends Component{
  state = {
    slogan: 'Eu criando e sendo criativo'
  }

  alternar = () => {
    this.setState({
      slogan: this.state.slogan ? '' : 'Eu criando e sendo criativo'
    })
  }

  render() {
    return (
      <View style={styles.container}>

        <TouchableOpacity
        style={styles.button}
        onPress={this.alternar}>
          <Text>Mudar state</Text>
        </TouchableOpacity>
        <Text style={styles.titulo}>
          Tusca Leles
        </Text>
        <Text style={styles.slogan}>
          {this.state.slogan}
        </Text>
      </View>
    )
  }
}
