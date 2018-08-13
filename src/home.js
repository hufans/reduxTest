import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput
} from 'react-native'
import { connect } from 'react-redux';
import { performLoginAction ,add,sub} from './redux/action/loginAction';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            psw: ''
        };
    }

    render() {
        const { dispatch, login } = this.props;
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <View style={{ height: 100, margin: 10 }}>
                    <View style={{ flex: 1 }}>
                        <TextInput
                            style={{ fontSize: 20 }}
                            underlineColorAndroid={'transparent'}
                            placeholder={"帐号"}
                            onChangeText={(username) => this.setState({ username })}
                            value={this.state.username}
                        />
                    </View>
                    <View style={{ height: 1, backgroundColor: '#eee' }} />
                    <View style={{ flex: 1 }}>
                        <TextInput
                            style={{ fontSize: 20 }}
                            underlineColorAndroid={'transparent'}
                            placeholder={"密码"}
                            onChangeText={(psw) => this.setState({ psw })}
                            value={this.state.psw}
                        />
                    </View>
                    <View style={{ height: 1, backgroundColor: '#eee' }} />
                </View>
                <View style={{ margin: 10, alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => {
                        dispatch(performLoginAction(this.state.username, this.state.psw));
                    }}>
                        <Text style={{ fontSize: 30 }}>登录</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ margin: 10, alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => {
                        dispatch(add(2));
                    }}>
                        <Text style={{ fontSize: 30 }}>加法</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ margin: 10, alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => {
                        dispatch(sub(1));
                    }}>
                        <Text style={{ fontSize: 30 }}>减法</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ height: 100, margin: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ height: 30, fontSize: 20, margin: 10 }}>{login.data}</Text>
                </View>
            </View>
        )
            ;
    }
}
function mapStateToProps(state) {
    const { login } = state;
    return {
        login
    }
}
export default connect(mapStateToProps)(App);
