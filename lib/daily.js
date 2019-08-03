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
        this.onAtHourChange = this.onAtHourChange.bind(this);
        this.onAtMinuteChange = this.onAtMinuteChange.bind(this);
    }
    componentWillMount() {
        this.state.value = this.props.value;
        if(this.state.value[3] === '?') {
            this.state.every = false;
        } else {
            this.state.every = true;
        }
    }
    onDayChange(e) {
        // console.log(e)
        if((e > 0 && e < 32 ) || e == '') {
            let val = ['0',this.state.value[1] === '*' ? '0' : this.state.value[1], this.state.value[2] === '*' ? '0': this.state.value[2],'*','*','?','*'];
            if(e == '') {
                val[3] = '';
            } else {
                val[3] = `1/${e}`;
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
        return (<View  >
                    <TouchableOpacity style={Object.assign({}, styles.schedule ,this.state.every ? styles.selectedSchedule : styles.nonSelected) }  onPress={(e) => {if(!this.state.every ) {this.setState({every:true}) ; this.props.onChange()}}} >
                     
                        <Text>Every</Text>
                        <TextInput 
                            style={{height: 40, borderColor: 'gray', borderWidth: 1, width:100}}
                            keyboardType='numeric'
                            onChangeText={this.onDayChange}
                             value={this.state.value[3].split('/')[1] ? this.state.value[3].split('/')[1] :''}
                            disabled={this.state.every ? false: true}
                            maxLength={2}  //setting limit of input
                            />
                        
                        <Text> day(s) </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Object.assign({}, styles.schedule ,!this.state.every ? styles.selectedSchedule : styles.nonSelected) } onPress={(e) => {this.setState({every:false}); this.props.onChange(['0',this.state.value[1], this.state.value[2],'?','*', 'MON-FRI','*'])}}>
                        <Text> Every week day </Text>
                    </TouchableOpacity>
                   
                    <View style={{backgroundColor:'white', height:60, marginTop:10}}>
                        <StartTime  minValue={this.state.value[1]} hrValue={this.state.value[2]}  onAtHourChange={this.onAtHourChange} onAtMinuteChange={this.onAtMinuteChange} />

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
