// home.js
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { activateKabaya, closeKabaya, addActive, subActive } from './redux';

export class Home extends Component {

    gettitle() {
        return (<Button
            onPress={this.props.closeKabaya}
            title="Click me"
            color="#841584"
        />)
    }
    getNothing() {
        return (<Button
            onPress={() => this.props.activateKabaya({ title: '私の名前はカバヤです' })}
            title="Click me"
            color="black"
            accessibilityLabel="Learn more about this purple button"
        />)
    }

    getDoubleButton() {
        return (
            <view>
                <Button title="add " onPress={() => this.props.addActive} />
                <Button title="sub" onPress={() => this.props.subActive} />
            </view>)
    }

    render() {
        return (
            <View>
                <Text style={{ marginTop: 200 }}>
                    {this.props.kabaya.title || '成功!'}
                </Text>
                {/* <Text style={{ marginTop: 300 }}>
                    {this.props.number.num || '成功!'}
                </Text> */}
                {this.props.kabaya.title ? this.gettitle() : this.getNothing()}
                <Text>{this.props.number}</Text>
            </View>
        );
    }
}

//绑定数据 
const mapStateToProps = (state) => ({
    kabaya: state.kabayaRe,
    number: state.ADDReducers,
});

//绑定两个动作action
const mapDispatchToProps = {
    activateKabaya,
    closeKabaya,
    addActive,
    subActive,
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default AppContainer;
