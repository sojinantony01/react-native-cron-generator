import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Text,TouchableOpacity } from 'react-native';
import StartTime from './startTime';
import { objectExpression } from '@babel/types';

export default class Cron extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value:[]
        };
        this.onHourChange = this.onHourChange.bind(this);
        this.onAtHourChange = this.onAtHourChange.bind(this);
        this.onAtMinuteChange = this.onAtMinuteChange.bind(this);
    }
    componentWillMount() {
        this.state.value = this.props.value;
        if(this.state.value[2].split('/')[1] || this.state.value[2] === '*') {
            this.state.every = true;
        }
    }
    onHourChange(e) {
        if(((e > 0 && e < 24) || e == '')) {
            let val = ['0','0','*','*','*','?','*'];
            if(e == '') {
                val[2] = '';
            } else {
                val[2] = `0/${e}`;
            }
            val[3] = '1/1';
            this.props.onChange(val)
        } 
    }
    onAtHourChange(e) {
        let val = ['0',this.state.value[1],'*','*','*','?','*']
        val[2] = `${e}`;
        val[3] = '1/1'
        this.props.onChange(val)
    }
    onAtMinuteChange(e) {
        let val = ['0','*',this.state.value[2],'*','*','?','*']
        val[1] = `${e}`;
        val[3] = '1/1'
        this.props.onChange(val)
    }


    render() {
        this.state.value = this.props.value
        return (   
            <View >              
               
                <TouchableOpacity style={Object.assign({}, styles.schedule ,this.state.every ? styles.selectedSchedule : styles.nonSelected) } onPress={(e) => {if(!this.state.every) {this.setState({every:true}) ; this.props.onChange(['0','0','0/1','1/1','*','?','*'])}}} >
                   
                    <Text >  Every </Text>
                    <TextInput 
                        style={{height: 40, borderColor: 'gray', borderWidth: 1, width:100}}
                        keyboardType='numeric'
                        onChangeText={this.onHourChange}
                        value={this.state.value[2].split('/')[1] ? this.state.value[2].split('/')[1] : ''}
                        editable={this.state.every ? true: false}
                        maxLength={2}  //setting limit of input
                        />
                    <Text >   hour(s)   </Text>
                </TouchableOpacity>
                <TouchableOpacity style={Object.assign({}, styles.schedule ,!this.state.every ? styles.selectedSchedule : styles.nonSelected)} onPress={(e) => {if(this.state.every) {this.setState({every:false});  this.props.onChange()}}} >
                    <StartTime  minValue={this.state.value[1]} hrValue={this.state.value[2]} disabled={this.state.every ? true: false}  onAtHourChange={this.onAtHourChange} onAtMinuteChange={this.onAtMinuteChange} />
                
                </TouchableOpacity>
            </View>
        )
    }


}
const styles = StyleSheet.create({
    textInput: {
      flex: 1,
    },

    selectedSchedule: {
        backgroundColor:'white',
        borderColor:'blue',
        borderWidth:1
    },
    schedule : {
        height:70,
        width:'100%',
        flexDirection:'row',
        elevation:2,
        padding:20,
        alignSelf:'center',
        alignContent:'center',
        alignItems:'center'
    },
    nonSelected: {
        backgroundColor:'#ddd',
    }

});
