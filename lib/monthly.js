import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Text,TouchableOpacity } from 'react-native';
import StartTime from './startTime';


export default class Cron extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hour:0,
            minute:0
        };

        this.onDayChange = this.onDayChange.bind(this);
        this.onLastDayChange = this.onLastDayChange.bind(this);
        this.onAtHourChange = this.onAtHourChange.bind(this);
        this.onAtMinuteChange = this.onAtMinuteChange.bind(this);
    }
    componentWillMount() {
        this.state.value = this.props.value;
        if(this.state.value[3] === 'L'){
            this.state.every = "2";
        }else if(this.state.value[3] === 'LW') {
            this.state.every = "3";
        }else if(this.state.value[3].startsWith('L')) {
            this.state.every = "4";
        } else {
            this.state.every = "1";
        }
    }
    onDayChange(e) {
        if(((parseInt(e) > 0 && parseInt(e) <= 31)) || e == "") {
            let val = ['0',this.state.value[1] === '*' ? '0' : this.state.value[1], this.state.value[2] === '*' ? '0': this.state.value[2],this.state.value[3],'1/1', '?','*'];
            val[3] = `${e}`;
            this.props.onChange(val)
        }
    }
    onLastDayChange(e) {
        if(((parseInt(e) >> 0 && parseInt(e) <= 31)) || e == "") {
            let val = ['0',this.state.value[1] === '*' ? '0' : this.state.value[1], this.state.value[2] === '*' ? '0': this.state.value[2],this.state.value[3],'1/1', '?','*'];
            if(e == '') {
                    val[3] = ''
            } else {
                    val[3] = `L-${e}`;
            } 
            this.props.onChange(val)
        }
    }
    onAtHourChange(e) {
        let val = this.state.value;
        val[2] = `${e}`;
        this.props.onChange(val)
    }
    onAtMinuteChange(e) {
        let val = this.state.value;
        val[1] = `${e}`;
        this.props.onChange(val)
    }
    render() {
        this.state.value = this.props.value;
        return (<View className="tab-pane" >
                    <TouchableOpacity style={Object.assign({}, styles.schedule ,this.state.every === '1' ? styles.selectedSchedule : styles.nonSelected)}  onPress={(e) => {if(this.state.every !== "1" ) {this.setState({every:"1"}); this.props.onChange(['0',this.state.value[1] === '*' ? '0' : this.state.value[1], this.state.value[2] === '*' ? '0': this.state.value[2],'1','1/1', '?','*'])}}}>
                        <Text> Day</Text>
                        <TextInput 
                            style={{height: 40, borderColor: 'gray', borderWidth: 1, width:100}}
                            keyboardType='numeric'
                            onChangeText={this.onDayChange}
                            value={this.state.value[3]}
                            editable={this.state.every === "1"}
                            maxLength={2}  //setting limit of input
                            />
                        <Text>of every month(s)</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={Object.assign({}, styles.schedule ,this.state.every === '2' ? styles.selectedSchedule : styles.nonSelected)}  onPress={(e) => {if(this.state.every !== "2" ) {this.setState({every:"2"}); this.props.onChange(['0',this.state.value[1] === '*' ? '0' : this.state.value[1], this.state.value[2] === '*' ? '0': this.state.value[2],'L','*', '?','*'])}}}>
                        <Text> Last day of every month </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Object.assign({}, styles.schedule ,this.state.every === '3' ? styles.selectedSchedule : styles.nonSelected)}  onPress={(e) => {if(this.state.every !== "3" ) {this.setState({every:"3"}); this.props.onChange(['0',this.state.value[1] === '*' ? '0' : this.state.value[1], this.state.value[2] === '*' ? '0': this.state.value[2] ,'LW','*', '?','*'])}}}>
                        <Text> On the last weekday of every month </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Object.assign({}, styles.schedule ,this.state.every === '4' ? styles.selectedSchedule : styles.nonSelected)}  onPress={(e) => {if(this.state.every !== "4" ) {this.setState({every:"4"}); this.props.onChange(['0',this.state.value[1] === '*' ? '0' : this.state.value[1], this.state.value[2] === '*' ? '0': this.state.value[2],`L-${1}`,'*', '?','*'])}}}>
                    <TextInput 
                            style={{height: 40, borderColor: 'gray', borderWidth: 1, width:100}}
                            keyboardType='numeric'
                            onChangeText={this.onLastDayChange}
                            value={this.state.value[3].split('-')[1]}
                            editable={this.state.every === "4"}
                            maxLength={2}  //setting limit of input
                            />
                        <Text>day(s) before the end of the month</Text>
                    </TouchableOpacity>
                    <View style={{backgroundColor:'white', height:60, marginTop:10}}>
                        <StartTime minValue={this.state.value[1]} hrValue={this.state.value[2]}  onAtHourChange={this.onAtHourChange} onAtMinuteChange={this.onAtMinuteChange} />
                    </View>
                </View>)
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
