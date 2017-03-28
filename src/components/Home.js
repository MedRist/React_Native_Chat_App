/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {

  StyleSheet,
  Text,
  View,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import {
    Actions,
}from 'react-native-router-flux';
class Home extends React.Component {
    state ={
        name: '',
    }
  render() {
    return (
      <View>
        <Text style={styles.title}>
          Enter Your Name:
        </Text>
          <TextInput
           style={styles.nameInput}
            placeholder="Mohamed"
            onChangeText={(text)=>{
             this.setState({
                 name:text,
             });            }
             }
           value={this.state.name}/>
          <TouchableOpacity onPress={ ()=>{
             Actions.chat({
                name: this.state.name,
             });
          }
          }
          >
           <Text style={styles.buttonStyle}>
               Go On
           </Text>
          </TouchableOpacity>
      </View>
    );
  }
}

var styles=StyleSheet.create({
    title:{
        marginLeft:20,
        marginTop:20,
        fontSize:20,

    },
    nameInput:{
        height:40,
        borderWidth:1,
        borderColor:'black',
        margin:20,


    },
    buttonStyle:{
        marginLeft:20,
        margin:20,

    },
})
export default Home;
