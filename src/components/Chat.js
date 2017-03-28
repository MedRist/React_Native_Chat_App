/*
 * created by MedRist on 3/26/2017. https://github.com/MedRist
 * based on tutorial of Sample react-native App, presented by Farid Safi
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
    Text,
    View,StyleSheet,
} from 'react-native';
import Backend from './Backend';
import { GiftedChat } from 'react-native-gifted-chat';
class Chat extends React.Component {
    state = {
        messages: [],
    };
    componentWillMount() {

    }

    componentDidMount() {
        Backend.loadMessages((message) => {
            this.setState((previousState) => {
                return {
                    messages: GiftedChat.append(previousState.messages, message),
                };
            });
        });
    }
    render() {
        return (
            <View style={ styles.container}>
                <GiftedChat
                    messages={this.state.messages}
                    onSend={(message) => {
            Backend.sendMessage(message);
          }}
                    user={{
            _id: Backend.getUid(),
            name: this.props.name,
          }}
                />
            </View>
        );
    }
    componentWillUnmount() {
        Backend.closeChat();
    }

}
Chat.defaultProps ={
    name :'',
};
Chat.prototypes ={
    name: React.PropTypes.string,
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'gray',
    },
});
export default Chat;
