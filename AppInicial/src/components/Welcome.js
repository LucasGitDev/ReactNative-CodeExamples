import React, { Component } from 'react'
import { Text, View, TouchableOpacity} from 'react-native'

import styles from '../styles/index'

export default class Welcome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>
          {this.props.titulo}
        </Text>
        <Text style={styles.slogan}>
          {this.props.slogan}
        </Text>
      </View>
    )
  }
}

